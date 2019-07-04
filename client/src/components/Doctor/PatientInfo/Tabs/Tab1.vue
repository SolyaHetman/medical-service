<template>
  <v-form ref="form" @submit.prevent="addData">
    <v-container>
      <v-layout>

        <v-flex md2 >
          <p><font color="#808080">Номер реєстрації</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.pid + user.date.replace(/-/g,'')" 
            readonly
          ></v-text-field>
        </v-flex>
        <v-flex md2 >
          <p><font color="#808080">ПІБ</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.pid"
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">Дата народження</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.date"
            prepend-icon ="event"
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">Стать</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.sex"
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        <v-flex md4 >
          <p><font color="#808080">Місце народження</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.homeland"
            :readonly="shouldDisable"
            prepend-icon ="place"
          ></v-text-field>
        </v-flex>

        <v-flex md4>
          <p><font color="#808080">Місце теперішнього проживання</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.city"
            :readonly="shouldDisable"
            prepend-icon ="place"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container 
      v-for="user in users"
      :key="user.id">
      <v-layout>
      
        <v-flex md6>
          <p><font color="#808080">Генетично ускладнений сімейний анамнез первинних імунодефіцитів</font></p>
          <v-text-field
            v-if = '(user.radioYesNo != "Ні") && (user.radioYesNo != "Невідомо")'
            v-model="tmp"
            :readonly="shouldDisable"
          ></v-text-field>
          <v-text-field
            v-else
            v-model="user.radioYesNo"
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md4>
          <p><font color="#808080">Згода пацієнта на використання особистої інформації</font></p>
          <v-text-field
            v-for="user in users"
            :key="user.id"
            v-model="user.radiosAgreement"
            :readonly="shouldDisable"
            
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>

    <v-container
      v-for="user in users"
      :key="user.id">
      <v-layout>
        
        <v-flex md2 v-if = '(user.radioYesNo != "Ні") && (user.radioYesNo != "Невідомо")'>
          <p><font color="#808080">Родинні зв'язки ПІД</font></p>
          <v-text-field
            v-if='user.fatherESID != null'
            v-model="user.fatherESID"
            :readonly="shouldDisable"
          ></v-text-field>
          <v-text-field
            v-if='user.motherESID != null'
            v-model="user.motherESID"
            :readonly="shouldDisable"
          ></v-text-field>
          <v-text-field
            v-if='user.sisterESID != null'
            v-model="user.sisterESID"
            :readonly="shouldDisable"
          ></v-text-field>
          <v-text-field
            v-if='user.brotherESID != null'
            v-model="user.brotherESID"
            :readonly="shouldDisable"
          ></v-text-field>
          <v-text-field
            v-if='user.manESID != null'
            v-model="user.manESID"
            :readonly="shouldDisable"
          ></v-text-field>
          <v-text-field
            v-if='user.womenESID != null'
            v-model="user.womenESID"
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
    <!-- <v-btn @click="add" to="/newpatient">Додати</v-btn> -->
    
    

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
        alertShow: false,
        // valid: false,
        // date: null,
        // nameRules: [
        //   (v) => !!v || 'Name is required',
        //   (v) => v && v.length <= 20 || 'Name must be less than 20 characters'
        // ],
        users: [],
        tmp: "Так",
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
        
        this.alertShow = true;

        // console.log('HERE!!!!  '+ this.alertShow)
        setTimeout(() => {
          this.alertShow = false;
        }, 1500)
      }
    },
  }
</script>