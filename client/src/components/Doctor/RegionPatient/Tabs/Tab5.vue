<template>
  <v-form ref="form">
    <v-container
      v-for="user in users"
      :key="user.id">
      <v-layout > 

        <v-flex md3>
          <p><font color="#808080">Чи отримує пацієнт на сьогоднішній день замісну імуноглобулінотерапію?</font></p>
          <v-text-field
            v-model="user.rit_till_today"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
        <v-flex md3 v-if='(user.rit_till_today=="Так") || (user.rit_till_today=="Нерегулярно")'>
          <p><font color="#808080">Виробник імуноглобулінів, які отримує пацієнт</font></p>
          <v-text-field
            v-if='user.imunoqlobulin_producer=="Відомо"'
            v-model="user.imunoqlobulin_producer_select"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
          <v-text-field
            v-else
            v-model="user.imunoqlobulin_producer"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md2 v-if='(user.rit_till_today=="Так") || (user.rit_till_today=="Нерегулярно")'>
          <p>
            <font color="#808080"><br>
              Дата першого введення
            </font>
          </p>
          <v-text-field
            v-model="user.first_imunoqlobulin_injection_data"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md3 v-if='(user.rit_till_today=="Так") || (user.rit_till_today=="Нерегулярно")'>
          <p><font color="#808080">Актуальний шлях введення імуноглобуліну</font></p>
          <v-text-field
            v-model="user.actual_injection_way"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>

    <v-container 
      v-for="user in users"
      :key="user.id"
      v-if='(user.rit_till_today=="Так") || (user.rit_till_today=="Нерегулярно")'>
      <v-layout>
        
        <v-flex md3>
          <p>
            <font color="#808080">
              Актуальне місце введення імуноглобуліну
            </font>
          </p>
          <v-text-field
            v-model="user.actual_injection_location"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080"><br>Доза</font></p>
          <v-text-field
            v-if='user.dosa=="Відомо"'
            v-model="user.do_yes"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
          <v-text-field
            v-else
            v-model="user.dosa"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
        <v-flex md2>
          <p><font color="#808080"><br>Інтервал між введенями</font></p>
          <v-text-field
            v-model="user.injection_interval"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">Зафіксовані небажані явища</font></p>
          <v-text-field
            v-if='(user.recorded_phenomenal=="Так") && (user.recorded_phenomenal_select=="Інше,вказати")'
            v-model="user.recorded_phenomenal_select_enter"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
          <v-text-field
            v-if='(user.recorded_phenomenal=="Так") && (user.recorded_phenomenal_select!="Інше,вказати")'
            v-model="user.recorded_phenomenal_select"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
          <v-text-field
            v-if='user.recorded_phenomenal!="Так"'
            v-model="user.recorded_phenomenal"
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
            v-if='user.patient_weight=="Відомо"'
            v-model="user.patient_weight_yes"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
          <v-text-field
            v-else
            v-model="user.patient_weight"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- Start Alert -->
      <v-flex xs12>
        <v-alert
          :value="alertShow"
          type="success"        
          color='#1976d2'
        >
          Дані збережено
        </v-alert>
      </v-flex>
      <!-- End alert -->
    <!-- <v-btn @click="edit">Редагувати</v-btn>
    <v-btn v-for="user in users" :key="user.id" @click="submit(user)" v-show="!shouldDisable">Зберегти</v-btn>
   <v-btn @click="add" to="/newpatient">Додати</v-btn> -->
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