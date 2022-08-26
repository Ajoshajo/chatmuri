<template>
  <transition name="slide-one-fade" mode="out-in" appear>
    <div
      style="
        height: 100%;
        width: 100%;
        flex: 1;
        overflow: hidden;
        display: flex;
        flex-flow: column;
        padding-left: 0;
      "
      class="col pl-3 pl-sm-3 pl-md-0"
    >
      <div class="new-card p-2 border-top border-2">
        <div class="d-flex align-items-center justify-content-between">
          <vs-avatar @click="closeChat">
            <i class="bx bx-x"></i>
          </vs-avatar>
          <h5 class="font-size-16 mb-0 text-truncate">ചാറ്റ് മുറി</h5>
          <div class="d-flex align-items-center">
            <div class="pr-2">
              <i class="bx bx-dots-vertical-rounded"></i>
            </div>
          </div>
        </div>
      </div>
      <conversation :messages="messages" />
      <div class="new-card p-3 p-lg-4 mb-0">
        <form @submit.prevent="send">
          <div class="d-flex align-items-center justify-content-between">
            <!-- <div class="pr-2 mw-100"> -->
            <vs-button disabled>
              <i class="bx bxs-happy"></i>
            </vs-button>
            <input-vs
              placeholder="Type your message"
              class="pr-2"
              v-model="newMessage"
              @change="isTyping"
              :disabled="sending"
            ></input-vs>
            <!-- </div> -->
            <vs-button
              border
              :disabled="sending || newMessage == ''"
              @click="send"
            >
              <i class="bx bxs-paper-plane"></i> Send
            </vs-button>
          </div>
        </form>
      </div>
    </div>
  </transition>
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
      messages: [],
      sending: false,
      newMessage: "",
    };
  },
  methods: {
    closeChat() {
      this.$router.push({ name: "home" }).catch();
      this.$emit("toggleHideBar");
    },
    send() {
      this.sending = true;
      if (this.newMessage != "") {
        axios
          .post("message/send", {
            message: this.newMessage,
            conversation_id: this.$route.params.id,
          })
          .then((res) => {
            this.messages = [
              ...this.messages,
              {
                id: res.data.message.id,
                user: this.user,
                user_id: res.data.message.user_id,
                message: res.data.message.message,
                date: res.data.message.date,
                time: res.data.message.time,
                status: res.data.message.status,
              },
            ];
            this.sending = false;
            this.newMessage = "";
          })
          .catch();
      }
    },
    loadMessages() {
      axios
        .get("chats", { params: { conversation_id: this.$route.params.id } })
        .then((res) => {
          if (res.data.data.length) {
            this.messages = [...res.data.data, ...this.messages];
          } else {
          }
        });
    },
  },
  computed: {
    user: function () {
      return this.$store.getters.getUser;
    },
  },
  mounted() {
    this.loadMessages();
  },
};
</script>

