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
    auth_success(state, token, user) {
        state.status = 'success'
        state.token = token
        state.user = user
    },
    auth_error(state) {
        state.status = 'error'
    },
    logout(state) {
        state.status = ''
        state.token = ''
        state.user = null
    },
    registration(state,completed) {
        state.registrationCompleted = completed
        localStorage.setItem('registrationCompleted', completed)
    },
    initialiseAuth(state) {
        if (localStorage.getItem('expires_at')) {
            if (new Date().getTime() < localStorage.getItem('expires_at')) {
                console.log("expires_at")
                if (localStorage.getItem('onspeaktoken')) {
                    state.token = localStorage.getItem('onspeaktoken')
                }

                if (localStorage.getItem('registrationCompleted')) {
                    state.registrationCompleted = localStorage.getItem('registrationCompleted')
                }

                if (localStorage.getItem('onspeakuser')) {
                    try {
                        state.user = JSON.parse(localStorage.getItem('onspeakuser'))
                    } catch (e) {
                        console.log(e)
                    }
                }
            }
            else {
                localStorage.removeItem('onspeakuser')
                localStorage.removeItem('onspeaktoken')
            }
        }
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}