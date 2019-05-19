<template>
  <v-form ref="form">
    <v-container>
      <v-layout>

        <v-flex md6>
          <p><font color="#808080">Уражені гени</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.damage_genes"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md3>
          <p>
            <font color="#808080">
              Дата генетичного дослідження
            </font>
          </p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.genetic_research_data"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
        <v-flex md3>
          <p><font color="#808080">Метод секвенціонування</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.sequencing_method"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        <v-flex md3>
          <p><font color="#808080">Лабораторія,яка проводила генетичні дослідження</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.research_lab"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
        <v-flex md2>
          <p>
            <font color="#808080">
              Причина генетичного дослідження
            </font>
          </p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.genetic_research_reason"
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
      }
    },
  }
</script>

