<template>
  <div>
    <div v-if="showDate" class="chat-date">
      {{ message.date }}
    </div>
    <transition name="zoom-out" mode="out-in" appear>
      <div class="conversation-list">
        <vs-avatar
          class="chat-avatar"
          :class="{
            visible: showName,
          }"
        >
          <i class="bx bx-user"></i>
        </vs-avatar>

        <div class="user-chat-content">
          <div class="ctext-wrap">
            <div class="ctext-wrap-content">
              <p class="mb-0" v-linkified>{{ message.message }}</p>
              <p class="chat-time mb-0">
                <i class="bx bx-time align-middle"></i>
                <span class="align-middle">{{ message.time }}</span>
                <i
                  v-if="user.id == message.user_id"
                  :class="{
                    'bx bx-check': !message.status,
                    'bx bx-check-double': message.status,
                  }"
                  class="status align-middle"
                ></i>
              </p>
            </div>
          </div>

          <div class="conversation-name" v-if="showName">
            {{ message.user.name }}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    message: { type: Object, required: true },
    messages: { type: Array, required: true },
    index: { type: Number, required: true },
    user: { type: Object, required: true },
  },
  computed: {
    showDate() {
      return (
        (this.index > 0 &&
          this.message.date !== this.messages[this.index - 1].date) ||
        this.index == 0
      );
    },
    showName() {
      return (
        (this.index < this.messages.length - 1 &&
          this.messages[this.index + 1].user_id !== this.message.user_id) ||
        this.index == this.messages.length - 1 ||
        this.message.date !== this.messages[this.index + 1].date
      );
    },
  },
  methods:{
    getDate(date){
        
    }
  }
};
</script>
