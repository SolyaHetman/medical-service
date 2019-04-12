<template>
  <v-form v-model="valid" ref="form">
    <v-container>
      <v-layout>

        <v-flex md4>
          <p><font color="#808080">Трансплантація стовбурових клітин</font></p>
          <v-text-field
            v-model="stemCellsGeneticTheraty.stem_cells_transplantation"
          ></v-text-field>
        </v-flex>

        <v-flex md2 >
          <p>
            <font color="#808080">
              Дата трансплантації
            </font>
          </p>
          <v-text-field
            v-model="stemCellsGeneticTheraty.transplantation_data"
          ></v-text-field>
        </v-flex>
        <v-flex md2>
          <p><font color="#808080">Джерело CD34 стовбурових  клітин</font></p>
          <v-text-field
            v-model="stemCellsGeneticTheraty.CD14_soure"
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">Генна терапія</font></p>
          <v-text-field
            v-model="stemCellsGeneticTheraty.genetic_therapy"
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>
    <v-btn @click="submit">Зберегти</v-btn>
    <v-btn @click="cancel" to="/dashboard">Скасувати</v-btn>
 </v-form>
</template>

<script>
export default {
    data(){
        return{
            stemCellsGeneticTheraty:{
                stem_cells_transplantation: "Так",
                transplantation_data: "19-03-2007",
                CD14_soure: "Кістковий мозок",
                genetic_therapy: "Так",              
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