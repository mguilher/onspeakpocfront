import userservice from '../../services/userservice'

// initial state
const state = {
    status: '',
    token: '',
    user: null,
    registrationCompleted:null
}

// getters
const getters = {
    isLoggedIn: state => !!state.user,
    authStatus: state => state.status,
    authUser: state => state.user,
    registrationCompleted: state => state.RegistrationCompleted,
}

// actions
const actions = {
    async login({ commit }, p) {
        localStorage.setItem('onspeaktoken',p.token)
        localStorage.setItem('onspeakuser', JSON.stringify(p.user));
        commit('auth_success', p.token, p.user)
        let user=await userservice.sendUser(p.user)
        if(!user.RegistrationCompleted){
            commit('registration', user.RegistrationCompleted)
        }
    },
}

// mutations
const mutations = {
    auth_request(state) {
        state.status = 'loading'
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}