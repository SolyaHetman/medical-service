<template>
  <v-form ref="form" @submit.prevent="savePatient">
    <v-container>
      <v-layout>

        <v-flex xs12 md4>
          <p>Дата вперше встановленого клінічного діагнозу первинного імунодефіцину</p>   
          <v-radio-group v-model=" pathDagnosis.first_diagnostic_pid_data" :mandatory="false">
            <v-radio color="#1976d2" label="Відомо" value="Відомо"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
            <v-radio color="#1976d2" label="Є лише генетичний анамнез" value="Є лише генетичний анамнез"></v-radio>
            <v-text-field v-if="pathDagnosis.first_diagnostic_pid_data == 'Відомо'"
                v-model= pathDagnosis.first_diagnostic_pid_data_time
                :rules="dataRules"
                prepend-icon ="event"
                label="Введіть дату"
            ></v-text-field>
          </v-radio-group>
        </v-flex>

        <v-flex md5>
          <p>Чи був встановлений діагноз ПІД без наявності ПІД-асоційованих симтомів і лише на підставі  лабораторних відхилень </p>   
          <v-radio-group v-model=" pathDagnosis.pid_lab_only" :mandatory="false">
            <v-radio color="#1976d2" label="Так" value="Так"></v-radio>
            <v-radio color="#1976d2" label="Ні" value="Ні"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
            <v-select v-if="pathDagnosis.pid_lab_only == 'Так'"
                v-model="pathDagnosis.pid_select"
                :items="items"
                attach
                label="Виберіть"
            ></v-select>
            <v-text-field v-if="(pathDagnosis.pid_select == 'Інше') & (pathDagnosis.pid_lab_only == 'Так')"
                v-model= pathDagnosis.pid_select_enter
                label="Введіть інформацію"
                clearable
            ></v-text-field>
          </v-radio-group>
        </v-flex>

        <v-flex  md3>
          <p>Початок симтомів</p>   
            <v-text-field 
                v-model= pathDagnosis.symptoms_start_data
                prepend-icon ="event"
                label="Введіть дату РР-ММ"
            ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>


    <v-container>
      <v-layout>
        <v-flex xs12 md4>
          <p>Перші ПІД-асоційовані симтоми ( один або декілька з-поміж наступних)</p>
            <v-checkbox  
              v-model=" pathDagnosis.symptoms_start" 
              label="Інфекції"
              value="Інфекції"
              color="#1976d2" 
              clq
            ></v-checkbox>
            <v-checkbox  
              v-model=" pathDagnosis.symptoms_start" 
              label="Дисрегуляція імунної відповіді"
              value="Дисрегуляція імунної відповіді"
              color="#1976d2" 
            ></v-checkbox>
            <v-checkbox  
              v-model=" pathDagnosis.symptoms_start" 
              label="Малігнізація (онконастороженість)"
              value="Малігнізація (онконастороженість)"
              color="#1976d2" 
            ></v-checkbox>
            <v-checkbox  
              v-model=" pathDagnosis.symptoms_start" 
              label="Синдромальні маніфестації"
              value="Синдромальні маніфестації"
              color="#1976d2" 
            ></v-checkbox>
            <v-checkbox  
              v-model=" pathDagnosis.symptoms_start" 
              label="Перші симтоми невідомі"
              value="Перші симтоми невідомі"
              color="#1976d2" 
            ></v-checkbox>
            <v-checkbox  
              v-model=" pathDagnosis.symptoms_start" 
              label="Відсутність ПІД-асоційованих симтомів"
              value="Відсутність ПІД-асоційованих симтомів"
              color="#1976d2" 
            ></v-checkbox>
            <v-checkbox  
              v-model=" pathDagnosis.symptoms_start" 
              label="Інше,вказати"
              value="another"
              color="#1976d2" 
            ></v-checkbox>
            <v-text-field v-if="pathDagnosis.symptoms_start.includes('another')"
                v-model= pathDagnosis.symptoms_start_another 
                label="Введіть інформацію"
                prepend-icon ="create"
            ></v-text-field>
        </v-flex>

        <v-flex  md3>
          <p>Вкажіть наступні дані</p>   
            <v-text-field 
                v-model= pathDagnosis.IgG
                label="Рівень IgG(г/л)"
            ></v-text-field>
            <v-text-field 
                v-model= pathDagnosis.IgA
                label="Рівень IgA(г/л)"
            ></v-text-field>
            <v-text-field 
                v-model= pathDagnosis.IgM
                label="Рівень IgM(г/л)"
            ></v-text-field>
            <v-text-field 
                v-model= pathDagnosis.IgE
                label="Рівень IgE(мо/мл)"
            ></v-text-field>
        </v-flex>
                
      </v-layout>
    </v-container>

    <v-btn type="submit">Зберегти</v-btn>
  </v-form>
</template>


<script>
import style from './tab.css'
import axios from 'axios';
import EventBus from '@/event-bus';

export default {
    data(){
      return {
        pathDagnosis: {
          first_diagnostic_pid_dat: null,
          first_diagnostic_pid_data_time: null,
          pid_lab_only: null,
          pid_select: null,
          symptoms_start: [],
          symptoms_start_another: null,
          IgG: null,
          IgA: null,
          IgM: null,
          IgE: null
        },
        dataRules: [
          (v) => /^(\d{1,2})-(\d{1,2})-(\d{4})$/.test(v) || 'Введіть ДД-ММ-РР'
        ],
        items: ['Лімфопенія', 'Нейтропенія', 'Тромбоцитопенія', 'Анемія','Монцитопенія','Підвищений рівень IgE','Гіпогамаглобулінемія','Інше'],
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
        EventBus.$emit('completedForm', this.pathDagnosis);
      }
    }
    
}
</script>>

