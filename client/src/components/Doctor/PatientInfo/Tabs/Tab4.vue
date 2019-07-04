<template>
  <v-form ref="form">
    <v-container
      v-for="user in users"
      :key="user.id">
      <v-layout>

        <v-flex md4>
          <p><font color="#808080">Трансплантація стовбурових клітин</font></p>
          <v-text-field
            v-model="user.stem_cells_transplantation"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md2 v-if='user.transplantation_data=="Відомо"'>
          <p>
            <font color="#808080">
              Дата трансплантації
            </font>
          </p>
          <v-text-field
            v-if='user.transplantation_data=="Відомо"'
            v-model="user.transplantation_data_yes"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
          <v-text-field
            v-else
            v-model="user.transplantation_data"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
        <v-flex md3 v-if='user.transplantation_data=="Відомо"'>
          <p><font color="#808080">Джерело CD34 стовбурових  клітин</font></p>
          <v-text-field
            v-model="user.CB14_soure"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md2 v-if='user.transplantation_data=="Відомо"'>
          <p><font color="#808080">Генна терапія</font></p>
          <v-text-field
            v-if='user.genetic_therapy=="Так"'
            v-model="user.genetic_therapy_yes"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
          <v-text-field
            v-else
            v-model="user.genetic_therapy"
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
    <v-btn @click="edit">Редагувати</v-btn>
    <v-btn v-for="user in users" :key="user.id" @click="submit(user)" v-show="!shouldDisable">Зберегти</v-btn>
    <v-btn @click="add" to="/newpatient">Додати</v-btn> 
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
      axios.get('http://localhost:3000/users',{
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
        this.alertShow = true;
        setTimeout(() => {
          this.alertShow = false;
        }, 2000)
      }
    },
  }
</script>