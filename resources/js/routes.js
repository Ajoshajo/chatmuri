import Vue from 'vue';
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        redirect: { name: 'login' }
        // name: 'home',
        // component: () =>
        //     import ('./views/Home.vue')
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

export default router;
