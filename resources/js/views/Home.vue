<template>
  <div v-if="user != null" class="d-flex flex-column justify-content-between">
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
            <div v-if="!menuhidden" class="new-card p-3 dropdown-content">
              <div>{{ user.name }}</div>
              <div>{{ user.email }}</div>

              <vs-button v-on:click="logout">Logout</vs-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mh-100 chat-section">
      <div
        class="chat-conversation align-self-end p-3"
        data-simplebar-auto-hide="true"
      >
        <ul class="chat-list">
          <li
            v-for="message in messages"
            :key="message.id"
            :class="{ right: user.id == message.user_id }"
          >
            <div class="conversation-list">
              <vs-avatar class="chat-avatar">
                <i class="bx bx-user"></i>
              </vs-avatar>

              <div class="user-chat-content">
                <div class="ctext-wrap">
                  <div class="ctext-wrap-content">
                    <p class="mb-0">{{ message.message }}</p>
                    <p class="chat-time mb-0">
                      <i class="ri-time-line align-middle"></i>
                      <span class="align-middle">{{ message.created_at }}</span>
                    </p>
                  </div>
                </div>
                <div class="conversation-name">{{ message.user.name }}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer fixed-bottom new-card p-3 p-lg-4 mb-0">
      <div class="d-flex align-items-center justify-content-between">
        <!-- <div class="pr-2 mw-100"> -->
        <input-vs
          placeholder="Type your message"
          class="pr-2"
          v-model="newMessage"
        ></input-vs>
        <!-- </div> -->
        <vs-button border @click="send">
          <i class="bx bxs-paper-plane"></i> Send
        </vs-button>
      </div>
    </div>
  </div>
</template>
<script>
import InputVs from "../components/InputVs";
import simplebar from "simplebar-vue";
export default {
  components: {
    simplebar,
    InputVs,
  },
  data() {
    return {
      menuhidden: true,
      newMessage: "",
      messages: [],
    };
  },
  computed: {
    user: function () {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    send() {
      if (this.newMessage != "") {
        axios
          .post("message/send", { message: this.newMessage })
          .then((res) => {
            this.messages.push({
              id: res.data.id,
              user: this.user,
              user_id: res.data.message.user_id,
              message: res.data.message.message,
              created_at: res.data.message.created_at,
            });
          })
          .catch();

        this.newMessage = "";
      }
    },
    logout() {
      this.$store.dispatch("logout");
      window.token = null;
      this.$router.replace({ name: "login" });
    },
  },
  mounted() {
    const loading = this.$vs.loading();
    axios
      .get("chats")
      .then((res) => {
        this.messages = res.data;
        loading.close();
      })
      .catch((err) => {
        console.log(err.response);
        loading.close();
      });

    Echo.private("chat").listen("MessageSentEvent", (e) => {
      console.log(e);
      this.messages.push({
        id: e.message.id,
        message: e.message.message,
        created_at: e.message.created_at,
        user: e.user,
        user_id: e.user.id,
      });
    });
  },
};
</script>
