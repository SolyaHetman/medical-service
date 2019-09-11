<template>
  <v-form ref="form">
    <v-container>
      <v-layout>

        <v-flex md4 >
          <br>
          <p><font color="#808080">Дата вперше встановленого клінічного діагнозу ПІД</font></p>
          <v-text-field
            v-model="user.FirstDiagnosisPidDate"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md6>
          <p>
          	<font color="#808080">
          		Встановлений діагнозу ПІД без наявності ПІД-асоційованих симтомів і лише на підставі лабораторних відхилень
          	</font>
          </p>
          <v-text-field
            v-model="user.PidLabOnly"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout>

        <v-flex md2>
          <p>
          	<font color="#808080">IgG</font>
          </p>
          <v-text-field
            v-model="user.Igg"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">IgA</font></p>
          <v-text-field
            v-model="user.Iga"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
        <v-flex md2>
          <p><font color="#808080">IgM</font></p>
          <v-text-field
            v-model="user.Igm"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
        <v-flex md2>
          <p><font color="#808080">IgE</font></p>
          <v-text-field
            v-model="user.Ige"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
       <v-flex md8>
          <p><font color="#808080">Перші ПІД-асоційовані симтоми</font></p>
          <v-text-field v-if='user.infection!=null'
            v-model="infection+user.infection"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
          <v-text-field v-if='user.dysregulation!=null'
            v-model="dysregulation+user.dysregulation"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
          <v-text-field v-if='user.malignancy!=null'
            v-model="malignancy+user.malignancy"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
          <v-text-field v-if='user.manifestations!=null'
            v-model="manifestations+user.manifestations"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
          <v-text-field v-if='user.symptoms_start_another_data!=null'
            v-model="user.symptoms_start_another+another+user.symptoms_start_another_data"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
          <v-text-field 
            v-if='user.SymptomName=="Перші симтоми невідомі"'
            v-model="user.SymptomName"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
          <v-text-field 
            v-if='user.SymptomName=="Відсутність ПІД-асоційованих симптомів"'
            v-model="user.SymptomName"
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
        infection: "Інфекції почалися ",
        dysregulation: "Дисрегуляція імунної відповіді почалася ",
        malignancy: "Малігнізація (онконастороженість) почалася ",
        manifestations: "Синдромальні маніфестації почалися ",
        another: " почалися ",
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
      .then(res => {this.user = res.data[0], console.log(this.user)})
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

