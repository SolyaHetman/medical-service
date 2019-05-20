<template>
  <v-form ref="form" @submit.prevent="savePatient">
    <v-container>
      <v-layout>

        <v-flex xs12 md4>
          <p>Чи була трасплатнація стовбурових клітин? </p>   
          <v-radio-group v-model=" stemCellsGeneticTheraty.stem_cells_transplantation" :mandatory="false">
            <v-radio color="#1976d2" label="Так" value="Так"></v-radio>
            <v-radio color="#1976d2" label="Ні" value="Ні"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
            <v-text-field v-if="stemCellsGeneticTheraty.stem_cells_transplantation== 'Так'"
                v-model= stemCellsGeneticTheraty.stem_cells_transplantation_yes
                label="Введіть дані"
                prepend-icon ="edit"
            ></v-text-field>
          </v-radio-group>
        </v-flex>
        <v-flex md4>
          <p>Дата трансплантації</p>   
          <v-radio-group v-model=" stemCellsGeneticTheraty.transplantation_data" :mandatory="false">
            <v-radio color="#1976d2" label="Відомо" value="Відомо"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
            <v-text-field v-if="stemCellsGeneticTheraty.transplantation_data == 'Відомо'"
                v-model= stemCellsGeneticTheraty.transplantation_data_yes
                label="Введіть дані"
                :rules= "dataRules"
                prepend-icon ="event"
            ></v-text-field>
          </v-radio-group>
        </v-flex>
        <v-flex md4>
          <p>Джерело CD34 стовбурових  клітин</p>   
          <v-radio-group v-model=" stemCellsGeneticTheraty.CB14_soure" :mandatory="false">
            <v-radio color="#1976d2" label="Кістковий мозок" value="Кістковий мозок"></v-radio>
            <v-radio color="#1976d2" label="Периферична кров" value="Периферична кров"></v-radio>
            <v-radio color="#1976d2" label="Пуповинна кров" value="Пуповинна кров"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
          </v-radio-group>
        </v-flex>
        <v-flex  md4>
              <p>Генна терапія</p>   
              <v-radio-group v-model=" stemCellsGeneticTheraty.genetic_therapy" :mandatory="false">
                <v-radio color="#1976d2" label="Так" value="Так"></v-radio>
                <v-radio color="#1976d2" label="Ні" value="Ні"></v-radio>
                <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
                <v-text-field v-if="stemCellsGeneticTheraty.genetic_therapy == 'Так'"
                    v-model= stemCellsGeneticTheraty.genetic_therapy_yes
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
            stemCellsGeneticTheraty:{
                stem_cells_transplantation: null,
                stem_cells_transplantation_yes: null,
                transplantation_data: null,
                transplantation_data_yes: null,
                CB14_soure: null,
                genetic_therapy: null,              
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
        EventBus.$emit('completedForm', this.stemCellsGeneticTheraty,4);
      }
      
    }
    
}
</script>