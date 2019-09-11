<template>
  <v-form ref="form">
    <v-container>
      <v-layout>

        <v-flex md4>
          <p><font color="#808080">Трансплантація стовбурових клітин</font></p>
          <v-text-field
            v-model="patient.StemCellsTransplantation"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md2 v-if='patient.StemCellsTransplantation!="Ні" && patient.StemCellsTransplantation!="Невідомо"'>
          <p>
            <font color="#808080">
              Дата трансплантації
            </font>
          </p>
          <v-text-field
            v-model="patient.TransplantationDate"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
        <v-flex md3 v-if='patient.StemCellsTransplantation!="Ні" && patient.StemCellsTransplantation!="Невідомо"'>
          <p><font color="#808080">Джерело CD34 стовбурових  клітин</font></p>
          <v-text-field
            v-model="patient.CB14_soure"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md2 v-if='patient.StemCellsTransplantation!="Ні" && patient.StemCellsTransplantation!="Невідомо"'>
          <p><font color="#808080">Генна терапія</font></p>
          <v-text-field
            v-model="patient.GeneticTherapy"
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
    <v-btn @click="submit(patient)" v-show="!shouldDisable">Зберегти</v-btn>
    <v-btn to="/addNewInf">Додати</v-btn> 
 </v-form>
</template>

<script>
import axios from 'axios';

  export default {
    data(){
      return{
        alertShow: false,
        patient: {},
        shouldDisable: true
      }
    },
    created() {
      console.log(this.$route.params.user);
    },
    mounted() {
      let self = this;
      const id = this.$route.params.user;
      axios.get('http://localhost:3000/users',{
        params: {
          id: this.$route.params.user
        }
      })
      .then(res => this.patient = res.data[0])
      .catch(error => console.log('Error :', error))
    },
    methods: {
      edit() {
      this.shouldDisable = false
      },
      submit(user) {
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