<template>
  <v-form ref="form">
    <v-container>
      <v-layout>

        <v-flex xs12 md4>
          <p>Чи була трасплатнація стовбурових клітин? </p>   
          <v-radio-group v-model=" stemCellsGeneticTheraty.stem_cells_transplantation" :mandatory="false">
            <v-radio color="#1976d2" label="Так" value="yes"></v-radio>
            <v-radio color="#1976d2" label="Ні" value="no"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="unknown"></v-radio>
            <v-text-field v-if="stemCellsGeneticTheraty.stem_cells_transplantation== 'yes'"
                v-model= stemCellsGeneticTheraty.stem_cells_transplantation_yes
                label="Введіть дані"
                prepend-icon ="edit"
            ></v-text-field>
          </v-radio-group>
        </v-flex>
        <v-flex md4>
          <p>Дата трансплантації</p>   
          <v-radio-group v-model=" stemCellsGeneticTheraty.transplantation_data" :mandatory="false">
            <v-radio color="#1976d2" label="Відомо" value="known"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="unknown"></v-radio>
            <v-text-field v-if="stemCellsGeneticTheraty.transplantation_data == 'known'"
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
            <v-radio color="#1976d2" label="Кістковий мозок" value="bone_marrow"></v-radio>
            <v-radio color="#1976d2" label="Периферична кров" value="peripheral_blood"></v-radio>
            <v-radio color="#1976d2" label="Пуповинна кров" value="umbilical_cord_blood"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="unknown"></v-radio>
          </v-radio-group>
        </v-flex>
        <v-flex  md4>
              <p>Генна терапія</p>   
              <v-radio-group v-model=" stemCellsGeneticTheraty.genetic_therapy" :mandatory="false">
                <v-radio color="#1976d2" label="Так" value="yes"></v-radio>
                <v-radio color="#1976d2" label="Ні" value="no"></v-radio>
                <v-radio color="#1976d2" label="Невідомо" value="unknown"></v-radio>
                <v-text-field v-if="stemCellsGeneticTheraty.genetic_therapy == 'yes'"
                    v-model= stemCellsGeneticTheraty.genetic_therapy_yes
                    :rules= "dataRules"
                    label="Введіть дату"
                    prepend-icon ="event"
                ></v-text-field>
              </v-radio-group>
            </v-flex>
      </v-layout>
    </v-container>        

    <v-btn @click="submit">Зберегти</v-btn>
  </v-form>
</template>


<script>
import style from './tab.css'
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
    }
    
}
</script>