<template>
  <div
    v-if="user != null"
    class="d-flex flex-column justify-content-between flex-wrap"
  >
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
            :class="{ right: message.id % 2 == 0 }"
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
                      <span class="align-middle">22 Jun 21, 08:58 pm</span>
                    </p>
                  </div>
                </div>
                <div class="conversation-name">{{ message.user }}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="new-card p-3 p-lg-4 mb-0">
      <div class="d-flex align-items-center justify-content-between">
        <!-- <div class="pr-2 mw-100"> -->
        <input-vs
          placeholder="Type your message"
          class="pr-2"
          v-model="newMessage"
          value="newMessage"
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
      newMessage: '',
      messages: [
        {
          id: 1,
          user: "jo",
          message: "helo",
        },
      ],
    };
  },
  computed: {
    user: function () {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    send() {
      this.messages.push({
        id: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
        user: this.user.name,
        message: this.newMessage,
      });
      this.newMessage = ''
    },
    logout() {
      this.$store.dispatch("logout");
      window.token = null;
      this.$router.replace({ name: "login" });
    },
  },
};
</script>
<style>
.chat-conversation .right .conversation-list .chat-time {
  text-align: left;
  color: #7a7f9a;
}
.chat-conversation .right .conversation-list .ctext-wrap .ctext-wrap-content {
  order: 2;
  background-color: #fff;
  color: #343a40;
  text-align: right;
  border-radius: 8px 8px 0px 8px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
  -webkit-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
}
.chat-conversation
  .right
  .conversation-list
  .ctext-wrap
  .ctext-wrap-content:before {
  border: 5px solid transparent;
  border-top-color: #fff;
  border-right-color: #fff;
  left: auto;
  right: 0px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
  -webkit-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
}
.chat-conversation .right .conversation-list .chat-avatar {
  order: 3;
  margin-right: 0px;
  margin-left: 16px;
}
.chat-conversation .right .conversation-list {
  float: right;
  text-align: right;
}
.chat-conversation .conversation-list .ctext-wrap-content:before {
  content: "";
  position: absolute;
  border: 5px solid transparent;
  border-left-color: #7269ef;
  border-top-color: #7269ef;
  left: 0;
  bottom: -10px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
  -webkit-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
}
.chat-conversation .conversation-list .chat-time {
  font-size: 12px;
  margin-top: 4px;
  text-align: right;
  color: rgba(255, 255, 255, 0.7);
}
.chat-conversation .conversation-list .ctext-wrap-content {
  padding: 12px 20px;
  background-color: #7269ef;
  border-radius: 8px 8px 8px 0;
  color: #fff;
  position: relative;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
  -webkit-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
}
.chat-conversation .conversation-list .ctext-wrap {
  display: flex;
  margin-bottom: 10px;
}
.chat-conversation .conversation-list .user-chat-content {
  margin-left: 10px;
}
.chat-conversation .conversation-list {
  margin-bottom: 24px;
  display: inline-flex;
  position: relative;
  align-items: flex-end;
}
.chat-list {
  padding-left: 0;
  list-style: none;
}
.chat-conversation li {
  clear: both;
}
@media (min-width: 576px) {
  .chat-conversation {
    max-height: calc(100vh - 174px) !important;
  }
  .chat-section {
    height: calc(100vh - 174px) !important;
  }
}
@media (min-width: 768px) {
  .chat-conversation {
    max-height: calc(100vh - 174px) !important;
  }
  .chat-section {
    height: calc(100vh - 174px) !important;
  }
}
@media (min-width: 992px) {
  .chat-conversation {
    max-height: calc(100vh - 190px) !important;
  }
  .chat-section {
    height: calc(100vh - 190px) !important;
  }
}
.chat-input {
  background: #fff;
}

.chat-conversation {
  width: 100%;
  position: absolute;
  bottom: 0;
  overflow: auto;
  max-height: calc(100vh - 224px);
  display: flex;
  flex-direction: column-reverse;
}
.chat-section {
  position: relative;
  height: calc(100vh - 224px);
}

.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  position: absolute;
  right: 0;
  z-index: 1;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
.dropdown-content-hidden {
  display: none;
}
.dropdown-content .item {
  display: block;
}
</style>
