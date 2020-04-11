<template>
  <v-card class="mx-auto" width="700" tile>
    <v-row height="100%">
      <v-col cols="4">
        <v-avatar class="profile" color="grey" size="164" tile>
          <v-img :src="profile.Picture"></v-img>
        </v-avatar>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">{{profile.Name}}</v-list-item-title>
              <v-list-item-subtitle>{{$t('text.native_language')}}:{{profile.Native}}</v-list-item-subtitle>
              <v-rating
                v-model="profile.Rating"
                :length="length"
                :empty-icon="emptyIcon"
                :full-icon="fullIcon"
                :half-icon="halfIcon"
                :half-increments="halfIncrements"
                :hover="hover"
                :readonly="readonly"
                :size="size"
                :dense="dense"
                :color="color"
                :background-color="bgColor"
              ></v-rating>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <div class="text-center">
                <v-badge>
                  <template v-slot:badge>10</template>
                  <v-icon>mdi-account-multiple</v-icon>
                </v-badge>
                 &nbsp;&nbsp;&nbsp;
                <v-badge>
                  <template v-slot:badge>89</template>
                  <v-icon>mdi-television</v-icon>
                </v-badge>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="8">
        <v-carousel cycle height="400" whidth="400" hide-delimiter-background show-arrows-on-hover>
          <v-carousel-item v-for="(c, i) in profile.Comments" :key="i">
            <v-card class="mx-auto" color="#26c6da" dark width="400" height="400">
              <v-card-title>
                <v-icon large left>{{ c.Icon}}</v-icon>
                <span class="title font-weight-light">{{$t('text.comment')}}</span>
              </v-card-title>

              <v-card-text
                width="300"
                height="300"
                class="headline font-weight-bold"
              >"{{ c.Comment}}"</v-card-text>

              <v-card-actions>
                <v-list-item class="grow">
                  <v-list-item-avatar color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      :src="c.MadeByImg"
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>{{c.MadeBy}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-card>
</template>


<script>
export default {
  data: () => ({
    halfIncrements: true,
    hover: true,
    length: 5,
    rating: 2.5,
    readonly: true,
    size: 24,
    dense: true,
    color: "blue lighten-3",
    bgColor: "grey lighten-1",
    profile: {
      Name: "Danilo Monco",
      Native: "Portuguese",
      IsTeacher: true,
      NumberClass: 12,
      Rating: 2.5,
      Picture:"https://cdn.vuetifyjs.com/images/profiles/marcus.jpg",
      Comments: [
        {
          Comment: "Danilo ta fudido",
          Rating: 2.5,
          Icon: "mdi-emoticon-angry-outline ",
          MadeBy:"Fudecio Junior",
          MadeByImg:"https://gartic.com.br/imgs/mural/ph/phodona/livre_1295458652.png"
        },
        {
          Comment:
            "Ainda que tu andes no vale da sobra da moter do tcc não temas nada porque o meu cajato esta comtigo",
          Rating: 2.5,
          Icon: "mdi-face",
          MadeBy:"Edir Maiscedo",
          MadeByImg:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
        }
      ]
    }
  })
};
</script>