<template>
  <v-form v-model="valid" ref="form">
    <v-container>
      <v-layout>

        <v-flex md4 >
          <p><font color="#808080">Дата вперше встановленого клінічного діагнозу первинного імунодефіцину</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.first_diagnostic_pid_dat"
            solo
            readonly
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
            readonly
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
            readonly
          ></v-text-field>
        </v-flex>
      	<v-flex md2>
          <p><font color="#808080">Початок симтомів</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.symptoms_start_data"
            solo
            readonly            
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
            readonly
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">IgA</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.IgA"
            solo
            readonly
          ></v-text-field>
        </v-flex>
        <v-flex md2>
          <p><font color="#808080">IgM</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.IgM"
            solo
            readonly
          ></v-text-field>
        </v-flex>
        <v-flex md2>
          <p><font color="#808080">IgE</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.IgE"
            solo
            readonly
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
    <v-btn @click="add" to="/newpatient">Додати</v-btn>
 </v-form>
</template>

<script>
  import axios from 'axios';

  export default {
    data(){
      return{
        users: []
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
    }
  }
</script>

