<template>
  <v-footer dark>
    <v-container>
      <v-row align="center" justify="center">
        <v-col col="12" md="6" lg="3">
          <v-img :src="require('../assets/logo2.png')"></v-img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
          </p>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-phone-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>088 12345 67890</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-email-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <a href="#">info@courseware.com</a>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <div>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </div>
        </v-col>

        <v-col col="12" md="6" lg="3">
          <h4>Quick Links</h4>

          <v-list-item-group color="primary">
            <v-list-item v-for="item in quickLinks" :key="item.id" @click="() => {}">
              <v-list-item-icon>
                <v-icon>mdi-chevron-double-right</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-col>

        <v-col col="12" md="6" lg="3">
          <h4>News</h4>
          <v-row dense>
            <v-col v-for="(item, i) in news" :key="i" cols="12">
              <v-list-item three-line>
                <v-list-item-avatar tile size="75" color="grey">
                  <v-img :src="item.src"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title></v-list-item-title>
                  <v-list-item-subtitle v-text="item.title"></v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <v-icon>mdi-comment-text-outline</v-icon>
                    {{item.comments}} comments
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-col>

        <v-col col="12" md="6" lg="3">
          <h4>Support</h4>
          <v-list-item-group color="primary">
            <v-list-item v-for="item in support" :key="item.id" @click="() => {}">
              <v-list-item-icon>
                <v-icon>mdi-chevron-double-right</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-spacer></v-spacer>
          <div>
            <strong>OnSpeak</strong>
            &copy; {{ new Date().getFullYear() }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      "mdi-facebook-box",
      "mdi-twitter",
      "mdi-google-plus",
      "mdi-linkedin",
      "mdi-instagram"
    ],
    quickLinks: [
      {
        title: "Courses",
        link: "/courses",
        id: 1
      },
      {
        title: "Events",
        link: "/events",
        id: 2
      },
      {
        title: "About Us",
        link: "/about",
        id: 3
      },
      {
        title: "Gallery",
        link: "/gallery",
        id: 4
      },
      {
        title: "Become a Teacher",
        link: "/teacher",
        id: 5
      },
      {
        title: "Contact",
        link: "/contact",
        id: 6
      }
    ],
    support: [
      {
        title: "FAQ",
        link: "/faq",
        id: 1
      },
      {
        title: "Documentation",
        link: "/documentation",
        id: 2
      },
      {
        title: "Forums",
        link: "/forums",
        id: 3
      },
      {
        title: "Career",
        link: "/career",
        id: 4
      },
      {
        title: "Community",
        link: "/community",
        id: 5
      },
      {
        title: "Management",
        link: "/management",
        id: 6
      }
    ],
    news: [
      {
        title: "Guide to WordPress Custom Post Type",
        link: "",
        comments: 23,
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"
      },
      {
        title: "SEO friendly WordPress and Squarespace",
        link: "",
        comments: 23,
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"
      },
      {
        title: "David Braun: Chief Monster of Web Design",
        link: "",
        comments: 23,
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png"
      }
    ]
  })
};
</script>