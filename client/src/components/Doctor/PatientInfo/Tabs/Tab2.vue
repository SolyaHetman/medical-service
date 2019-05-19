<template>
  <v-form ref="form">
    <v-container>
      <v-layout>

        <v-flex md4 >
          <p><font color="#808080">Дата вперше встановленого клінічного діагнозу первинного імунодефіцину</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.first_diagnostic_pid_data"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md6>
          <p>
          	<font color="#808080">
          		Чи був встановлений діагноз ПІД без наявності ПІД-асоційованих симтомів і лише на підставі лабораторних відхилень
          	</font>
          </p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.pid_lab_only"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
       <v-flex md4>
          <p><font color="#808080">Перші ПІД-асоційовані симтоми</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.symptoms_start"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

      	<v-flex md2>
          <p><font color="#808080">Початок симтомів</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.symptoms_start_data"
            solo
            :readonly="shouldDisable"            
          ></v-text-field>
        </v-flex>
        <v-flex md2>
          <p>
          	<font color="#808080">IgG</font>
          </p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.IgG"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">IgA</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.IgA"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
        <v-flex md2>
          <p><font color="#808080">IgM</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.IgM"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
        <v-flex md2>
          <p><font color="#808080">IgE</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.IgE"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
    <v-btn @click="edit">Редагувати</v-btn>
    <v-btn  v-for="user in users" :key="user.id" @click="submit(user)" v-show="!shouldDisable">Зберегти</v-btn>
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

