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
                v-on:keyup="keyUp1"
                :color="overDefault"
            ></v-text-field>
            <small v-if="overDefault == 'error' && pathDagnosis.Igg" :color="overDefault" style="color:red">Відхилено від норми</small>
            <v-text-field 
                v-model= pathDagnosis.Iga
                label="Рівень IgA(г/л)"
                v-on:keyup="keyUp2"              
                :color="overDefault1"
            ></v-text-field>
            <small v-if="overDefault1 == 'error' && pathDagnosis.Iga" :color="overDefault1" style="color:red">Відхилено від норми</small>
            <v-text-field 
                v-model= pathDagnosis.Igm
                label="Рівень IgM(г/л)"
                v-on:keyup="keyUp3"
                :color="overDefault2"
            ></v-text-field>
            <small v-if="overDefault2 == 'error' && pathDagnosis.Igm" :color="overDefault2" style="color:red">Відхилено від норми</small>
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
  props: {
    birthday: {
      type: String
    }
  },
    data(){
      return {
        result:{},
        testBirthday: null,
        overDefault: 'error',
        overDefault1: 'error',
        overDefault2: 'error',
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
        oneToFive: {
          iggLow: 3.5,
          iggHigh: 12.4,
          igmLow: 0.43,
          igmHigh: 2.1,
          igaLow: 0.15,
          igaHigh: 1.6,
        },
        sixToTen: {
          iggLow: 6,
          iggHigh: 15.7,
          igmLow: 0.5,
          igmHigh: 2.4,
          igaLow: 0.3,
          igaHigh: 2.3,
        },
        older:{
          iggLow: 6.4,
          iggHigh: 13.5,
          igmLow: 0.56,
          igmHigh: 3.5,
          igaLow: 0.7,
          igaHigh: 3.1,
        }
      }
    },
    watch: {
      birthday: function () {
        let correct_date = this.birthday.slice(6,11) + "-" + this.birthday.slice(3, 5) + '-' + this.birthday.slice(0,2)
        let birthday = new Date (correct_date);
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs);
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);
        this.testBirthday = age;
      }
    },
    methods: {
      keyUp1() {
        if (this.testBirthday >= 1 && this.testBirthday <= 5) {
          if (this.pathDagnosis.Igg < this.oneToFive.iggLow || this.pathDagnosis.Igg > this.oneToFive.iggHigh) {
            this.overDefault = 'error';
          } else {
            this.overDefault = 'success';
          }
        } else if (this.testBirthday >= 11){
           if (this.pathDagnosis.Igg < this.older.iggLow || this.pathDagnosis.Igg > this.older.iggHigh) {
            this.overDefault = 'error';
          } else {
            this.overDefault = 'success';
          }
        }else if (this.testBirthday >= 6 && this.testBirthday <= 10){
           if (this.pathDagnosis.Igg < this.sixToTen.iggLow || this.pathDagnosis.Igg > this.sixToTen.iggHigh) {
            this.overDefault = 'error';
          } else {
            this.overDefault = 'success';
          }
        }
      },
      keyUp2(){
         if (this.testBirthday >= 1 && this.testBirthday <= 5) {
          if (this.pathDagnosis.Iga < this.oneToFive.igaLow || this.pathDagnosis.Iga > this.oneToFive.igaHigh) {
            this.overDefault1 = 'error';
          } else {
            this.overDefault1 = 'success';
          }
        }else if (this.testBirthday >= 11){
           if (this.pathDagnosis.Iga < this.older.igaLow || this.pathDagnosis.Iga > this.older.igaHigh) {
            this.overDefault1 = 'error';
          } else {
            this.overDefault1 = 'success';
          }
        }
        else if (this.testBirthday >= 6 && this.testBirthday <= 10){
           if (this.pathDagnosis.Iga < this.sixToTen.igaLow || this.pathDagnosis.Iga > this.sixToTen.igaHigh) {
            this.overDefault = 'error';
          } else {
            this.overDefault = 'success';
          }
        }  
      },
      keyUp3(){
         if (this.testBirthday >= 1 && this.testBirthday <= 5) {
          if (this.pathDagnosis.Igm < this.oneToFive.igmLow || this.pathDagnosis.Igm > this.oneToFive.igmHigh) {
            this.overDefault2 = 'error';
          } else {
            this.overDefault2 = 'success';
          }
        }else if (this.testBirthday >= 11){
           if (this.pathDagnosis.Igm < this.older.igmLow || this.pathDagnosis.Igm > this.older.igmHigh) {
            this.overDefault2 = 'error';
          } else {
            this.overDefault2 = 'success';
          }
        }
        else if (this.testBirthday >= 6 && this.testBirthday <= 10){
           if (this.pathDagnosis.Igm < this.sixToTen.igmLow || this.pathDagnosis.Igm > this.sixToTen.igmHigh) {
            this.overDefault = 'error';
          } else {
            this.overDefault = 'success';
          }
        } 
      },
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
        delete this.pathDagnosis.symptoms_start_another;
        delete this.pathDagnosis.first_diagnostic_pid_data_time;
        delete this.pathDagnosis.pid_select;
        delete this.pathDagnosis.pid_select_enter;
        this.$delete(this.pathDagnosis, 'first_diagnostic_pid_data_time')    
        EventBus.$emit('completedForm', this.pathDagnosis, 2);
      }
    }
    
}
</script>>

