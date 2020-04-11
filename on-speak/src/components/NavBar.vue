<template>
  <div>
    <v-app-bar >

      <v-toolbar-title>
        <v-img :src="require('../assets/logo.png')" class="my-3" contain height="200"></v-img>
      </v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items v-if="$vuetify.breakpoint.smAndUp">
        <v-list-item v-for="item in items" :key="item.id" v-show="item.show">
          <v-list-item-content>
            <v-list-item-title>
              <v-btn text v-show="item.type=='text'" :to="item.link">{{$t('text.'+item.name)}}</v-btn>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn icon v-show="item.type=='icon'" v-on="on" :to="item.link">
                      <v-icon v-text="item.icon"></v-icon>
                    </v-btn>
                  </template>
                  <span>{{$t('text.'+item.name)}}</span>
                </v-tooltip>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

         <v-list-item v-for="it in languages" :key="it.id" @click="setLocale(it.iso)">
            <v-list-item-content>
               <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <flag :iso="it.flag" />
                  </template>
                  <span>{{$t('text.'+it.name)}}</span>
                </v-tooltip>
          </v-list-item-content>
         </v-list-item>
      </v-toolbar-items>

      <v-menu left bottom v-if="!$vuetify.breakpoint.smAndUp">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="item in items" :key="item.id" v-show="item.show">
            <v-list-item-content>
              <v-list-item-title>
                <v-btn text v-show="item.type=='text'" :to="item.link">{{$t('text.'+item.name)}}</v-btn>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn icon v-show="item.type=='icon'" v-on="on" :to="item.link">
                      <v-icon v-text="item.icon"></v-icon>
                    </v-btn>
                  </template>
                  <span>{{$t('text.'+item.name)}}</span>
                </v-tooltip>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="$store.getters['user/isLoggedIn']">
            <v-list-item-content>
              <v-avatar color="orange">
                <v-img :src="$store.getters['user/authUser'].picture" />
              </v-avatar>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="$store.getters['user/isLoggedIn']">
            <v-list-item-content>
              <v-list-item-title class="title">{{ $store.getters['user/authUser'].name }}</v-list-item-title>
              <v-list-item-subtitle>{{ $store.getters['user/authUser'].email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item v-for="it in languages" :key="it.id" @click="setLocale(it.iso)">
            <v-list-item-content>
               <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <flag :iso="it.flag" />
                  </template>
                  <span>{{$t('text.'+it.name)}}</span>
                </v-tooltip>
          </v-list-item-content>
         </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
//import { ENGLISH_DATEPICKER_LOCALE } from "../translations/dpl/en";
//import { FRENCH_DATEPICKER_LOCALE } from "../translations/dpl/fr";

export default {
  components: {},
  data: () => ({}),
  computed: {
    items() {
      let menuItems = [
        {
          title: "About",
          name: "about",
          icon: "",
          link: "/about",
          id: 1,
          type: "text",
          show: true
        },
        {
          title: "Sign up",
          name: "register",
          icon: "",
          link: "/register",
          id: 2,
          type: "text",
          show: !this.$store.getters["user/isLoggedIn"]
        },
        {
          title: "Login",
          name: "login",
          icon: "mdi-account",
          link: "/login",
          id: 3,
          type: "icon",
          show: !this.$store.getters["user/isLoggedIn"]
        },
        {
          title: "Logout",
          name: "logout",
          icon: "mdi-account-arrow-right",
          link: "/logoff",
          id: 4,
          type: "icon",
          show: this.$store.getters["user/isLoggedIn"]
        }
      ];
      return menuItems;
    },
    languages() {
      let langs = [
        {
          iso: "en",
          flag: "us",
          name: "english",
          icon: "",
          id:10
        },
        {
          iso: "pt",
          flag: "br",
          name: "portuguese",
          icon: "mdi-account",
          id:30
        }
      ];
      return langs;
    },
  },
  methods: {
    setLocale(locale) {
      this.$root.$i18n.locale = locale;
      if (locale == "en") {
        //this.$material.locale = ENGLISH_DATEPICKER_LOCALE;
      } else if (locale == "fr") {
        //this.$material.locale = FRENCH_DATEPICKER_LOCALE;
      }
      localStorage.setItem("locale", locale);
    },
    beforeMount() {
      const locale = localStorage.getItem("locale") || "en";
      this.$root.$i18n.locale = locale;
      if (locale == "en") {
        //this.$material.locale = ENGLISH_DATEPICKER_LOCALE;
      } else if (locale == "fr") {
        //this.$material.locale = FRENCH_DATEPICKER_LOCALE;
      }
    }
  }
};
</script>