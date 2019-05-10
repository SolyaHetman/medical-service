<template>
    <v-layout row wrap class="mt-5">
        <v-flex md10 class="mx-auto">
            <v-card>
                <v-card-title>
                    <v-flex  md2>
                        <v-select
                          v-model="search"
                          label="Пошук"
                          attach
                        ></v-select>
                     </v-flex> 
                     <v-flex  md2>
                       <v-select
                          v-model="searchage"
                          label="Виберіть вік"
                          attach
                        ></v-select>
                     </v-flex> 
                     <v-flex  md3>
                        <v-select
                          v-model="searchdata"
                          label="Виберіть дату введення "
                          attach
                        ></v-select>
                     </v-flex> 
                                           
                </v-card-title>
                <v-data-table class="table table-striped"
                    :headers="headers"
                    :items="patients"
                    :search="search"
                >
                <template v-slot:items="props">
                  <td>{{ props.item.register_number }}</td>
                  <td>{{ props.item.pid }}</td>
                  <td>{{ props.item.age }}</td>
                  <td>{{ props.item.first_diagnostic_pid_data }}</td>
                  <td>{{ props.item.first_imunoqlobulin_injection_data }}</td>
                  <td>{{ props.item.dosa }}</td>
                  <td class="text-center">
                    <v-btn flat icon color="#1976d2" to="/patientinfo">
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
        </v-flex>
        <!-- <v-btn @click="getData">llll</v-btn>   -->
    </v-layout>
    
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
          { text: 'Дата введення', value: 'first_imunoqlobulin_injection_data_yes', sortable: false},
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
      fetchItems(){
      axios.get('http://localhost:3000/users').then((response) => {
        this.patients = response.data
        console.log(response.data)
      })
      .catch((e) => {
        console.error(e)
      })
      }
    },
}
</script>
