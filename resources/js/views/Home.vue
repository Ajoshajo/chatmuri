<template>
  <div v-if="user != null" class="chat-screen">
    <div class="new-card p-4">
      <div class="d-flex align-items-center justify-content-between">
        <vs-avatar primary>
          <i class="bx bxs-hot"></i>
        </vs-avatar>
        <h5 class="font-size-16 mb-0 text-truncate">ചാറ്റ് മുറി</h5>
        <div class="d-flex align-items-center">
          <div class="pr-2">{{ user.name }}</div>
          <div class="dropdown" v-on:click="menuhidden = !menuhidden">
            <vs-avatar badge badge-color="success">
              <i class="bx bx-user"></i>
            </vs-avatar>
            <transition name="fade">
              <div v-if="!menuhidden" class="new-card p-3 dropdown-content">
                <div>{{ user.name }}</div>
                <div>{{ user.email }}</div>

                <vs-button v-on:click="logout">Logout</vs-button>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <div
      :style="[conversations ? { overflow: 'hidden' } : {}]"
      style="height: 100%"
      class="row"
    >
      <transition name="zoom-fade" mode="in-out" appear>
        <div
          class="col-md-4 pr-4 pr-md-2"
          style="
            height: 100%;
            width: 100%;
            flex: 1;
            overflow: hidden;
            display: flex;
            flex-flow: column;
            background-color: white;
            z-index: 1;
          "
          :class="{ 'd-sm-none d-none d-md-block': hideBar }"
        >
          <h5 class="font-size-16 mb-0 text-truncate p-2 text-center">
            Conversations
          </h5>

          <div class="">
            <div class="pl-2">
              <div v-for="conversation in conversations" :key="conversation.id">
                <div
                  class="
                    mb-1
                    pl-2
                    d-flex
                    align-items-center
                    justify-content-start
                  "
                  style="
                    background-color: #f7f7fc;
                    border-radius: 0.5rem !important;
                  "
                  @click="openChat(conversation)"
                >
                  <vs-avatar primary>
                    <i class="bx bx-user"></i>
                  </vs-avatar>
                  <div class="d-flex flex-column justify-content-around pl-2">
                    <div>{{ conversation.receiver.name }}</div>
                    <div style="font-size: 0.8rem">
                      {{ conversation.receiver.email }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <router-view
        @toggleHideBar="() => (this.hideBar = !this.hideBar)"
        :key="$route.params.id"
        class="col-md-8"
        :class="{ 'd-sm-none d-none d-md-block': !hideBar }"
      >
      </router-view>
    </div>

    {{ isUserTyping }}
    <!-- <div class="chat-conversation p-3">
      <div>
        <infinite-loading
          v-if="messages.length"
          force-use-infinite-wrapper=".chat-conversation"
          web-component-name="conversation"
          spinner="spiral"
          direction="top"
          :distance="40"
          @infinite="loadMore"
        >
        </infinite-loading>
        <span>
          <div
            v-for="message in messages"
            :key="message.id"
            style="margin-bottom: 20px"
          >
            {{ message.message }}
          </div>
        </span>
      </div>
    </div> -->
  </div>
</template>
<script>
import InputVs from "../components/InputVs";
import Conversation from "../components/Conversation";
import InfiniteLoading from "vue-infinite-loading";
export default {
  components: {
    Conversation,
    InputVs,
    InfiniteLoading,
  },
  data() {
    return {
      menuhidden: true,
      conversations: [],
      typing: "",
      usertyping: "",
      date: null,
      hideBar: false,
    };
  },
  computed: {
    user: function () {
      return this.$store.getters.getUser;
    },
    isUserTyping: function () {
      return this.usertyping;
    },
  },
  methods: {
    openChat(chat) {
      this.$router
        .push({
          name: "chatpage",
          params: {
            id: chat.id,
            conversation: chat,
          },
        })
        .catch(() => {});
      this.hideBar = !this.hideBar;
    },
    closeMenu(e) {
      if (!this.$el.contains(e.target)) {
        console.log("close");
        this.menuhidden = true;
      }
    },
    loadMore(state) {
      console.log("Loaded");
      state.complete();
    },

    loadConverSations() {
      axios.get("conversations").then((res) => {
        console.log(res.data);
        this.conversations = res.data;
      });
    },
    isTyping(e) {
      let channel = Echo.private("chat");

      setTimeout(() => {
        channel.whisper("typing", {
          typing: this.user.name + " is Typing",
        });
      }, 1200);
    },
    logout() {
      this.$store.dispatch("logout");
      window.token = null;
      this.$router.replace({ name: "login" });
    },
  },
  created() {
    this.hideBar = this.$route.params.id != undefined ? true : false;
    this.loadConverSations();
    const loading = this.$vs.loading();
    axios
      .get("chats")
      .then((res) => {
        // this.messages = res.data.data.slice().reverse();
        loading.close();
      })
      .catch((err) => {
        // console.log(err.response);
        loading.close();
      });

    Echo.private("chat")
      .listen("MessageSentEvent", (e) => {
        // this.messages = [
        //   ...this.messages,
        //   {
        //     id: e.message.id,
        //     message: e.message.message,
        //     date: e.message.date,
        //     time: e.message.time,
        //     user: e.user,
        //     user_id: e.user.id,
        //     status: e.message.status,
        //   },
        // ];
        axios.post("message/delivered/" + e.message.id);
      })
      .listen("MessageDeliveredEvent", (e) => {
        const m = _.find(this.messages, { id: e.message.id });
        m.status = e.message.status;
      })
      .listenForWhisper("typing", (e) => {
        this.usertyping = e.typing;

        setTimeout(() => {
          this.usertyping = "";
        }, 1200);
      });
  },
};
</script>
