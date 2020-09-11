<template>
  <v-data-table
    :headers="headers"
    :items="table"
    sort-by="name"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white" max-width="500px">
        <v-toolbar-title>My Ticket</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="1000px">
          <template v-slot:activator="{ on }">
            <v-btn color="teal" dark class="mb-2" v-on="on">New Data</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text class="text-center justify-center" >
              <v-container>
                <v-form color="teal">
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field 
                    ref="number"
                    v-model="editedItem.number" 
                    label="Number" 
                    :rules="numberRules" 
                    color="teal"
                    required 
                    outlined>
                    </v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-text-field 
                    v-model="editedItem.name"
                    label="Name"
                    :rules="nameRules"
                    color="teal"
                    required
                    outlined>
                    </v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-textarea
                      v-model="editedItem.description"
                      color="teal"
                      label="Description"
                      :rules="descriptionRules"
                      required
                      outlined
                      >
                      <template v-slot:label>
                      <div>
                      Description
                      </div>
                      </template>
                      </v-textarea>
                      </v-col>

                      <v-col cols="12" sm="6" md="4">
                      <v-select
                      v-model="editedItem.priority"
                      :items="priority"
                      :rules="priorityRules"
                      label="Priority"
                      required
                      outlined
                      ></v-select>
                      </v-col>

                      <v-col cols="12" sm="6" md="4">
                      <v-select
                      v-model="editedItem.division"
                      :items="division"
                      :rules="divisionRules"
                      label="Division"
                      required
                      outlined
                      ></v-select>
                      </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :return-value.sync="Date"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                       >
                       <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="editedItem.date"
                          :rules="dateRules"
                          label="Date"
                          append-icon="mdi-calendar-range"
                          readonly
                          color="teal"
                          required
                          outlined
                          v-on="on"
                        ></v-text-field>
                      </template>
                    <v-date-picker v-model="editedItem.date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                  </v-date-picker>
                  </v-menu>
                  </v-col>
                  </v-form>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="saveNewTicket">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <!-- <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon> -->
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>
<script>
  import { table } from '@api';
  export default {
    name: 'Table',
    data: () => ({
      form: {
      number: '',
      name: '',
      description: '',
      priority: '',
      division: '',
      date: '',
    },
      dialog: false,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      priority: [
      'High',
      'Low',
    ],
      division: [
      'Frontend',
      'Backend',
    ],
    numberRules: [
    v => !!v || 'Number is required',
      ],
    nameRules: [
    v => !!v || 'Name is required',
      ],
    descriptionRules: [
    v => !!v || 'Description is required',
    ],    
    priorityRules: [
    v => !!v || 'Priority is required',
    ],
    divisionRules: [
    v => !!v || 'Divison is required',
    ],
    dateRules: [
    v => !!v || 'Date is required',
    ],
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
        { text: 'Divison', value: 'division' },
        { text: 'Date', value: 'date' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      table: [],
      editedIndex: -1,
      editedItem: {
        number: 0,
        name: '',
        description: '',
        priority: '',
        division: '',
        date: 0,
      },
      defaultItem: {
        number: 0,
        name: '',
        description: '',
        priority: '',
        division: '',
        date: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
    saveNewTicket() {
      let request = {
      "number" : this.editedItem.number,
      "name" : this.editedItem.name,
      "description" : this.editedItem.description,
      "priority" : this.editedItem.priority,
      "division" : this.editedItem.division,
      "date" : this.editedItem.date
    }  

    console.log("masuk");
    table(request)
      .then((response)=> {
          if(response.status == 200 ){
            console.log(response.data)
          }
          else {
            // handle warning, dll
          }
        })
        .catch((e)=> {
          // handle error
          console.log(e)
        })
      },

      initialize () {
        this.table = [
        {
            number: 159,
            name: 'Reza Rahardian',
            description: 'Its hard to using button',
            priority : '',
            Divison : 'Frontend',
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
         ]
      },

      editItem (item) {
        this.editedIndex = this.table.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.table.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.table.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.table[this.editedIndex], this.editedItem)
        } else {
          this.table.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>