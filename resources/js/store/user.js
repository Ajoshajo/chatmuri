const state = {
    user: null,
    token: null
}

const getters = {
    isLoggedIn: state => !!state.user,
    getUser: state => state.user,
    getToken: state => state.token
}

const actions = {
    async login({
        commit
    }, data) {
        await commit('login', data)
    },
    async setUser({
        commit
    }, user) {
        await commit('setUser', user)
    },
    async logout({
        commit
    }) {
        await commit('logout')
    }
}

const mutations = {
    setUser(state, user) {
        state.user = user
    },
    login(state, data) {
        state.user = data.user
        state.token = data.token
        localStorage.setItem('token', data.token)
        window.token = data.token
        window.axios.defaults.headers.common['Authorization'] = "Bearer " +
            data.token
        window.Echo.connector.pusher.config.auth.headers['Authorization'] = "Bearer " +
            data.token
    },
    logout() {
        state.user = null
        state.token = null
        localStorage.clear()
    }
}

export
const auth = {
    state,
    getters,
    actions,
    mutations
}