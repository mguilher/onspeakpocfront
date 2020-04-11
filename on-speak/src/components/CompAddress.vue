<template>
  <div>
    <v-text-field v-model="name" :rules="nameRules" :label="$t('text.address_name')" required></v-text-field>
    <v-text-field v-model="zipOrPostcode" :rules="zipOrPostcodeRules" :label="$t('text.zipcode')" required></v-text-field>
    <v-combobox
      v-model="country"
      :rules="countryRules"
      :items="countries"
      :label="$t('text.country')"
      :filter="this.filters[1].fn"
      @change="getCountryStates()"
      required
    ></v-combobox>
    <v-combobox
      v-model="stateOrProvince"
      :rules="stateOrProvinceRules"
      :items="countryStates"
      :label="$t('text.state')"
      :filter="this.filters[1].fn"
      @change="getCitys()"
      required
    ></v-combobox>
    <v-combobox
      v-model="city"
      :rules="cityRules"
      :items="stateCitys"
      :label="$t('text.city')"
      :filter="this.filters[1].fn"
      required
    ></v-combobox>
    <v-text-field v-model="neighborhood" :rules="neighborhoodRules" :label="$t('text.neighborhood')" required></v-text-field>
    <v-text-field v-model="streetOrAddress" :rules="streetOrAddressRules" :label="$t('text.street')"  required></v-text-field>
    <v-text-field v-model="streetNumber" :rules="streetNumberRules" :label="$t('text.street_number')" required></v-text-field>
    <v-text-field v-model="suiteOrApartment" :label="$t('text.apartment')" required></v-text-field>
  </div>
</template>
  <script>
import countryservice from "../services/countryservice";

export default {
  name: "CompAddress",
  data: () => ({
    valid: true,
    lazy: false,
    nameRules: [
      v => !!v || "Address Name is required",
      v =>
        (v && v.length >= 2 && v.length <= 101) ||
        "Address Name must be less than 101 and more 2 characters"
    ],
    zipOrPostcodeRules: [v => !!v || "Zipcode  is required"],
    streetOrAddressRules: [v => !!v || "Street  is required"],
    //suiteOrApartmentRules: [v => !!v || "suiteOrApartment  is required"],
    cityRules: [v => !!v || "city  is required"],
    stateOrProvinceRules: [v => !!v || "State  is required"],
    countryRules: [v => !!v || "Country  is required"],
    streetNumberRules: [v => !!v || "Street Number  is required"],
    neighborhoodRules: [v => !!v || "Neighborhood  is required"],
    countries: [],
    countryStates: [],
    stateCitys: [],
    filters: [
      {
        value: 0,
        fn: (item, queryText, itemText) => item.indexOf(queryText) > -1,
        text: "Exact Match"
      },
      {
        value: 1,
        fn: (item, queryText, itemText) =>
          queryText.length >= 2 && item.toLowerCase().indexOf(queryText) > -1,
        text: "Search Length >= 2 & Loose Match"
      }
    ]
  }),
  computed: {
    name: {
      get: function() {
        return this.$store.getters["address/name"];
      },
      set: function(d) {
        this.$store.commit("address/setName", d);
      }
    },
    zipOrPostcode: {
      get: function() {
        return this.$store.getters["address/zipOrPostcode"];
      },
      set: function(d) {
        this.$store.commit("address/setZipOrPostcode", d);
      }
    },
    streetOrAddress: {
      get: function() {
        return this.$store.getters["address/streetOrAddress"];
      },
      set: function(d) {
        this.$store.commit("address/setStreetOrAddress", d);
      }
    },
    suiteOrApartment: {
      get: function() {
        return this.$store.getters["address/suiteOrApartment"];
      },
      set: function(d) {
        this.$store.commit("address/setSuiteOrApartment", d);
      }
    },
    city: {
      get: function() {
        return this.$store.getters["address/city"];
      },
      set: function(d) {
        this.$store.commit("address/setCity", d);
      }
    },
    stateOrProvince: {
      get: function() {
        return this.$store.getters["address/stateOrProvince"];
      },
      set: function(d) {
        this.$store.commit("address/setStateOrProvince", d);
      }
    },
    country: {
      get: function() {
        return this.$store.getters["address/country"];
      },
      set: function(d) {
        this.$store.commit("address/setCountry", d);
      }
    },
    streetNumber: {
      get: function() {
        return this.$store.getters["address/streetNumber"];
      },
      set: function(d) {
        this.$store.commit("address/setStreetNumber", d);
      }
    },
    longitude: {
      get: function() {
        return this.$store.getters["address/longitude"];
      },
      set: function(d) {
        this.$store.commit("address/setLongitude", d);
      }
    },
    latitude: {
      get: function() {
        return this.$store.getters["address/latitude"];
      },
      set: function(d) {
        this.$store.commit("address/setLatitude", d);
      }
    },
    neighborhood: {
      get: function() {
        return this.$store.getters["address/neighborhood"];
      },
      set: function(d) {
        this.$store.commit("address/setNeighborhood", d);
      }
    }
  },
  methods: {
    getCountries:function () {
      console.log("getCountries")
      if (!this.country) {
        countryservice
          .getCountries()
          .then(response => {
            this.countries = response.data.countries;
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    getCountryStates: function () {
      console.log("getCountryStates")
      if (this.country) {
        countryservice
          .getCountryStates(this.country)
          .then(response => {
            this.countryStates = response.data.states;
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    getCitys: function () {
      console.log("getCitys")
      if (this.country && this.stateOrProvince) {
        countryservice
          .getCountryStateCitys(this.country, this.stateOrProvince)
          .then(response => {
            this.stateCitys = response.data.citys;
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  },
  mounted() {
    console.log("mounted")
    this.getCountries();
  }
};
</script>