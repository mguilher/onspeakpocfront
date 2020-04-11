import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import router from './router'
import VueI18n from 'vue-i18n';
import { ENGLISH_TRANSLATIONS } from './translations/en';
import { PORTUGUESE_TRANSLATIONS } from './translations/pt';
import FlagIcon from 'vue-flag-icon'
import '@mdi/font/css/materialdesignicons.css'
Vue.use(FlagIcon);

// Import the Auth0 configuration
//import { domain, clientId, audience } from "../auth_config.json";

// Import the plugin here
//import { Auth0Plugin } from "./auth";

Vue.config.productionTip = false

import auth from './auth/auth.js'
Vue.use(auth)

// Install the authentication plugin here
/*Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    console.log(appState)
       router.push(
        appState && appState.targetUrl
          ? appState.targetUrl
          : window.location.pathname
      );
  }
});*/

Vue.use(VueI18n)

const TRANSLATIONS = {
  en: ENGLISH_TRANSLATIONS,
  pt: PORTUGUESE_TRANSLATIONS,
}
const i18n = new VueI18n({
  locale: 'en',
  messages: TRANSLATIONS,
})

new Vue({
  i18n,
  vuetify,
  store,
  router,
  render: h => h(App),
  beforeCreate() {
    this.$store.commit('user/initialiseAuth')
    console.log("isAuthenticated=" + this.$auth.isAuthenticated())
    console.log("sessionexpired=" + this.$store.getters.sessionexpired)
    if (!this.$auth.isAuthenticated() && this.$store.getters.sessionexpired) {
      this.$store.commit('user/logout')
      this.$auth.clear()
    }
    if (this.$auth.isAuthenticated() && !this.$store.getters['user/registrationCompleted']) {
      router.push("CompleteReg")
    }
  }
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['user/isLoggedIn']) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})