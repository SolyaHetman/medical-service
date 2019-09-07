<template>
  <v-form ref="form">
    <v-container
      v-for="user in users"
      :key="user.id">
      <v-layout > 

        <v-flex md3>
          <p><font color="#808080">Чи отримує пацієнт на сьогоднішній день замісну імуноглобулінотерапію?</font></p>
          <v-text-field
            v-model="user.RITTillToday"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
        <v-flex md3 v-if='(user.RITTillToday=="Так") || (user.RITTillToday=="Нерегулярно")'>
          <p><font color="#808080">Виробник імуноглобулінів, які отримує пацієнт</font></p>
          <v-text-field
            v-if='user.ProducerYesNo=="Відомо"'
            v-model="user.ProducerName"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
          <v-text-field
            v-else
            v-model="user.ProducerName"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md3 v-if='(user.RITTillToday=="Так") || (user.RITTillToday=="Нерегулярно")'>
          <p>
            <font color="#808080">
              Кінцева дата введення замісної імуноглобулінотерапії:
            </font>
          </p>
          <v-text-field
            v-model="user.EndImunoglobulinInjectionDate"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container 
      v-for=" user in users"
      :key="user.id"
      
      v-if='(user.RITTillToday=="Так") || (user.RITTillToday=="Нерегулярно")'>
      <v-layout>
        <v-flex md3 v-if='(user.RITTillToday=="Так") || (user.RITTillToday=="Нерегулярно")'>
          <p><font color="#808080">Актуальний шлях введення імуноглобуліну</font></p>
          <v-text-field
            v-model="user.ActualInjectionType"
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
            v-model="user.ActualInjectionLocation"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080"><br>Доза</font></p>
          <v-text-field
            v-if='user.Dose=="Відомо"'
            v-model="user.DoseYes"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
          <v-text-field
            v-else
            v-model="user.Dose"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
        <v-flex md2>
          <p><font color="#808080"><br>Інтервал між введенями</font></p>
          <v-text-field
            v-model="user.InjectionInterval"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container 
      v-for="user in users"
      :key="user.id"
      v-if='(user.RITTillToday=="Так") || (user.RITTillToday=="Нерегулярно")'>
      <v-layout>
        <v-flex md2>
          <p><font color="#808080">Зафіксовані небажані явища</font></p>
          <v-text-field
            v-if='(user.recorded_phenomenal=="Так") && (user.recorded_phenomenal_select=="Інше,вказати")'
            v-model="user.recorded_phenomenal_select_enter"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
          <v-text-field
            v-model="user.RecordedPhenomena"
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
            v-if='user.PatientWeight=="Відомо"'
            v-model="user.PatientWeightYes"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
          <v-text-field
            v-else
            v-model="user.PatientWeight"
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
    <v-btn v-for="user in users" :key="user.id" @click="submit(user)" v-show="!shouldDisable">Зберегти</v-btn>
   <v-btn  to="/newpatient">Додати</v-btn>
 </v-form>
</template>

<script>
  import axios from 'axios';

  export default {
    data(){
      return{
        alertShow: false,
        users: [],
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
      .then(function(res){
        self.users = res.data;
        console.log('Data :', res.data);
      })
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