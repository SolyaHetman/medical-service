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
                  <td>{{ props.item.LastName[0] + props.item.FirstName[0] + props.item.MiddleName[0] + props.item.BirthdayDate.replace(/-/g,'')}}</td>
                  <td>{{ props.item.age }}</td>
                   <td>{{ props.item.FirstDiagnosisPidDate }}</td>
                  <td>{{ props.item.replacementImunoqlobulinTherary2['0'].EndImunoglobulinInjectionDate }}</td>
                  <td>{{ props.item.replacementImunoqlobulinTherary2['0'].ActualInjectionType }}</td>
                  <td>{{ props.item.replacementImunoqlobulinTherary2['0'].DoseYes }}</td>
                  <td>{{ props.item.replacementImunoqlobulinTherary2['0'].ProducerName }}</td>
                  <td>Лікар1</td>
                  <td>Центр1</td>
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
        { text: 'Вік', value: 'age' },
        { text: 'Дата встановлення діагнозу', value: 'FirstDiagnosisPidDate', sortable: false },
        { text: 'Остання дата введення імуноглобуліну', value: 'EndImunoglobulinInjectionDate', sortable: false},
        { text: 'Актуальний шлях введення імуноглобуліну', value: 'ActualInjectionType', sortable: false},
        { text: 'Доза(мг/кг)', value: 'DoseYes', sortable: false},
        { text: 'Виробник', value: 'ProducerName', sortable: false},
        { text: 'Лікар',  sortable: false},
        { text: 'Назва центру',  sortable: false},
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
          let correct_date =user.BirthdayDate.slice(6,11) + "-" + user.BirthdayDate.slice(3, 5) + '-' + user.BirthdayDate.slice(0,2)
          let birthday = new Date (correct_date);
          const ageDifMs = Date.now() - birthday.getTime();
          const ageDate = new Date(ageDifMs);
          const age = Math.abs(ageDate.getUTCFullYear() - 1970);
          user = Object.assign(user, { age: age.toString() })
        })

      })
      .catch((e) => {
        console.error(e)
      })
    },
  },
}
</script>
