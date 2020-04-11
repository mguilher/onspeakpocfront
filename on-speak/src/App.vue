<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-content>
      <v-container fluid style="min-height: 500px;">
        <v-row>
            <drawer></drawer>
            <router-view></router-view>
        </v-row>
      </v-container>
    </v-content>
    <page-footer></page-footer>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
import PageFooter from "@/components/PageFooter";
import Drawer from "@/components/Drawer";

export default {
  name: "App",
  components: {
    NavBar,
    PageFooter,
    Drawer
  },
  data: () => ({
  }),
};
</script>