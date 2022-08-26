import Vue from 'vue';
import VueRouter from 'vue-router'
import store from './store'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        // redirect: { name: 'login' }
        name: 'home',
        component: () =>
            import ('./views/Home.vue'),
        meta: {
            requireLogin: true
        },
        children: [{
            'path': 'chat/:id',
            'name': 'chatpage',
            component: () =>
                import ('./views/ChatPage.vue')
        }]
    }, {
        path: '',
        component: () =>
            import ('./layout/Base'),
        children: [{
            path: '/login',
            name: 'login',
            component: () =>
                import ('./views/Login.vue')
        }, {
            path: '/register',
            name: 'register',
            component: () =>
                import ('./views/Register.vue')
        }]

    }]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireLogin) && !window.token) {
        next({
            name: 'login'
        })
    }
    next()


})

export default router;