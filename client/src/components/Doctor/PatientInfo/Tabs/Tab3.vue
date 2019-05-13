<template>
  <v-form v-model="valid" ref="form">
    <v-container>
      <v-layout>

        <v-flex md6>
          <p><font color="#808080">Уражені гени</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.damage_genes"
            solo
            readonly
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
            readonly
          ></v-text-field>
        </v-flex>
        <v-flex md3>
          <p><font color="#808080">Метод секвенціонування</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.sequencing_method"
            solo
            readonly
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
            readonly
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

