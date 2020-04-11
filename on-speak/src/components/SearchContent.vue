<template>
  <v-card>
       <v-card-text>
        <v-combobox
          v-model="chips"
          :items="items"
          chips
          clearable
          label="Tags"
          multiple
          prepend-icon="mdi-filter_list"
          solo
        >
          <template v-slot:selection="{ attrs, item, select, selected }">
            <v-chip
              v-bind="attrs"
              :input-value="selected"
              close
              @click="select"
              @click:close="remove(item)"
            >
              <strong>{{ item }}</strong>
            </v-chip>
          </template>
        </v-combobox>
         <v-btn color="warning" fab dark>
            <v-icon>mdi-movie-search-outline </v-icon>
          </v-btn>
       </v-card-text>
     </v-card>
</template>
  <script>
export default {
  name: "SearchContent",
 data: () => ({
    chips: [
      "Programming",
      "Playing video games",
      "Watching movies",
      "Sleeping"
    ],
    items: ["Streaming", "Eating"]
  }),
};
</script>