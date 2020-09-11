<template>
  <v-card>
    <v-card-title>
      View Ticket
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="NewTable"
      :search="search"
    ></v-data-table>
  </v-card>
</template>
<script>
  export default {
    name: "AllTable",
    data () {
      return {
        search: '',
        headers: [
          { text: 'Number', value: 'number' },
          {
            text: 'Name',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Description', value: 'description' },
          { text: 'Priority', value: 'priority' },
          { text: 'Division', value: 'division' },
          { text: 'Date', value: 'date' },
        ],
        NewTable: [
        {
            number: 159,
            name: 'Reza Rahardian',
            description: 'Its hard to using button',
            priority : '',
            date: '2019-10-07',
          },
          {
            number: 237,
            name: 'Awkarin',
            description: 'error not found in number',
            priority: '',
            date: '2019-12-27',
          },
          {
            number: 262,
            name: 'Pancaindra',
            description: 'hard to use when blackout',
            priority : '',
            date: '2019-04-09',
          },
          {
            number: 306,
            name: 'Sulastri',
            description: 'what happen?',
            priority : '',
            date: '2019-10-17',
          },
          {
            number: 356,
            name: 'Fatin Shidiq Miftah',
            description: 'knowing more about more',
            date: '2019-06-29',
          },
          {
            number: 456,
            name: 'Agung Hercules',
            description: 'lazy form validation',
            priority : '',
            date: '2019-02-25',
          },
          {
            number: 885,
            name: 'Lollita',
            description: 'crazy little things called love',
            priority : '',
            date: '2019-12-02',
          },
          {
            number: 402,
            name: 'Pak Kumis',
            description: 'error mulu',
            priority : '',
            date: '2019-10-14',
          },
          {
            number: 458,
            name: 'Yokiu Parasatha',
            description: 'yakali ga kuy',
            priority : '',
            date: '2019-11-07',
          },
          {
            number: 652,
            name: 'KitkutSu',
            description: 'saitama anaknya siapa',
            priority : '',
            date: '2019-10-08',
          },
        ],
      }
    },
  }
</script>