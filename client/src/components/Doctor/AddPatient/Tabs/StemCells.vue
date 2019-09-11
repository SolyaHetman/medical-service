<template>
  <v-form ref="form" @submit.prevent="savePatient">
    <v-container>
      <v-layout>

        <v-flex xs12 md4>
          <p>Чи була трасплатнація стовбурових клітин? </p>   
          <v-radio-group v-model=" stemCellsGeneticTheraty.StemCellsTransplantation" :mandatory="false">
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
          <v-radio-group v-model=" stemCellsGeneticTheraty.TransplantationDate" :mandatory="false">
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
          <v-radio-group v-model=" stemCellsGeneticTheraty.CB14_soure" :mandatory="false">
            <v-radio color="#1976d2" label="Кістковий мозок" value="Кістковий мозок"></v-radio>
            <v-radio color="#1976d2" label="Периферична кров" value="Периферична кров"></v-radio>
            <v-radio color="#1976d2" label="Пуповинна кров" value="Пуповинна кров"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
          </v-radio-group>
        </v-flex>
        <v-flex  md4 v-if="stemCellsGeneticTheraty.StemCellsTransplantation == 'Так'">
              <p>Генна терапія</p>   
              <v-radio-group v-model=" stemCellsGeneticTheraty.GeneticTherapy" :mandatory="false">
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
    </v-container>        

    <v-btn type="submit">Далі</v-btn>
  </v-form>
</template>


<script>
import style from './tab.css'
import EventBus from '@/event-bus';
export default {
    data(){
        return{
            stemCellsGeneticTheraty2: [],  
            stemCellsGeneticTheraty:
              {
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

        //  let stemCellsGeneticTheraty2 = [{
        //         StemCellsTransplantation: this.stemCellsGeneticTheraty.StemCellsTransplantation,
        //         TransplantationDate: this.stemCellsGeneticTheraty.TransplantationDate,
        //         CB14_soure: this.stemCellsGeneticTheraty.CB14_soure,
        //         GeneticTherapy: this.stemCellsGeneticTheraty.GeneticTherapy, 
        //  }
        // ]
        this.stemCellsGeneticTheraty2.push(this.stemCellsGeneticTheraty);
        this.stemCellsGeneticTheraty = {};
        EventBus.$emit('completedForm',[this.stemCellsGeneticTheraty2],4);
      }
      
    }
    
}
</script>