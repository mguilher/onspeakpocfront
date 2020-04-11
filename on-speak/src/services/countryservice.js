import Api from '@/services/api'

export default {
    getCountries() {
        return Api().get('/country/')
    },
    getCountryStates(country) {
        return Api().get('/country/states/' + country)
    },
    getCountryStateCitys(country, countrystate) {
        return Api().get('/country/citys/' + country + "/" + countrystate)
    },
}