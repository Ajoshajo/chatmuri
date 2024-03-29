/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;
import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api'
import App from './App.vue'
import router from './routes'
import Vuesax from 'vuesax'
import VueSweetalert2 from 'vue-sweetalert2'
import store from './store'
import linkify from 'vue-linkify'
import VueChatScroll from 'vue-chat-scroll'

Vue.directive('linkified', linkify)


Vue.use(Vuesax)
Vue.use(VueCompositionApi)
Vue.use(VueSweetalert2)
Vue.use(VueChatScroll)

window.axios.defaults.baseURL = '/api/v1/'
const token = localStorage.getItem('token')
if (token) {
    window.token = token
    window.axios.defaults.headers.common['Authorization'] = "Bearer " +
        token
}


new Vue({
    router,
    store,
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