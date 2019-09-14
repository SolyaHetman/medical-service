<template>
  <v-form ref="form" @submit.prevent="addData">
    <v-container>
      <v-layout>

        <v-flex md2 >
          <p><font color="#808080">Лікар</font></p>
          <v-text-field
            v-model='doctor' 
            :readonly="shouldDisable"
            label="Лікар1"
            single-line
          ></v-text-field>
        </v-flex>  
        <v-flex md2 >
          <p><font color="#808080">Номер реєстрації</font></p>
          <v-text-field
            v-model="number" 
            readonly
          ></v-text-field>
        </v-flex>
        <v-flex md2 >
          <p><font color="#808080">ПІБ</font></p>
          <v-text-field
            v-model="pid"
            readonly
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">Дата народження</font></p>
          <v-text-field
            v-model="user.BirthdayDate"
            prepend-icon ="event"
            readonly
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">Стать</font></p>
          <v-text-field
            v-model="user.Sex"
            readonly
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        <v-flex md4 >
          <p><font color="#808080">Місце народження</font></p>
          <v-text-field
            v-model="user.Homeland"
            prepend-icon ="place"
            readonly
          ></v-text-field>
        </v-flex>

        <v-flex md4>
          <p><font color="#808080">Місце теперішнього проживання</font></p>
          <v-text-field
            v-model="user.City"
            prepend-icon ="place"
            readonly
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container >
      <v-layout>
      
        <v-flex md4>
          <p><font color="#808080">Генетично ускладнений сімейний анамнез ПІД</font></p>
          <v-text-field
            v-if = '(user.FamilyTiesPid != "Ні") && (user.FamilyTiesPid != "Невідомо")'
            v-model="tmp"
            readonly
          ></v-text-field>
          <v-text-field
            v-else
            v-model="user.FamilyTiesPid"
          ></v-text-field>
        </v-flex>

        <v-flex md4>
          <p><font color="#808080">Згода пацієнта на використання особистої інформації</font></p>
          <v-text-field
            v-model="user.radiosAgreement"
            readonly
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        
        <v-flex md4 v-if = '(user.radioYesNo != "Ні") && (user.radioYesNo != "Невідомо")'>
          <p><font color="#808080">Родинні зв'язки ПІД</font></p>
          <ul>
            <li v-if='user.fatherESID != null'>
              <v-text-field
                v-model="father+user.fatherESID"
                readonly
              ></v-text-field>
            </li>
            <li v-if='user.motherESID != null'>
              <v-text-field
                v-model="mother+user.motherESID"
                readonly
              ></v-text-field>
            </li>
            <li v-if='user.sisterESID != null'>         
              <v-text-field
                v-model="sister+user.sisterESID"
                readonly
              ></v-text-field>
            </li>
            <li v-if='user.brotherESID != null'>
              <v-text-field
                v-model="brother+user.brotherESID"
                readonly
              ></v-text-field>
            </li>
            <li v-if='user.menESID != null'>  
              <v-text-field
                v-model="man+user.menESID"
                readonly
              ></v-text-field>
            </li>
            <li v-if='user.womenESID != null'>  
              <v-text-field
                v-model="women+user.womenESID"
                readonly
              ></v-text-field>
            </li>
          </ul>
        </v-flex>
      </v-layout>
    </v-container> 
      <v-flex xs12>
        <v-alert
          :value="alertShow"
          type="success"        
          color='#1976d2'
        >
          Дані збережено
        </v-alert>
      </v-flex>
    <v-btn @click="edit">Змінити лікаря</v-btn> 
    <v-btn @click="submit(user)" v-show="!shouldDisable">Зберегти</v-btn>  
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
        user: [],
        pid: '',
        tmp: "Так",
        father: "ESID батька: ",
        mother: "ESID матері: ",
        brother: "ESID брата: ",
        sister: "ESID сестри: ",
        women: "ESID родича по жіночій лінії: ",
        man: "ESID родича по чоловічій лінії: ",
        shouldDisable: true,
        doctor: "Doctor 1",
        number: ""
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
      .then(res => {this.user = res.data[0], this.pid = res.data[0].LastName[0] + res.data[0].FirstName[0] + res.data[0].MiddleName[0], this.number= this.pid + res.data[0].BirthdayDate.replace(/-/g,'')})
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
         // TODO: change doctor
        
        this.alertShow = true;

        setTimeout(() => {
          this.alertShow = false;
        }, 1500)
      }
    },
  }
</script>