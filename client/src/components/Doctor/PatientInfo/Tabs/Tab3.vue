<template>
  <v-form ref="form">
    <v-container>
      <v-layout>

        <v-flex md5>
          <p><font color="#808080">Уражені гени</font></p>
          <v-text-field
            v-model="user.DamagedGenes"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md6 v-if="user.DamagedGenes == 'Генетичне дослідження проводилось,мутації не виявлено'">
          <p><font color="#808080">Додаткова інформація</font></p>
          <v-text-field
            v-model="user.mutations_no"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md5 v-if="user.DamagedGenes == 'Генетичне дослідження проводилось,мутації виявлено'">
          <p><font color="#808080">Додаткова інформація</font></p>
          <v-text-field
            v-model="user.mutations_yes"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        <v-flex md4>
          <p>
            <font color="#808080">
              Дата генетичного дослідження
            </font>
          </p>
          <v-text-field
            v-model="user.GeneticResearchDate"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
        <v-flex md4>
          <p><font color="#808080">Метод секвенування</font></p>
          <v-text-field
            v-model="user.SequencingMethod"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        <v-flex md4>
          <p><font color="#808080">Лабораторія,яка проводила генетичні дослідження</font></p>
          <v-text-field
            v-model="user.LaboratoryName"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
        <v-flex md4>
          <p>
            <font color="#808080">
              Причина генетичного дослідження
            </font>
          </p>
          <v-text-field
            v-model="user.GeneticResearchReason"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
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
    <v-btn @click="edit">Редагувати</v-btn>
    <v-btn @click="submit(user)" v-show="!shouldDisable">Зберегти</v-btn>
 </v-form>
</template>

<script>
  import axios from 'axios';

  export default {
    data(){
      return{
        alertShow: false,
        user: [],
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
      .then(res => this.user = res.data[0])
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

