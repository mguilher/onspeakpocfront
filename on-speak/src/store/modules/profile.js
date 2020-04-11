import profileService from '../../services/profileservice'

// initial state
const state = {
    name: '',
    calledName: '',
    email: '',
    phoneNumber: '',
    skypeUserName: '',
    address: {},
    birthDate:null,
    native:"",
    registrationCompleted: null
}

// getters
const getters = {
    name: state => state.name,
    calledName: state => state.calledName,
    email: state => state.email,
    phoneNumber: state => state.phoneNumber,
    skypeUserName: state => state.skypeUserName,
    address: state => state.address,
    registrationCompleted: state => state.RegistrationCompleted,
    birthDate: state => state.birthDate,
    native: state => state.native,
}

// actions
const actions = {
    async completeRegistration({ commit }) {

        let Profile = {
            Name: state.name,
            CalledName: state.calledName,
            Email: state.email,
            PhoneNumber : state.phoneNumber,
            SkypeUserName : state.skypeUserName,
            LoginIdentification : "",
            Mobile : false,
            BirthDate : state.birthDate,
            NativeLanguage : state.native,
            Address: state.address,
        }

        let obj = await profileService.completeRegistration(Profile)
        if (!obj.Id) {
            commit('user/registrationProfile', obj.Id)
        }
    },
}

// mutations
const mutations = {
    set_fields(state, name, calledName, email, phoneNumber, skypeUserName, address, registrationCompleted) {
        state.name = name
        state.calledName = calledName
        state.email = email
        state.phoneNumber = phoneNumber
        state.skypeUserName = skypeUserName
        state.address = address
        state.registrationCompleted = registrationCompleted
    },
    setName(state, name) {
        state.name = name
    },
    setCalledName(state, calledName) {
        state.calledName = calledName
    },
    setEmail(state, email) {
        state.email = email
    },
    setPhoneNumber(state, phoneNumber) {
        state.phoneNumber = phoneNumber
    },
    setSkypeUserName(state, skypeUserName) {
        state.skypeUserName = skypeUserName
    },
    setAddress(state, address) {
        state.address = address
    },
    setRegistrationCompleted(state, registrationCompleted) {
        state.registrationCompleted = registrationCompleted
    },
    setNative(state, native) {
        state.native = native
    },
    setBirthDate(state, birthDate) {
        state.birthDate = birthDate
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}