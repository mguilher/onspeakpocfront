<template>
  <v-card>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-dialog
            ref="dialogStartDate"
            v-model="modalStartDate"
            :return-value.sync="startDate"
            persistent
            width="290px">
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="startDate"
                :label="$t('text.begin_date')"
                prepend-inner-icon="mdi-calendar-month"
                readonly
                width="40px"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="startDate" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modalStartDate = false">{{$t('text.cancel')}}</v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.dialogStartDate.save(startDate)"
              >{{$t('text.ok')}}</v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-dialog
            ref="dialogStartTime"
            v-model="modalStartTime"
            :return-value.sync="startTime"
            persistent
            width="290px">
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="startTime"
                :label="$t('text.time')"
                prepend-icon="mdi-timer"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker v-if="modalStartTime" v-model="startTime" full-width>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modalStartTime = false">{{$t('text.cancel')}}</v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.dialogStartTime.save(startTime)"
              >{{$t('text.ok')}}</v-btn>
            </v-time-picker>
          </v-dialog>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-dialog
            ref="dialogEndDate"
            v-model="modalEndDate"
            :return-value.sync="endDate"
            persistent
            width="290px">
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="endDate"
                :label="$t('text.end_date')"
                prepend-inner-icon="mdi-calendar-month"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="endDate" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modalEndDate = false">{{$t('text.cancel')}}</v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.dialogEndDate.save(endDate)"
              >{{$t('text.ok')}}</v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-dialog
            ref="dialogEndTime"
            v-model="modalEndTime"
            :return-value.sync="endTime"
            persistent
            width="290px">
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="endTime"
                :label="$t('text.time')"
                prepend-icon="mdi-timer"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker v-if="modalEndTime" v-model="endTime" full-width>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modalEndTime = false">{{$t('text.cancel')}}</v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.dialogEndTime.save(endTime)"
              >{{$t('text.ok')}}</v-btn>
            </v-time-picker>
          </v-dialog>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-btn color="warning" fab dark>
            <v-icon>mdi-card-search-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
  <script>
export default {
  name: "SearchSchedule",
  data: () => ({
    modalStartDate: false,
    modalStartTime: false,
    modalEndDate: false,
    modalEndTime: false,
    questions: [],
    startDate: null,
    startTime: null,
    endDate: null,
    endTime: null
  })
};
</script>