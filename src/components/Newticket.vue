<template>
  <div>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
      <Header></Header>
      <v-card
      max-width="500"
      class="mx-auto"
      >
      <v-row
      align="center"
      justify="center"
      >
      <NewTable></NewTable>
      </v-row>
      </v-card>
      </v-container>
      </v-content>
    <!-- <Contact></Contact> -->
  <!-- <v-footer 
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
  </v-app> -->
</div>
</template>

<script>
  // import Contact from '@/components/home/Contact.vue'
  import NewTable from '@/components/Ticket/NewTable.vue'
  import Header from '@/components/home/Header.vue'
  export default {
    props: {
      source: String,
    },
    components : {NewTable, Header},
    data: () => ({
      // dialoglogout: false,
      // drawer: null,
      // fav: true,
      // menu: false,
      // message: false,
      // hints: true,
      // items: [
      //   { icon: 'mdi-home-circle', text: 'Home', name: 'home'},
      //   { icon: 'mdi-account-circle', text: 'Profile', name: 'Profile' },
      //   { icon: 'mdi-book-information-variant', text: 'Article' },
      //   {
      //     icon: 'mdi-chevron-up',
      //     'icon-alt': 'mdi-chevron-down',
      //     text: 'Tickets',
      //     model: false,
      //     children: [
      //       { icon: 'mdi-ticket-account', text: 'My Ticket', name: 'MyTicket' },
      //       { icon: 'mdi-ticket-percent', text: 'New Ticket', name: 'NewTicket' },
      //       { icon: 'mdi-ticket-confirmation', text: 'All Ticket', name: 'AllTicket' },
      //     ],
      //   },
      //   {
      //     icon: 'mdi-chevron-up',
      //     'icon-alt': 'mdi-chevron-down',
      //     text: 'More',
      //     model: false,
      //     children: [
      //       { text: 'Import' },
      //       { text: 'Export' },
      //       { text: 'Print' },
      //       { text: 'Undo changes' },
      //       { text: 'Other contacts' },
      //     ],
      //   },
      //   { icon: 'mdi-history', text: 'History' },
      //   { icon: 'mdi-message', text: 'Send feedback' },
      //   { icon: 'mdi-settings', text: 'Settings' },
      //   { icon: 'mdi-cellphone-link', text: 'Download' },
      //   { icon: 'mdi-keyboard', text: 'Go to the old version' },
      // ],
    }),
    // methods: {
    //   goToPage(name){
    //     this.$router.push({name: name});
    //   }
    // }
  }
</script>