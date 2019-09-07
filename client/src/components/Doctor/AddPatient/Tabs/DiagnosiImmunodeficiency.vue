<template>
  <v-form ref="form"  @submit.prevent="savePatient">
    <v-container>
      <v-layout>

        <v-flex xs12 md5>
          <p>Уражені гени</p>   
          <v-radio-group v-model=" pidDiagnosis.DamagedGenes" :mandatory="false">
            <v-radio color="#1976d2" label="Генетичне дослідження не проводилось" value="Генетичне дослідження не проводилось"></v-radio>
            <v-radio color="#1976d2" label="Історія генетичних досліджень невідома" value="Історія генетичних досліджень невідома"></v-radio>
            <v-radio color="#1976d2" label="Генетичне дослідження проводилось,мутації не виявлено" value="Генетичне дослідження проводилось,мутації не виявлено"></v-radio>
            <v-text-field v-if="pidDiagnosis.DamagedGenes == 'Генетичне дослідження проводилось,мутації не виявлено'"
              v-model= pidDiagnosis.mutations_no
              label="Введіть дані"
              prepend-icon ="edit"
              clearable
            ></v-text-field>
            <v-radio color="#1976d2" label="Генетичне дослідження проводилось,мутації виявлено" value="Генетичне дослідження проводилось,мутації виявлено"></v-radio>
            <v-text-field v-if="pidDiagnosis.DamagedGenes == 'Генетичне дослідження проводилось,мутації виявлено'"
                v-model= pidDiagnosis.mutations_yes
                label="Введіть дані"
                prepend-icon ="edit"
                clearable
            ></v-text-field>
          </v-radio-group>
        </v-flex>
        <v-flex md5>
          <p>Дата генетичного дослідження</p>   
          <v-radio-group v-model=" pidDiagnosis.GeneticResearchDate" :mandatory="false">
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
            <v-radio color="#1976d2" label="Відомо" value="Відомо"></v-radio>
            <v-text-field v-if="pidDiagnosis.GeneticResearchDate == 'Відомо'"
                v-model= pidDiagnosis.genetic_research_data_input
                :rules="dataRules"
                prepend-icon ="event"
                label="Введіть дані"
            ></v-text-field>
          </v-radio-group>
        </v-flex>
        <v-flex md5>
          <p>Метод секвенування</p>   
          <v-radio-group v-model=" pidDiagnosis.SequencingMethod" :mandatory="false">
            <v-radio color="#1976d2" label="Секвенування гена" value="Секвенування гена"></v-radio>
            <v-radio color="#1976d2" label="Екзом/геном секвенування" value="Екзом/геном секвенування"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
          </v-radio-group>
        </v-flex>
                
      </v-layout>
    </v-container>


    <v-container>
      <v-layout>

        <v-flex xs12 md4>
          <p>Лабораторія,яка проводила генетичні дослідження</p>  
           <v-select
                v-model="pidDiagnosis.LaboratoryName"
                :items="variety"
                attach
                label="Виберіть"
            ></v-select>
            <v-text-field v-if="pidDiagnosis.LaboratoryName == 'Інше,вказати'"
                v-model= pidDiagnosis.research_lab_enter
                label="Введіть інформацію"
                prepend-icon ="create"
            ></v-text-field>
        </v-flex>
        <v-flex md5>
          <p>Причина генетичного дослідження</p>   
          <v-radio-group v-model=" pidDiagnosis.GeneticResearchReason" :mandatory="false">
            <v-radio color="#1976d2" label="Специфічні клінічні симптоми" value="Специфічні клінічні симптоми"></v-radio>
            <v-radio color="#1976d2" label="Сімейний скринінг" value="Сімейний скринінг"></v-radio>
            <v-radio color="#1976d2" label="Пренатальна діагностика" value="Пренатальна діагностика"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
          </v-radio-group>
        </v-flex>

      </v-layout>
    </v-container>

    <v-btn type="submit">Далі</v-btn>
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
                DamagedGenes: null,
                GeneticResearchDate: null,
                SequencingMethod: null,
                LaboratoryName: null,
                research_lab_enter: null,
                GeneticResearchReason: null,
                mutations_no: null,
                mutations_yes: null,
            },
            dataRules: [
                  (v) => /^(\d{1,2})-(\d{1,2})-(\d{4})$/.test(v) || 'Введіть ДД-ММ-РР'
                ],
            variety: ['Invitae, Сан-Франциско США', 'Генетична лабораторія медичного університету, Дебрецин Угорщина', 'Інститут спадкової паталогії АМН України', 'Інше,вказати' ],
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
        if (this.pidDiagnosis.GeneticResearchDate == 'Відомо') {
          this.pidDiagnosis.GeneticResearchDate = this.pidDiagnosis.genetic_research_data_input;
        }
        if (this.pidDiagnosis.LaboratoryName == 'Інше,вказати') {
          this.pidDiagnosis.LaboratoryName = this.pidDiagnosis.research_lab_enter;
        }
        delete this.pidDiagnosis.genetic_research_data_input;
        delete this.pidDiagnosis.research_lab_enter;
        console.log(this.pidDiagnosis)
        EventBus.$emit('completedForm', this.pidDiagnosis,3);
      }
    }
    
}
</script>