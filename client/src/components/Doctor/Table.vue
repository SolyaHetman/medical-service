<template>
        <v-card>
        <v-card-title>
                    Пацієнти
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="search"
                  label="Пошук"
                  single-line
                  hide-details
                ></v-text-field>
                                           
                </v-card-title>
                <v-data-table class="table table-striped"
                    :headers="headers"
                    :items="patients"
                    :search="search"
                >
                <template v-slot:items="props">
                  <td>{{ props.item.pid + props.item.date.replace(/-/g,'')}}</td>
                  <td>{{ props.item.pid }}</td>
                  <td>{{ props.item.age }}</td>
                  <td>{{ props.item.first_diagnostic_pid_data }}</td>
                  <td>{{ props.item.actual_injection_location }}</td>
                  <td>{{ props.item.first_imunoqlobulin_injection_data }}</td>
                  <td>{{ props.item.dosa }}</td>
                  <td class="text-center">
                    <v-btn flat icon color="#1976d2" :to="'/patientinfo/'+props.item.id">
                      <v-icon >
                        assignment
                      </v-icon>
                    </v-btn>                        
                  </td>
                </template>
                  <v-alert v-slot:no-results :value="true" color="error" icon="warning">
                    Your search for "{{ search }}" found no results.
                  </v-alert>
                </v-data-table>
            </v-card>
            
        
    
</template>

<style>
table tbody tr:nth-of-type(odd) {
   background-color: rgba(0, 0, 0, .05);
 }
</style>



<script>
import axios from 'axios';

export default {
  data () {
    return {
      search: '',
      searchage: '',
      searchdata: '',
      headers: [
        {
          text: 'Номер реєстрації',
          align: 'left',
          sortable: false,
          value: 'register_number'
        },
        { text: 'ПІБ', value: 'pid',sortable: false },
        { text: 'Вік', value: 'age' },
        { text: 'Встановлення діагнозу', value: 'first_diagnostic_pid_data', sortable: false },
        { text: 'Дата введення імуноглобуліну', value: 'first_imunoqlobulin_injection_data_yes', sortable: false},
        { text: 'Актуальне місце введення імуноглобуліну', value: 'actual_injection_location', sortable: false},
        { text: 'Доза', value: 'dosa', sortable: false},
        { text: 'Переглянути', value: 'register_number', sortable: false },
      ],
      patients: []
    }
  },
  created: function()
  {
    this.fetchItems();
  },
  methods: {
    fetchItems() {

      axios.get(`http://localhost:3000/users`).then((response) => {
        let res = response.data;
        this.patients = response.data;
        
        res.forEach(user => {
          let birthday = new Date (user.date);
          const ageDifMs = Date.now() - birthday.getTime();
          const ageDate = new Date(ageDifMs);
          const age = Math.abs(ageDate.getUTCFullYear() - 1970);
          user = Object.assign(user, { age: age.toString() })
          console.log(user, { age: age.toString() })
        })

      })
      .catch((e) => {
        console.error(e)
      })
    },
  },
}
</script>
