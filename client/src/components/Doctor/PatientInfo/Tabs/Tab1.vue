<template>
  <v-form  ref="form">
    <v-container>
      <v-layout>

        <v-flex md2 >
          <p><font color="#808080">Номер реєстрації</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.pid+user.date.replace(/-/g,'')"
            readonly
          ></v-text-field>
        </v-flex>

        <v-flex md2 >
          <p><font color="#808080">ПІБ</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.pid"
            readonly
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">Дата народження</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.date"
            prepend-icon ="event"
            readonly
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">Стать</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.sex"
            readonly
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        <v-flex md2 >
          <p><font color="#808080">Країна та місто народження</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.homeland"
            readonly
            prepend-icon ="place"
          ></v-text-field>
        </v-flex>

        <v-flex md3>
          <p><font color="#808080">Країна та місто теперішнього проживання</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.city"
            readonly
            prepend-icon ="place"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
      
        <v-flex md2>
          <p><font color="#808080">Родинні зв'язки ПІД</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.family_ties_pid"
            readonly
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">Спорідненість пацієнта</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.radiosAffinity"
            readonly
          ></v-text-field>
        </v-flex>

        <v-flex md6>
          <p><font color="#808080">Генетично ускладнений сімейний анамнез первинних імунодефіцитів</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.radioYesNo"
            readonly
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        <v-flex md3>
          <p><font color="#808080">Згода пацієнта на використання особистої інформації</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.radiosAgreement"
            readonly
            solo
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>

    <v-btn @click="submit">Зберегти</v-btn>
    <v-btn @click="edit">Редагувати</v-btn>

 </v-form>
</template>

<style scoped>
  .v-form>.container>.layout:only-child {
    margin: -20px;
}

</style>


<script>
import axios from 'axios';
  export default {
    data () {
      return {
        // valid: false,
        // date: null,
        // nameRules: [
        //   (v) => !!v || 'Name is required',
        //   (v) => v && v.length <= 20 || 'Name must be less than 20 characters'
        // ],
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
    },
  }
</script>