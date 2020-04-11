import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import profile from './modules/profile'
import address from './modules/address'
//import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        user,
        profile,
        address,
    },
    strict: debug,
    //plugins: debug ? [createLogger()] : []
    state: {
        sessionexpired: (localStorage.getItem('expires_at') != undefined)
    },
    mutations: {
    },
    actions: {

    },
    getters: {
        sessionexpired: state => state.sessionexpired,
    }
})