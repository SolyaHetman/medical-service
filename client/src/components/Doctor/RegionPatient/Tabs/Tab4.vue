<template>
  <v-form ref="form">
    <v-container v-for="info in patient.stemCellsGeneticTheraty2">
      <v-layout>

        <v-flex md4>
          <p><font color="#808080">Трансплантація стовбурових клітин</font></p>
          <v-text-field
            v-model="info.StemCellsTransplantation"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md2 v-if='info.StemCellsTransplantation!="Ні" && info.StemCellsTransplantation!="Невідомо"'>
          <p>
            <font color="#808080">
              Дата трансплантації
            </font>
          </p>
          <v-text-field
            v-model="info.TransplantationDate"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
        <v-flex md3 v-if='info.StemCellsTransplantation!="Ні" && info.StemCellsTransplantation!="Невідомо"'>
          <p><font color="#808080">Джерело CD34 стовбурових  клітин</font></p>
          <v-text-field
            v-model="info.CB14_soure"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>

        <v-flex md2 v-if='info.StemCellsTransplantation!="Ні" && info.StemCellsTransplantation!="Невідомо"'>
          <p><font color="#808080">Генна терапія</font></p>
          <v-text-field
            v-model="info.GeneticTherapy"
            solo
            :readonly="shouldDisable"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <hr>
    </v-container>
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
  }
</script>