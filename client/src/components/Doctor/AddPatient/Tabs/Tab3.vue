<template>
  <v-form ref="form">
    <v-container>
      <v-layout>

        <v-flex xs12 md5>
          <p>Уражені гени</p>   
          <v-radio-group v-model=" pidDiagnosis.damage_genes" :mandatory="false">
            <v-radio color="#1976d2" label="Генетичне дослідження проводилось,мутацій не виявлено" value="no_mutations_detected"></v-radio>
            <v-radio color="#1976d2" label="Генетичне дослідження не проводилось" value="no_research"></v-radio>
            <v-radio color="#1976d2" label="Історія генетичних досліджень невідома" value="no_history_research"></v-radio>
            <v-radio color="#1976d2" label="Додаткові гени" value="additional_genes"></v-radio>
            <v-text-field v-if="pidDiagnosis.damage_genes == 'additional_genes'"
                v-model= pidDiagnosis.additional_genes
                label="Введіть дані"
                prepend-icon ="edit"
                clearable
            ></v-text-field>
          </v-radio-group>
        </v-flex>
        <v-flex md5>
          <p>Дата генетичного дослідження</p>   
          <v-radio-group v-model=" pidDiagnosis.genetic_research_data" :mandatory="false">
            <v-radio color="#1976d2" label="Невідомо" value="no_data"></v-radio>
            <v-radio color="#1976d2" label="Відомо" value="yes_data"></v-radio>
            <v-text-field v-if="pidDiagnosis.genetic_research_data == 'yes_data'"
                v-model= pidDiagnosis.genetic_research_data_input
                :rules="dataRules"
                prepend-icon ="event"
                label="Введіть дані"
            ></v-text-field>
          </v-radio-group>
        </v-flex>
        <v-flex md5>
          <p>Метод секвенціонування</p>   
          <v-radio-group v-model=" pidDiagnosis.sequencing_method" :mandatory="false">
            <v-radio color="#1976d2" label="Секвенціонування гена" value="sequencing_gene"></v-radio>
            <v-radio color="#1976d2" label="Екзом/геном секвенціонування" value="sequencing"></v-radio>
            <v-radio color="#1976d2" label="Негенетичні гени" value="nongenetic_genes"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="unknow"></v-radio>
          </v-radio-group>
        </v-flex>
                
      </v-layout>
    </v-container>


    <v-container>
      <v-layout>

        <v-flex xs12 md4>
          <p>Лабораторія,яка проводила генетичні дослідження</p>  
          <v-select
                v-model="pidDiagnosis.research_lab"
                :items="items"
                attach
                label="Виберіть лабораторію"
          ></v-select>
        </v-flex>
        <v-flex md5>
          <p>Причина генетичного дослідження</p>   
          <v-radio-group v-model=" pidDiagnosis.genetic_research_reason" :mandatory="false">
            <v-radio color="#1976d2" label="Специфічні клінічні симптоми" value="specific_symtoms"></v-radio>
            <v-radio color="#1976d2" label="Сімейний скринінг" value="family_screening"></v-radio>
            <v-radio color="#1976d2" label="Пренатальна діагностика" value="prenatal diagnosis"></v-radio>
            <v-radio color="#1976d2" label="Діагноз під час пренатального скринінгу" value="diagnos"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="unknown"></v-radio>
          </v-radio-group>
        </v-flex>

      </v-layout>
    </v-container>

    <v-btn @click="submit">Зберегти</v-btn>
  </v-form>
</template>


<style scoped>

.v-input--selection-controls {
    margin-top: -9px;
}
</style>

<script>
export default {
    data(){
        return{
            pidDiagnosis:{
                damage_genes: null,
                additional_genes: null,
                genetic_research_data: null,
                sequencing_method: null,
                research_lab: null,
                genetic_research_reason: null,
                
            },
            items: ['1', '2', '3'],
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