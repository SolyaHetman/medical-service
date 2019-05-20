<template>
  <v-form ref="form">
    <v-container>
      <v-layout>

        <v-flex md3>
          <p><font color="#808080">Чи отримує пацієнт на сьогоднішній день замісну імуноглобулінотерапію?</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.rit_till_today"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
        <v-flex md3>
          <p><font color="#808080"><br>Виробник імуноглобулінів, які отримує пацієнт</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.imunoqlobulin_producer"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md2 >
          <p>
            <font color="#808080"><br/>
              Дата першого введення
            </font>
          </p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.first_imunoqlobulin_injection_data"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md3>
          <p><font color="#808080"><br>Актуальний шлях введення імуноглобуліну</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.actual_injection_way"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        
        <v-flex md3>
          <p>
            <font color="#808080">
              Актуальне місце введення імуноглобуліну
            </font>
          </p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.actual_injection_location"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">Доза</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.dosa"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
        <v-flex md2>
          <p><font color="#808080">Інтервал між введенями</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.injection_interval"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">Зафіксовані небажані явища</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.recorded_phenomenal"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
         </v-flex>

         <v-flex md2>
          <p>
            <font color="#808080">
               Актуальна вага
            </font>
          </p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.patient_weight"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
    <v-btn @click="edit">Редагувати</v-btn>
    <v-btn v-for="user in users" :key="user.id" @click="submit(user)" v-show="!shouldDisable">Зберегти</v-btn>
  <!-- <v-btn @click="add" to="/newpatient">Додати</v-btn> -->
 </v-form>
</template>

<script>
  import axios from 'axios';

  export default {
    data(){
      return{
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
      }
    },
  }
</script>