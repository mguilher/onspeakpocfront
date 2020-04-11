
// initial state
const state = {
    zipOrPostcode: '',
    streetOrAddress: '',
    suiteOrApartment: '',
    city: '',
    stateOrProvince: '',
    country: '',
    name: '',
    streetNumber: 0,
    longitude: 0,
    latitude: 0,
    neighborhood: '',
}

// getters
const getters = {
    zipOrPostcode: state => state.zipOrPostcode,
    streetOrAddress: state => state.streetOrAddress,
    suiteOrApartment: state => state.suiteOrApartment,
    city: state => state.city,
    stateOrProvince: state => state.stateOrProvince,
    country: state => state.country,
    name: state => state.name,
    streetNumber: state => state.streetNumber,
    longitude: state => state.longitude,
    latitude: state => state.latitude,
    neighborhood: state => state.neighborhood,
}

// actions
const actions = {
    getAddress() {
        return new Promise((resolve) => {
            let adress = {
                ZipOrPostcode: state.zipOrPostcode,
                StreetOrAddress: state.streetOrAddress,
                SuiteOrApartment: state.suiteOrApartment,
                City: state.city,
                StateOrProvince: state.stateOrProvince,
                Country: state.country,
                Name: state.name,
                StreetNumber: state.streetNumber,
                Longitude: state.longitude,
                Latitude: state.latitude,
                Neighborhood: state.neighborhood
            }
            resolve(adress)
        })
    }
}

// mutations
const mutations = {
    setAddress(state, zipOrPostcode, streetOrAddress, suiteOrApartment, city,
        stateOrProvince, country, name, streetNumber, longitude, latitude, neighborhood) {
        state.zipOrPostcode = zipOrPostcode
        state.streetOrAddress = streetOrAddress
        state.suiteOrApartment = suiteOrApartment
        state.city = city
        state.stateOrProvince = stateOrProvince
        state.country = country
        state.name = name
        state.streetNumber = streetNumber
        state.longitude = longitude
        state.latitude = latitude
        state.neighborhood = neighborhood
    },
    setZipOrPostcode(state, zipOrPostcode) {
        state.zipOrPostcode = zipOrPostcode
    },
    setStreetOrAddress(state, streetOrAddress) {
        state.streetOrAddress = streetOrAddress
    },
    setSuiteOrApartment(state, suiteOrApartment) {
        state.suiteOrApartment = suiteOrApartment
    },
    setCity(state, city) {
        state.city = city
    },
    setStateOrProvince(state, stateOrProvince) {
        state.stateOrProvince = stateOrProvince
    },
    setCountry(state, country) {
        state.country = country
    },
    setName(state, name) {
        state.name = name
    },
    setStreetNumber(state, streetNumber) {
        state.streetNumber = streetNumber
    },
    setLongitude(state, longitude) {
        state.longitude = longitude
    },
    setLatitude(state, latitude) {
        state.latitude = latitude
    },
    setNeighborhood(state, neighborhood) {
        state.neighborhood = neighborhood
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}