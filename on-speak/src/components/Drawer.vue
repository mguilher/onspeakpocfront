<template>
  <v-navigation-drawer
    expand-on-hover
    permanent
    v-if="$store.getters['user/isLoggedIn'] && $vuetify.breakpoint.smAndUp"
  >
    <template v-slot:prepend>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img :src="$store.getters['user/authUser'].picture" />
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link two-line>
          <v-list-item-content>
            <v-list-item-title class="title">{{ $store.getters['user/authUser'].name }}</v-list-item-title>
            <v-list-item-subtitle>{{ $store.getters['user/authUser'].email }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </template>

    <v-divider></v-divider>

    <v-list nav dense>
      <v-list-item link v-for="item in items" :key="item.id" v-show="item.show" :to="item.link">
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-title >{{$t('text.'+item.name)}}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Drawer",
  props: ["drawer"],
  data() {
    return {
      theme: false,
      items: [
        {
          link: "/profile",
          name: "profile",
          icon: "mdi-account-card-details",
          id: 1,
          show: true
        },
        {
          link: "/myprojects",
          name: "my_projects",
          icon: "mdi-view-dashboard",
          id: 2,
          show: true
        },
        {
          link: "/myclasses",
          name: "my_classes",
          icon: "mdi-account-multiple",
          id: 3,
          show: true
        },
        {
          link: "/logout",
          name: "logout",
          icon: "mdi-account-arrow-right",
          id: 4,
          show: true
        }
      ]
    };
  },
  computed: {
    mode: {
      get() {
        return this.theme;
      },
      set(value) {
        this.theme = value;
      }
    },
    open: {
      get() {
        return this.drawer;
      },
      set(value) {
        this.$emit("drawer:update", value);
      }
    }
  }
};
</script>
