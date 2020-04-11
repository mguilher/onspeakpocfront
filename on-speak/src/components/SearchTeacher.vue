<template>
  <v-card>
    <v-card-text>
      <v-row>
        <v-col  class="ma-3 pa-6">
          <v-text-field v-model="name" 
          :counter="106" 
          :label="$t('text.name')" 
          required>
          </v-text-field>
        </v-col>
        <v-col  class="ma-3 pa-6">
          <v-combobox
            v-model="native"
            :items="nats"
            :label="$t('text.native_language')"
            :filter="(item, queryText, itemText) => queryText.length >= 2 && item.toLowerCase().indexOf(queryText) > -1"
            required
          ></v-combobox>
        </v-col>
        <v-col  class="ma-3 pa-6">
          <v-btn color="warning" fab dark>
            <v-icon>mdi-account-search-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
  <script>
import json from "../assets/languages.json";
export default {
  name: "SearchTeacher",
  data: () => ({
    valid: true
  }),
  computed: {
    name: {
      get: function() {
        return this.$store.getters["profile/name"];
      },
      set: function(d) {
        this.$store.commit("profile/setName", d);
      }
    },
    native: {
      get: function() {
        return this.$store.getters["profile/native"];
      },
      set: function(d) {
        this.$store.commit("profile/setNative", d);
      }
    },
    nats() {
      return json.languages.map(item => {
        return item.language;
      });
    },
    dateRangeText() {
      return this.dates.join(" ~ ");
    }
  }
};
</script>