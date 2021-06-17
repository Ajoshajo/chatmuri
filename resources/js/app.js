/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;
import Vue from 'vue';
import VueMomentsAgo from 'vue-moments-ago'
import App from './App.vue'
import router from './routes'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'boxicons/css/boxicons.min.css'

Vue.use(Vuesax);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

// const app = new Vue({
//     el: '#app',
//     data: {
//         messages: [],
//         newMessage: '',
//         typing: false,
//         user: '',
//         sender: ''
//     },
//     components: {
//         VueMomentsAgo
//     },
//     created() {
//         this.sender = window.user;
//         this.fetchMessages();

//         Echo.private('chat')
//             .listen('MessageSentEvent', (e) => {
//                 console.log(e);
//                 this.messages.push({
//                     message: e.message.message,
//                     created_at: e.message.created_at,
//                     user: e.user
//                 });
//             })
//             .listenForWhisper('typing', (e) => {
//                 this.user = e.name;
//                 this.typing = true;

//                 setTimeout(() => {
//                     this.user = ''
//                 }, 900);
//             });


//     },
//     methods: {
//         fetchMessages() {
//             axios.get('/messages').then(response => {
//                 this.messages = response.data;
//             });
//         },

//         addMessage(message) {
//             axios.post('/messages', {
//                 message
//             }).then(response => {
//                 this.messages.push({
//                     message: response.data.message.message,
//                     created_at: response.data.message.created_at,
//                     user: response.data.user
//                 });
//             });
//         },

//         isTyping() {
//             let channel = Echo.private('chat')

//             setTimeout(() => {
//                 channel.whisper('typing', {
//                     name: window.user.name
//                 })
//             }, 300)
//         },

//         sendMessage() {
//             this.addMessage(this.newMessage);
//             this.newMessage = '';
//         }
//     }
// });
