<template>
  <v-card width="600" class="mx-auto mt-5">
    <v-card-title class="pb-0">
      <h2>{{$t('text.complete_registration')}}</h2>
    </v-card-title>
    <v-spacer></v-spacer>
    <v-card-text>
      <v-row align="center" class="d-block pa-2">
        <v-form ref="form" v-model="valid" :lazy-validation="lazy">
          <v-text-field
            v-model="name"
            :counter="106"
            :rules="nameRules"
            :label="$t('text.name')"
            required
          ></v-text-field>

          <v-text-field
            v-model="calledName"
            :counter="106"
            :rules="calledNameRules"
            :label="$t('text.called_name')"
            required
          ></v-text-field>

          <v-text-field v-model="email" :rules="emailRules" :label="$t('text.email')" required></v-text-field>

          <v-text-field
            v-model="phoneNumber"
            :rules="phoneNumberRules"
            :label="$t('text.phone_number')"
            required
          ></v-text-field>

          <v-text-field
            v-model="skypeUserName"
            :rules="skypeUserNameRules"
            :label="$t('text.skype_user_name')"
            required
          ></v-text-field>

          <v-icon>mdi-calendar-conth</v-icon>
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="birthDate"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="birthDate"
                :label="$t('text.birth_date')"
                prepend-inner-icon="mdi-calendar-conth"
                readonly
                :rules="birthDateRules"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="birthDate" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">{{$t('text.cancel')}}</v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(birthDate)">{{$t('text.ok')}}</v-btn>
            </v-date-picker>
          </v-dialog>

          <v-combobox
            v-model="native"
            :rules="nativeRules"
            :items="nats"
            :label="$t('text.native_language')"
            :filter="(item, queryText, itemText) => queryText.length >= 2 && item.toLowerCase().indexOf(queryText) > -1"
            required
          ></v-combobox>

          <comp-address></comp-address>

          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          ></v-checkbox>
        </v-form>
      </v-row>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="warning" class="mr-4" @click="reset">Clear</v-btn>
      <v-btn color="success" class="mr-4" @click="save" :disabled="!valid">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import CompAddress from "../components/CompAddress";
import json from "../assets/languages.json";

export default {
  components: {
    CompAddress
  },
  data: () => ({
    valid: true,
    lazy: false,
    checkbox: false,
    modal: null
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
    calledName: {
      get: function() {
        return this.$store.getters["profile/calledName"];
      },
      set: function(d) {
        this.$store.commit("profile/setCalledName", d);
      }
    },
    email: {
      get: function() {
        return this.$store.getters["profile/email"];
      },
      set: function(d) {
        this.$store.commit("profile/setEmail", d);
      }
    },
    phoneNumber: {
      get: function() {
        return this.$store.getters["profile/phoneNumber"];
      },
      set: function(d) {
        this.$store.commit("profile/setPhoneNumber", d);
      }
    },
    skypeUserName: {
      get: function() {
        return this.$store.getters["profile/skypeUserName"];
      },
      set: function(d) {
        this.$store.commit("profile/setSkypeUserName", d);
      }
    },
    address: {
      get: function() {
        return this.$store.getters["profile/address"];
      },
      set: function(d) {
        this.$store.commit("profile/setAddress", d);
      }
    },
    birthDate: {
      get: function() {
        return this.$store.getters["profile/birthDate"];
      },
      set: function(d) {
        this.$store.commit("profile/setBirthDate", d);
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
    nativeRules() {
      return [
        v =>
          !!v ||
          this.$t("text.native_language") + " " + this.$t("text.required")
      ];
    },
    calledNameRules() {
      return [
        v =>
          !!v || this.$t("text.called_name") + " " + this.$t("text.required"),
        v =>
          (v && v.length >= 2 && v.length <= 106) ||
          this.$t("text.characters_valid")
      ];
    },
    nameRules() {
      return [
        v => !!v || this.$t("text.name") + " " + this.$t("text.required"),
        v =>
          (v && v.length >= 2 && v.length <= 106) ||
          this.$t("text.characters_valid")
      ];
    },
    emailRules() {
      return [
        v => !!v || this.$t("text.email") + " " + this.$t("text.required"),
        v =>
          /.+@.+\..+/.test(v) ||
          this.$t("text.email") + " " + this.$t("text.be_valid")
      ];
    },
    phoneNumberRules() {
      return [
        v =>
          !!v || this.$t("text.phone_number") + " " + this.$t("text.required")
      ];
    },
    skypeUserNameRules() {
      return [
        v =>
          !!v ||
          this.$t("text.skype_user_name") + " " + this.$t("text.required")
      ];
    },
    birthDateRules() {
      return [
        v => !!v || this.$t("text.birth_date") + " " + this.$t("text.required")
      ];
    },
    nats() {
      return json.languages.map(item => {
        return item.language;
      });
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    save() {
      let callPog = localaddress => {
        console.log(localaddress);
        this.$store.commit("profile/setAddress", localaddress);
        this.$store.dispatch("profile/completeRegistration");
      };
      this.$store.dispatch("address/getAddress").then(function(data) {
        callPog(data);
      });
    }
  }
};
</script>