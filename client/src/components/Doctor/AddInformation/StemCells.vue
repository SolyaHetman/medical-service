<template>
  <v-form ref="form" @submit.prevent="savePatient">
    <v-container class="container">
      <v-layout>

        <v-flex xs12 md4>
          <p>Чи була трасплатнація стовбурових клітин? </p>   
          <v-radio-group v-model="stemCellsGeneticTheraty.StemCellsTransplantation" :mandatory="false">
            <v-radio color="#1976d2" label="Так" value="Так"></v-radio>
            <v-radio color="#1976d2" label="Ні" value="Ні"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
            <v-text-field v-if="stemCellsGeneticTheraty.StemCellsTransplantation == 'Так'"
                v-model= stemCellsGeneticTheraty.stem_cells_transplantation_yes
                label="Введіть дані"
                prepend-icon ="edit"
            ></v-text-field>
          </v-radio-group>
        </v-flex>
        <v-flex md4 v-if="stemCellsGeneticTheraty.StemCellsTransplantation == 'Так'">
          <p>Дата трансплантації</p>   
          <v-radio-group v-model="stemCellsGeneticTheraty.TransplantationDate" :mandatory="false">
            <v-radio color="#1976d2" label="Відомо" value="Відомо"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
            <v-text-field v-if="stemCellsGeneticTheraty.TransplantationDate == 'Відомо'"
                v-model= stemCellsGeneticTheraty.transplantation_data_yes
                label="Введіть дані"
                :rules= "dataRules"
                prepend-icon ="event"
            ></v-text-field>
          </v-radio-group>
        </v-flex>
        <v-flex md4 v-if="stemCellsGeneticTheraty.StemCellsTransplantation == 'Так'">
          <p>Джерело CD34 стовбурових  клітин</p>   
          <v-radio-group v-model="stemCellsGeneticTheraty.CB14_soure" :mandatory="false">
            <v-radio color="#1976d2" label="Кістковий мозок" value="Кістковий мозок"></v-radio>
            <v-radio color="#1976d2" label="Периферична кров" value="Периферична кров"></v-radio>
            <v-radio color="#1976d2" label="Пуповинна кров" value="Пуповинна кров"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
          </v-radio-group>
        </v-flex>
        <v-flex  md4 v-if="stemCellsGeneticTheraty.StemCellsTransplantation == 'Так'">
              <p>Генна терапія</p>   
              <v-radio-group v-model="stemCellsGeneticTheraty.GeneticTherapy" :mandatory="false">
                <v-radio color="#1976d2" label="Так" value="Так"></v-radio>
                <v-radio color="#1976d2" label="Ні" value="Ні"></v-radio>
                <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
                <v-text-field v-if="stemCellsGeneticTheraty.GeneticTherapy == 'Так'"
                    v-model= stemCellsGeneticTheraty.SeneticTherapyDate
                    :rules= "dataRules"
                    label="Введіть дату"
                    prepend-icon ="event"
                ></v-text-field>
              </v-radio-group>
            </v-flex>
      </v-layout>
      <v-btn type="submit">Зберегти</v-btn>
    </v-container>        

  </v-form>
</template>
<style>
    .v-container{
        background:red;
    }
</style>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            user: {},
            stemCellsGeneticTheraty2:[],
            stemCellsGeneticTheraty:{
                StemCellsTransplantation: null,
                stem_cells_transplantation_yes: null,
                TransplantationDate: null,
                transplantation_data_yes: null,
                CB14_soure: null,
                GeneticTherapy: null,              
            },
            dataRules: [
                  (v) => /^(\d{1,2})-(\d{1,2})-(\d{4})$/.test(v) || 'Введіть ДД-ММ-РР'
                ],          
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
      .then(res => this.user = res.data[0], console.log(this.user))
      .catch(error => console.log('Error :', error))
    },
    methods: {
      submit () {
        this.$refs.form()
      },
      save (date) {
        this.$refs.menu.save(date)
      },
      savePatient: function () {
        if (this.stemCellsGeneticTheraty.StemCellsTransplantation == 'Так') {
          this.stemCellsGeneticTheraty.StemCellsTransplantation = this.stemCellsGeneticTheraty.stem_cells_transplantation_yes;
        }
        if (this.stemCellsGeneticTheraty.TransplantationDate == 'Відомо') {
          this.stemCellsGeneticTheraty.TransplantationDate = this.stemCellsGeneticTheraty.transplantation_data_yes;
        }
          if (this.stemCellsGeneticTheraty.GeneticTherapy == 'Так') {
          this.stemCellsGeneticTheraty.GeneticTherapy = this.stemCellsGeneticTheraty.SeneticTherapyDate;
        }
         delete this.stemCellsGeneticTheraty.stem_cells_transplantation_yes;
         delete this.stemCellsGeneticTheraty.transplantation_data_yes;
         delete this.stemCellsGeneticTheraty.SeneticTherapyDate;
        
        this.stemCellsGeneticTheraty2.push(this.stemCellsGeneticTheraty);
        this.stemCellsGeneticTheraty = {};

        let payload = {
           stemCellsGeneticTheraty2: this.stemCellsGeneticTheraty2
        };
      //  axios.post(`http://localhost:3000/users/${user.id}`,user)
        // tempObj = Object.assign(tempObj, payLoad);
        // const url = 'http://localhost:3000/users/${user.id}`';
        axios.post('http://localhost:3000/users/${user.id}`', payLoad)
          .then(res =>console.log('Saved'))
          .catch(err => console.log(err))
    
      //   .then(response => {
      //     console.log(response);
      //   })
      //   .catch(error => {
      //     console.log(err);
      //   });
      }
      
    }
    
}
</script>

