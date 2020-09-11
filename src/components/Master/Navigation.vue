<template>
	<v-app id="inspire">
	<v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      class="grey-3"
      dark
      permanent
    >
      <v-list dense>
        <template v-for="item in items">
          <v-row
            v-if="item.heading"
            :key="item.heading"
            align="center"
          >
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col
              cols="6"
              class="text-center"
            >
              <a
                href="#!"
                class="body-2 black--text"
              >EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list-item
            @click="goToPage(child.name)"
              v-for="(child, i) in item.children"
              :key="i"
              link
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
          @click="goToPage(item.name)"
            v-else
            :key="item.text"
            link
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="grey darken-3"
      dark
    >
    <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <div class="yellow--text"  href="home">
        <span class="hidden-sm-and-down">Support Ticketing System</span>
      </div>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        v-model="Search"
        class="hidden-sm-and-down"
        color="amber"
      />
      <v-spacer />
      <v-btn icon
      color="amber">
        <v-icon>mdi-apps</v-icon>
      </v-btn>


      <v-badge
        v-model="show"
        color="cyan"
        left
      >
      <template v-slot:badge>
          <span>6</span>
      </template>
      <v-btn 
      icon
      color="amber">
        <v-icon
        @mouseover="show = true"
        @mouseout="show = false"
        >mdi-bell</v-icon>
      </v-btn>
    </v-badge>

  <template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on }">
      <v-btn
        icon
        large
        color="primary" 
        dark v-on="on"
      >
        <v-avatar
          size="32px"
          item
        >
          <v-img
            src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
            alt="Vuetify"
          /></v-avatar>
      </v-btn>
    </template>
    <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png" alt="John">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>User</v-list-item-title>
              <!-- <v-list-item-subtitle>Mahasiwa</v-list-item-subtitle> -->
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                :class="fav ? 'red--text' : ''"
                icon
                @click="fav = !fav"
              >
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-list-item-action>

            <template>
            <v-btn 
            class="mx-2"
            fab dark small color="error"
            @click.stop="dialoglogout = true"
            >
            <v-icon dark>mdi-logout</v-icon>
            </v-btn>
            <v-dialog
              v-model="dialoglogout"
              max-width="310">
      <v-card>
        <v-card-title class="headline">Do You want to Logout?</v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialoglogout = false"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="logout()"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

<!--         <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="message" color="purple"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Enable messages</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="hints" color="purple"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Enable hints</v-list-item-title>
          </v-list-item>
        </v-list> -->

        <!-- <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="menu = false">Cancel</v-btn>
          <v-btn color="primary" text @click="menu = false">Save</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-menu>
	</div>
	</template>
    </v-app-bar>
    <router-view></router-view>
   <Contact></Contact>
    <v-footer 
    color="grey lighten-1"
    padless
    >
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Support Ticketing Sistem</strong>
    </v-col>
  </v-footer>
  </v-app>
</template>
<script>
  import {getCookie, eraseCookie} from '@/helpers/cookie.js';
	import Contact from '@/components/home/Contact.vue';
	export default {
	name: "Navigation",
    props: {
      source: String,
    },
    components : {Contact},
    data: () => ({
		dialoglogout: false,
    show: false,
		drawer: null,
		fav: true,
		menu: false,
		message: false,
		hints: true,
    search: '',
		items: [
		{ icon: 'mdi-home-circle', text: 'Home', name: 'home'},
        { icon: 'mdi-account-circle', text: 'Profile', name: 'Profile' },
        // { icon: 'mdi-book-information-variant', text: 'Article' },
        {
          text: 'Tickets',
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-ticket',
          model: false,
          children: [
            { icon: 'mdi-ticket-account', text: 'My Ticket', name: 'MyTicket' },
            { icon: 'mdi-ticket-confirmation', text: 'View Ticket', name: 'AllTicket' },
          ],
        },
        // {
        //   icon: 'mdi-chevron-up',
        //   'icon-alt': 'mdi-chevron-down',
        //   text: 'More',
        //   model: false,
        //   children: [
        //     { text: 'Import' },
        //     { text: 'Export' },
        //     { text: 'Print' },
        //     { text: 'Undo changes' },
        //     { text: 'Other contacts' },
        //   ],
        // },
        // { icon: 'mdi-history', text: 'History' },
        // { icon: 'mdi-message', text: 'Send feedback' },
        { icon: 'mdi-settings', text: 'Settings', name: 'Settings' },
        // { icon: 'mdi-cellphone-link', text: 'Download' },
        // { icon: 'mdi-keyboard', text: 'Go to the old version' },
      ],
    }),
    methods: {
      logout() {
        eraseCookie("token");
        setTimeout(()=> {
          if(!getCookie("token")) {
            this.$router.push("/login");
          }
        }, 500);
      },
      goToPage(name){
        this.$router.push({name: name});
      }
    }
}
</script>