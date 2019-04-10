<template>
  <v-form ref="form">
    <v-container>
      <v-layout>

        <v-flex xs12 md4>
          <p>Чи будь-що з нижче наведеного було застосоване в даного пацієнтаи</p>   
          <v-radio-group v-model=" stemCellsGeneticTheraty.stem_cells_transplantation" :mandatory="false">
            <v-radio color="#1976d2" label="Трансплантація стурбурових клітин" value="no_mutations_detected"></v-radio>
            <v-radio color="#1976d2" label="Так" value="yes"></v-radio>
            <v-radio color="#1976d2" label="Ні" value="no"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="unknown"></v-radio>
            <v-text-field v-if="stemCellsGeneticTheraty.stem_cells_transplantation == 'yes'"
                v-model= stemCellsGeneticTheraty.stem_cells_transplantation_yes
                label="Введіть дані"
            ></v-text-field>
          </v-radio-group>
        </v-flex>

      </v-layout>
    </v-container>

    <v-btn @click="submit">Зберегти</v-btn>
  </v-form>
</template>




<script>
export default {
    data(){
        return{
            stemCellsGeneticTheraty:{
                stem_cells_transplantation: null,
                stem_cells_transplantation_yes: null,
                transplantation_data: null,
                CB14_soure: null,
                genetic_therapy: null,
                
            },
            
        }
    },
    methods: {
      submit () {
        this.$refs.form()
      },
    }
    
}
</script>