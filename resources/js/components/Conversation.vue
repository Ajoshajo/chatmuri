<template>
  <div class="chat-conversation p-3">
    <div v-if="messages.length">
      <infinite-loading
        v-if="messages.length"
        spinner="spiral"
        force-use-infinite-wrapper=".chat-conversation"
        direction="top"
        :distance="10"
        @infinite="loadMoreMessages"
      >
      </infinite-loading>
      <ul class="chat-list" id="chat-screen">
        <span>
          <li
            v-for="(message, i) in messages"
            :key="message.id"
            :class="{ right: user.id == message.user_id }"
          >
            <message
              :message="message"
              :user="user"
              :index="i"
              :messages="messages"
            />
          </li>
        </span>
        <transition name="fade">
          <li class="text-center">
            {{ usertyping }}
          </li>
        </transition>
      </ul>
    </div>
    <div v-else class="container">
      <div
        class="d-flex flex-column justify-content-between mh-100 text-center"
      >
        <h2>Hey {{ user.name }}</h2>
        <h5>No Messages Here!</h5>
      </div>
    </div>
  </div>
</template>
<script>
import Message from "./Message";
import InfiniteLoading from "vue-infinite-loading";
export default {
  name: "Conversation",
  components: {
    InfiniteLoading,
    Message,
  },
  props:["messages"],
  data() {
    return {
      infiniteState: null,
      loadingMore: false,
      page: 1,
    };
  },
  computed: {
    user: function () {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    loadMoreMessages: function (state) {
      console.log(state);
      setTimeout(() => {
        if (this.loadingMore) return;
        this.page++;
        this.loadMessages(this.page, state);
        this.infiniteState = state;
        this.loadMore = true;
      });
    },
    loadMessages(p, state) {
      axios.get("chats?page=" + p).then((res) => {
        if (res.data.data.length) {
          this.messages = [...res.data.data, ...this.messages];
          state.loaded();
        } else {
          state.complete();
        }
      });
    },
  },
  mounted() {
    // this.loadMessages(1)
  },
};
</script>
