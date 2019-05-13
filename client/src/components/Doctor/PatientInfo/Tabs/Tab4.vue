<template>
  <v-form v-model="valid" ref="form">
    <v-container>
      <v-layout>

        <v-flex md4>
          <p><font color="#808080">Трансплантація стовбурових клітин</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.stem_cells_transplantation"
            solo
            readonly
          ></v-text-field>
        </v-flex>

        <v-flex md2 >
          <p>
            <font color="#808080">
              Дата трансплантації
            </font>
          </p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.transplantation_data"
            solo
            readonly
          ></v-text-field>
        </v-flex>
        <v-flex md3>
          <p><font color="#808080">Джерело CD34 стовбурових  клітин</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.CB14_soure"
            solo
            readonly
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">Генна терапія</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.genetic_therapy"
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