<template>
    <v-layout row wrap class="mt-5">
        <v-flex md10 class="mx-auto">
            <v-card>
                <v-card-title>
                    <h1>Пацієнти</h1>
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
                    :items="patient"
                    :search="search"
                >
                <template v-slot:items="props">
                    <td>{{ props.item.register_number }}</td>
                    <td>{{ props.item.pib }}</td>
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
    </v-layout>
</template>

<style>
table tbody tr:nth-of-type(odd) {
   background-color: rgba(0, 0, 0, .05);
 }
</style>


<script>
export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Номер реєстрації',
            align: 'left',
            sortable: false,
            value: 'register_number'
          },
          { text: 'ПІБ', value: 'pib',sortable: false },
          { text: 'Вік', value: 'age' },
          { text: 'Встановлення діагнозу', value: 'first_diagnostic_pid_data', sortable: false },
          { text: 'Дата введення', value: 'first_imunoqlobulin_injection_data', sortable: false},
          { text: 'Доза', value: 'dosa', sortable: false},
          { text: 'Переглянути', value: 'register_number', sortable: false },
        ],
        patient: [
          {
            register_number: 'АТМ18032000',
            pib: 'А.Т.М.',
            age : 19,
            first_diagnostic_pid_data: "29.03.2017",
            first_imunoqlobulin_injection_data: "29.03.2017",
            dosa:  '23 мг/кг'
          },  
          {
            register_number: 'КВМ18032000',
            pib: 'К.В.М.',
            age : 20,
            first_diagnostic_pid_data: "29.03.2017",
            first_imunoqlobulin_injection_data: "29.03.2018",
            dosa:  '23 мг/кг'
          }, 
          {
            register_number: 'КОС18032000',
            pib: 'К.О.С.',
            age : 49,
            first_diagnostic_pid_data: "29.03.2017",
            first_imunoqlobulin_injection_data: "29.03.2017",
            dosa:  '23 мг/кг'
          }, 
          {
            register_number: 'КТМ18032000',
            pib: 'К.Т.М.',
            age : 59,
            first_diagnostic_pid_data: "29.03.2017",
            first_imunoqlobulin_injection_data: "29.03.2017",
            dosa:  '23 мг/кг'
          },         
        ]
      }
    }
}
</script>
