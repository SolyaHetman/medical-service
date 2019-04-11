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
                    <td>{{ props.item.lastname }}</td>
                    <td>{{ props.item.firstname }}</td>
                    <td>{{ props.item.age }}</td>
                    <td class="text-center">
                        <v-btn flat icon color="#1976d2" to="/patientinfo">
                            <v-icon >
                                edit
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
          { text: 'Прізвище', value: 'lastname',sortable: false },
          { text: 'Ім`я', value: 'firstname' ,sortable: false},
          { text: 'Вік', value: 'age' },
          { text: 'Actions', value: 'register_number', sortable: false }
        ],
        patient: [
          {
            register_number: 'АТМ18032000',
            firstname: 'Тарас',
            lastname: 'Кулаков',
            age : 19,
          },  
          {
            register_number: 'ЩТМ18032000',
            firstname: 'Василь',
            lastname: 'Кулаков',
            age : 20,
          }, 
          {
            register_number: 'КТМ18032000',
            firstname: 'Олеся',
            lastname: 'Кулакова',
            age : 49,
          }, 
          {
            register_number: 'КТМ18032000',
            firstname: 'Тарас',
            lastname: 'Кулаков',
            age : 59,
          },         
        ]
      }
    }
}
</script>
