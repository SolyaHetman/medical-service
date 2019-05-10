<template>
  <v-form ref="form"  @submit.prevent="savePatient">
    <v-container>
      <v-layout>

        <v-flex xs12 md5>
          <p>Уражені гени</p>   
          <v-radio-group v-model=" pidDiagnosis.damage_genes" :mandatory="false">
            <v-radio color="#1976d2" label="Генетичне дослідження проводилось,мутацій не виявлено" value="Генетичне дослідження проводилось,мутацій не виявлено"></v-radio>
            <v-radio color="#1976d2" label="Генетичне дослідження не проводилось" value="Генетичне дослідження не проводилось"></v-radio>
            <v-radio color="#1976d2" label="Історія генетичних досліджень невідома" value="Історія генетичних досліджень невідома"></v-radio>
            <v-radio color="#1976d2" label="Додаткові гени" value="Додаткові гени"></v-radio>
            <v-text-field v-if="pidDiagnosis.damage_genes == 'Додаткові гени'"
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
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
            <v-radio color="#1976d2" label="Відомо" value="Відомо"></v-radio>
            <v-text-field v-if="pidDiagnosis.genetic_research_data == 'Відомо'"
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
            <v-radio color="#1976d2" label="Секвенціонування гена" value="Секвенціонування гена"></v-radio>
            <v-radio color="#1976d2" label="Екзом/геном секвенціонування" value="Екзом/геном секвенціонування"></v-radio>
            <v-radio color="#1976d2" label="Негенетичні гени" value="Негенетичні гени"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
          </v-radio-group>
        </v-flex>
                
      </v-layout>
    </v-container>


    <v-container>
      <v-layout>

        <v-flex xs12 md4>
          <p>Лабораторія,яка проводила генетичні дослідження</p>  
          <v-text-field
                v-model="pidDiagnosis.research_lab"
                label="Введіть лабораторію"
                prepend-icon ="create"
          ></v-text-field>
        </v-flex>
        <v-flex md5>
          <p>Причина генетичного дослідження</p>   
          <v-radio-group v-model=" pidDiagnosis.genetic_research_reason" :mandatory="false">
            <v-radio color="#1976d2" label="Специфічні клінічні симптоми" value="Специфічні клінічні симптоми"></v-radio>
            <v-radio color="#1976d2" label="Сімейний скринінг" value="Сімейний скринінг"></v-radio>
            <v-radio color="#1976d2" label="Пренатальна діагностика" value="Пренатальна діагностика"></v-radio>
            <v-radio color="#1976d2" label="Діагноз під час пренатального скринінгу" value="Діагноз під час пренатального скринінгу"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
          </v-radio-group>
        </v-flex>

      </v-layout>
    </v-container>

    <v-btn type="submit">Зберегти</v-btn>
  </v-form>
</template>


<script>
import style from './tab.css'
import axios from 'axios'
import EventBus from '@/event-bus';
export default {
    data(){
        return{
            pidDiagnosis:{
                damage_genes: null,
                genetic_research_data: null,
                sequencing_method: null,
                research_lab: null,
                genetic_research_reason: null,
                
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
        if (this.pidDiagnosis.damage_genes == 'Додаткові гени') {
          this.pidDiagnosis.damage_genes = this.pidDiagnosis.additional_genes;
        }
        if (this.pidDiagnosis.genetic_research_data == 'Відомо') {
          this.pidDiagnosis.genetic_research_data = this.pidDiagnosis.genetic_research_data_input;
        }
        EventBus.$emit('completedForm', this.pidDiagnosis);
      }
    }
    
}
</script>