<template>
  <v-form ref="form" @submit.prevent="savePatient">
    <v-container>
      <v-layout>

        <v-flex xs12 md4>
          <p>Дата вперше встановленого клінічного ПІД</p>   
          <v-radio-group v-model=" pathDagnosis.FirstDiagnosisPidDate" :mandatory="false">
            <v-radio color="#1976d2" label="Відомо" value="Відомо"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
            <v-text-field v-if="pathDagnosis.FirstDiagnosisPidDate == 'Відомо'"
                v-model= pathDagnosis.first_diagnostic_pid_data_time
                :rules="dataRules"
                prepend-icon ="event"
                label="Введіть дату"
            ></v-text-field>
          </v-radio-group>
        </v-flex>

        <v-flex md5>
          <p>Чи був встановлений діагноз ПІД без наявності ПІД-асоційованих симтомів і лише на підставі  лабораторних відхилень </p>   
          <v-radio-group v-model=" pathDagnosis.PidLabOnly" :mandatory="false">
            <v-radio color="#1976d2" label="Так" value="Так"></v-radio>
            <v-radio color="#1976d2" label="Ні" value="Ні"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
            <v-select v-if="pathDagnosis.PidLabOnly == 'Так'"
                v-model="pathDagnosis.pid_select"
                :items="items"
                attach
                label="Виберіть"
            ></v-select>
            <v-text-field v-if="(pathDagnosis.pid_select == 'Інше') & (pathDagnosis.PidLabOnly == 'Так')"
                v-model= pathDagnosis.pid_select_enter
                label="Введіть інформацію"
                clearable
            ></v-text-field>
          </v-radio-group>
        </v-flex>


      </v-layout>
    </v-container>


    <v-container>
      <v-layout>
        <v-flex xs12 md4>
          <p>Перші ПІД-асоційовані симтоми ( один або декілька з-поміж наступних)</p>
          <v-checkbox  
              v-model=" pathDagnosis.SymptomName" 
              label="Перші симтоми невідомі"
              value="Перші симтоми невідомі"
              color="#1976d2" 
            ></v-checkbox>
            <v-checkbox  
              v-model=" pathDagnosis.SymptomName" 
              label="Відсутність ПІД-асоційованих симтомів"
              value="Відсутність ПІД-асоційованих симтомів"
              color="#1976d2" 
            ></v-checkbox>
            <v-checkbox  
              v-model=" pathDagnosis.SymptomName" 
              label="Інфекції"
              value="Інфекції"
              color="#1976d2" 
              clq
            ></v-checkbox>
            <v-text-field v-if="pathDagnosis.SymptomName.includes('Інфекції')"
                v-model= pathDagnosis.infection
                :rules="dataRules"
                prepend-icon ="event"
                label="Введіть дату"
            ></v-text-field>
            <v-checkbox  
              v-model=" pathDagnosis.SymptomName" 
              label="Дисрегуляція імунної відповіді"
              value="Дисрегуляція імунної відповіді"
              color="#1976d2" 
            ></v-checkbox>
            <v-text-field v-if="pathDagnosis.SymptomName.includes('Дисрегуляція імунної відповіді')"
                v-model= pathDagnosis.dysregulation
                :rules="dataRules"
                prepend-icon ="event"
                label="Введіть дату"
            ></v-text-field>
            <v-checkbox  
              v-model=" pathDagnosis.SymptomName" 
              label="Малігнізація (онконастороженість)"
              value="Малігнізація (онконастороженість)"
              color="#1976d2" 
            ></v-checkbox>
            <v-text-field v-if="pathDagnosis.SymptomName.includes('Малігнізація (онконастороженість)')"
                v-model= pathDagnosis.malignancy
                :rules="dataRules"
                prepend-icon ="event"
                label="Введіть дату"
            ></v-text-field>
            <v-checkbox  
              v-model=" pathDagnosis.SymptomName" 
              label="Синдромальні маніфестації"
              value="Синдромальні маніфестації"
              color="#1976d2" 
            ></v-checkbox>
            <v-text-field v-if="pathDagnosis.SymptomName.includes('Синдромальні маніфестації')"
                v-model= pathDagnosis.manifestations
                :rules="dataRules"
                prepend-icon ="event"
                label="Введіть дату"
            ></v-text-field>
            <v-checkbox  
              v-model=" pathDagnosis.SymptomName" 
              label="Інше,вказати"
              value="another"
              color="#1976d2" 
            ></v-checkbox>
            <v-text-field v-if="pathDagnosis.SymptomName.includes('another')"
                v-model= pathDagnosis.symptoms_start_another
                label="Введіть інформацію"
                prepend-icon ="create"
            ></v-text-field>
            <v-text-field v-if="pathDagnosis.SymptomName.includes('another')"
                v-model= pathDagnosis.symptoms_start_another_data
                :rules="dataRules"
                prepend-icon ="event"
                label="Введіть дату"
            ></v-text-field>
        </v-flex>
        <v-flex  md3>
          <p>Вкажіть наступні дані</p>   
            <v-text-field 
                v-model= pathDagnosis.Igg
                label="Рівень IgG(г/л)"
            ></v-text-field>
            <v-text-field 
                v-model= pathDagnosis.Iga
                label="Рівень IgA(г/л)"
            ></v-text-field>
            <v-text-field 
                v-model= pathDagnosis.Igm
                label="Рівень IgM(г/л)"
            ></v-text-field>
            <v-text-field 
                v-model= pathDagnosis.Ige
                label="Рівень IgE(мо/мл)"
            ></v-text-field>
        </v-flex>
                
      </v-layout>
    </v-container>

    <v-btn type="submit">Далі</v-btn>
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
          FirstDiagnosisPidDate: null,
          first_diagnostic_pid_data_time: null,
          PidLabOnly: null,
          pid_select: null,
          SymptomName: [],
          infection: null,
          dysregulation: null,
          malignancy: null,
          manifestations: null,
          symptoms_start_another_data: null,
          Igg: null,
          Iga: null,
          Igm: null,
          Ige: null,
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
        if (this.pathDagnosis.first_diagnostic_pid_data == 'Відомо') {
          this.pathDagnosis.first_diagnostic_pid_data = this.pathDagnosis.first_diagnostic_pid_data_time;
        }

        if (this.pathDagnosis.SymptomName.includes('another')) {
          this.pathDagnosis.SymptomName.push(this.pathDagnosis.symptoms_start_another);
        }
        if (this.pathDagnosis.FirstDiagnosisPidDate == 'Відомо') {
          this.pathDagnosis.FirstDiagnosisPidDate = this.pathDagnosis.first_diagnostic_pid_data_time;
        }
        if (this.pathDagnosis.PidLabOnly == 'Так') {
          this.pathDagnosis.PidLabOnly = this.pathDagnosis.pid_select;
        }
        if (this.pathDagnosis.PidLabOnly == 'Інше'){
          this.pathDagnosis.PidLabOnly = this.pathDagnosis.pid_select_enter;
        }
        // if (this.pathDagnosis.pid_lab_only == 'Так') {
        //   this.pathDagnosis.pid_lab_only = this.pathDagnosis.pid_select;
        //   if(this.pathDagnosis.pid_select == 'Інше' & this.pathDagnosis.pid_lab_only == 'Так'){
        //   this.pathDagnosis.pid_select = this.this.pathDagnosis.pid_select
        //   }
        // }
        EventBus.$emit('completedForm', this.pathDagnosis,2);
      }
    }
    
}
</script>>

