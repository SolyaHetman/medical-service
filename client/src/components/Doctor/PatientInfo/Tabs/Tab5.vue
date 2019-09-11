<template>
  <v-form ref="form">
    <v-container>
      <v-layout > 

        <v-flex md3>
          <p><font color="#808080">Чи отримує пацієнт на сьогоднішній день замісну імуноглобулінотерапію?</font></p>
          <v-text-field
            v-model="user.replacementImunoqlobulinTherary2['0'].RITTillToday"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
        <v-flex md3 v-if='(user.replacementImunoqlobulinTherary2["0"].RITTillToday=="Так") || (user.replacementImunoqlobulinTherary2["0"].RITTillToday=="Нерегулярно")'>
          <p><font color="#808080">Виробник імуноглобулінів, які отримує пацієнт</font></p>
          <v-text-field
            v-if='user.replacementImunoqlobulinTherary2["0"].ProducerYesNo=="Відомо"'
            v-model="user.replacementImunoqlobulinTherary2['0'].ProducerName"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
          <v-text-field
            v-else
            v-model="user.replacementImunoqlobulinTherary2['0'].ProducerYesNo"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md3 v-if='(user.replacementImunoqlobulinTherary2["0"].RITTillToday=="Так") || (user.replacementImunoqlobulinTherary2["0"].RITTillToday=="Нерегулярно")'>
          <p>
            <font color="#808080">
              Кінцева дата введення замісної імуноглобулінотерапії:
            </font>
          </p>
          <v-text-field
            v-model="user.replacementImunoqlobulinTherary2['0'].EndImunoglobulinInjectionDate"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container 
      v-if='(user.replacementImunoqlobulinTherary2["0"].RITTillToday=="Так") || (user.replacementImunoqlobulinTherary2["0"].RITTillToday=="Нерегулярно")'>
      <v-layout>
        <v-flex md3 v-if='(user.replacementImunoqlobulinTherary2["0"].RITTillToday=="Так") || (user.replacementImunoqlobulinTherary2["0"].RITTillToday=="Нерегулярно")'>
          <p><font color="#808080">Актуальний шлях введення імуноглобуліну</font></p>
          <v-text-field
            v-model="user.replacementImunoqlobulinTherary2['0'].ActualInjectionType"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md3>
          <p>
            <font color="#808080">
              Актуальне місце введення імуноглобуліну
            </font>
          </p>
          <v-text-field
            v-model="user.replacementImunoqlobulinTherary2['0'].ActualInjectionLocation"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080"><br>Доза</font></p>
          <v-text-field
            v-if='user.replacementImunoqlobulinTherary2["0"].Dose=="Відомо"'
            v-model="user.replacementImunoqlobulinTherary2['0'].DoseYes"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
          <v-text-field
            v-else
            v-model="user.replacementImunoqlobulinTherary2['0'].Dose"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
        <v-flex md2>
          <p><font color="#808080"><br>Інтервал між введенями</font></p>
          <v-text-field
            v-model="user.replacementImunoqlobulinTherary2['0'].InjectionInterval"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container 
      v-if='(user.replacementImunoqlobulinTherary2["0"].RITTillToday=="Так") || (user.replacementImunoqlobulinTherary2["0"].RITTillToday=="Нерегулярно")'>
      <v-layout>
        <v-flex md2>
          <p><font color="#808080">Зафіксовані небажані явища</font></p>
          <v-text-field
            v-if='(user.replacementImunoqlobulinTherary2["0"].recorded_phenomenal=="Так") && (user.replacementImunoqlobulinTherary2["0"].recorded_phenomenal_select=="Інше,вказати")'
            v-model="user.replacementImunoqlobulinTherary2['0'].recorded_phenomenal_select_enter"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
          <v-text-field
            v-model="user.replacementImunoqlobulinTherary2['0'].RecordedPhenomena"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
         </v-flex>

         <v-flex md2>
          <p>
            <font color="#808080"><br>
               Актуальна вага
            </font>
          </p>
          <v-text-field
            v-if='user.replacementImunoqlobulinTherary2["0"].PatientWeight=="Відомо"'
            v-model="user.replacementImunoqlobulinTherary2['0'].PatientWeightYes"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
          <v-text-field
            v-else
            v-model="user.replacementImunoqlobulinTherary2['0'].PatientWeight"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>

      <v-flex xs12>
        <v-alert
          :value="alertShow"
          type="success"        
          color='#1976d2'
        >
          Дані збережено
        </v-alert>
      </v-flex>
    <v-btn @click="edit">Редагувати</v-btn>
    <v-btn @click="submit(user)" v-show="!shouldDisable">Зберегти</v-btn>
   <v-btn  to="/addNewInf1">Додати</v-btn>
 </v-form>
</template>

<script>
  import axios from 'axios';

  export default {
    data(){
      return{
        alertShow: false,
        user: [],
        shouldDisable: true
      }
    },
    created() {
      console.log(this.$route.params.user);
    },
    mounted() {
      var self = this;
      const id = this.$route.params.user;
      axios.get('http://localhost:3000/users/', {
        params: {
          id: this.$route.params.user
        }
      })
      .then(res => this.user = res.data[0])
      .catch(function(error){
        console.log('Error :', error)
      })
    },
    methods: {
      edit() {
      this.shouldDisable = false
      },
      submit(user){
        this.shouldDisable = true;
        console.log('edit: ', user),
        axios.put(`http://localhost:3000/users/${user.id}`,user)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(err);
        });
        this.shouldDisable = true
        this.shouldDisable = true
        this.alertShow = true;
        setTimeout(() => {
          this.alertShow = false;
        }, 2000)
      }
    },
  }
</script>