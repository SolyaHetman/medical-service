<template>
  <v-form ref="form"  @submit.prevent="savePatient">
    <v-container>
      <v-layout>
        <v-flex xs12 md4>
          <p>Чи отримує пацієнт на сьогоднішній день замісну імуноглобулінотерапію?</p>   
          <v-radio-group v-model="replacementImunoqlobulinTherary.RITTillToday" :mandatory="false">
            <v-radio color="#1976d2" label="Так" value="Так"></v-radio>
            <v-radio color="#1976d2" label="Ні" value="Ні"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
            <v-radio color="#1976d2" label="Нерегулярно" value="Нерегулярно"></v-radio>
          </v-radio-group>
        </v-flex>
        <v-flex md3 v-if="(replacementImunoqlobulinTherary.RITTillToday == 'Так') || (replacementImunoqlobulinTherary.RITTillToday == 'Нерегулярно')">
          <p>Кінцева дата введення замісної імуноглобулінотерапії:</p>   
          <v-radio-group v-model="replacementImunoqlobulinTherary.EndImunoglobulinInjectionDate" :mandatory="false">
            <v-radio color="#1976d2" label="Відомо" value="Відомо"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
            <v-text-field v-if="replacementImunoqlobulinTherary.EndImunoglobulinInjectionDate == 'Відомо'"
                v-model= replacementImunoqlobulinTherary.first_imunoqlobulin_injection_data_end_yes
                :rules="dataRules"
                label="Введіть дані"
                prepend-icon ="event"
            ></v-text-field>
          </v-radio-group>
        </v-flex>
        <v-flex md4 v-if="(replacementImunoqlobulinTherary.RITTillToday == 'Так') || (replacementImunoqlobulinTherary.RITTillToday == 'Нерегулярно')"> 
          <p>Виробник імуноглобулінів, які отримує пацієнт:</p>   
          <v-radio-group v-model="replacementImunoqlobulinTherary.ProducerYesNo" :mandatory="false">
            <v-radio color="#1976d2" label="Відомо" value="Відомо"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
            <v-select v-if="replacementImunoqlobulinTherary.ProducerYesNo == 'Відомо'"
                v-model="replacementImunoqlobulinTherary.ProducerName"
                :items="variety"
                attach
                label="Виберіть"
            ></v-select>
            <v-text-field v-if="replacementImunoqlobulinTherary.ProducerName == 'Інше,вказати'"
                v-model= replacementImunoqlobulinTherary.imunoqlobulin_producer_select_enter
                label="Введіть інформацію"
                prepend-icon ="create"
            ></v-text-field>
          </v-radio-group>
        </v-flex>
    </v-layout>
    </v-container>   

    <v-container v-if="(replacementImunoqlobulinTherary.RITTillToday == 'Так') || (replacementImunoqlobulinTherary.RITTillToday == 'Нерегулярно')">
      <v-layout>
          <v-flex xs12 md4>
          <p>Актуальний шлях введення імуноглобуліну:</p>   
          <v-radio-group v-model="replacementImunoqlobulinTherary.ActualInjectionType" :mandatory="false">
            <v-radio color="#1976d2" label="Довенно" value="Довенно"></v-radio>
            <v-radio color="#1976d2" label="Підшкірно" value="Підшкірно"></v-radio>
            <v-radio color="#1976d2" label="Дом`язово" value="Дом`язово"></v-radio>
          </v-radio-group>
          </v-flex>
          <v-flex md3>
          <p>Актуальне місце введення імуноглобуліну:</p>   
          <v-radio-group v-model="replacementImunoqlobulinTherary.ActualInjectionLocation" :mandatory="false">
            <v-radio color="#1976d2" label="Вдома" value="Вдома"></v-radio>
            <v-radio color="#1976d2" label="В лікарні" value="В лікарні"></v-radio>
            <v-radio color="#1976d2" label="Стаціонарно" value="Стаціонарно"></v-radio>
            <v-radio color="#1976d2" label="Амбулаторно" value="Амбулаторно"></v-radio>
            <v-radio color="#1976d2" label="Обидві локації" value="Обидві локації"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
          </v-radio-group>
        </v-flex>
        <v-flex md2>
          <p>Доза:</p>   
          <v-radio-group v-model="replacementImunoqlobulinTherary.Dose" :mandatory="false">
            <v-radio color="#1976d2" label="Відомо" value="Відомо"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
            <v-text-field v-if="replacementImunoqlobulinTherary.Dose == 'Відомо'"
                v-model= replacementImunoqlobulinTherary.DoseYes
                label="Доза мг/кг ваги"
                prepend-icon ="create"
            ></v-text-field>
          </v-radio-group>
        </v-flex>
        <v-flex md3>
        <p>Рівень імуноглобулінів,перед введеням замісної імуноглобулінотерапії:</p>   
            <v-text-field 
                v-model= replacementImunoqlobulinTherary.Igg
                label="Введіть IgG(г/л)"
                prepend-icon ="create"
            ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>   

      <v-container v-if="(replacementImunoqlobulinTherary.RITTillToday == 'Так') || (replacementImunoqlobulinTherary.RITTillToday == 'Нерегулярно')">
        <v-layout>
          <v-flex xs12 md4>
            <p>Інтервал між введенями:</p>   
            <v-radio-group v-model="replacementImunoqlobulinTherary.InjectionInterval" :mandatory="false">
              <v-radio color="#1976d2" label="Кожні 7 днів" value="Кожні 7 днів"></v-radio>
              <v-radio color="#1976d2" label="Кожні 14 днів" value="Кожні 14 днів"></v-radio>
              <v-radio color="#1976d2" label="Кожні 21 днів" value="Кожні 21 днів"></v-radio>
              <v-radio color="#1976d2" label="Кожні 28 днів" value="Кожні 28 днів"></v-radio>
              <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
              <v-radio color="#1976d2" label="Вказати" value="Вказати"></v-radio>
              <v-text-field v-if="replacementImunoqlobulinTherary.InjectionInterval == 'Вказати'"
                v-model= replacementImunoqlobulinTherary.injection_interval_other
                label="Інтервал"
                prepend-icon ="create"
              ></v-text-field>
            </v-radio-group>
        </v-flex>
        <v-flex md3>
          <p>Актуальна вага:</p>   
          <v-radio-group v-model="replacementImunoqlobulinTherary.PatientWeight" :mandatory="false">
            <v-radio color="#1976d2" label="Відомо" value="Відомо"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
            <v-text-field v-if="replacementImunoqlobulinTherary.PatientWeight == 'Відомо'"
                v-model= replacementImunoqlobulinTherary.PatientWeightYes
                label="Введіть вагу кг"
            ></v-text-field>
          </v-radio-group>
        </v-flex>
        <v-flex xs12 md4>
            <p>Зафіксовані небажані явища</p>   
            <v-radio-group v-model="replacementImunoqlobulinTherary.RecordedPhenomena" :mandatory="false">
              <v-radio color="#1976d2" label="Так" value="Так"></v-radio>
              <v-radio color="#1976d2" label="Ні" value="Ні"></v-radio>
              <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
              <v-select v-if="replacementImunoqlobulinTherary.RecordedPhenomena == 'Так'"
                v-model="replacementImunoqlobulinTherary.recorded_phenomenal_select"
                :items="others"
                attach
                label="Виберіть"
            ></v-select>
            <v-text-field v-if="replacementImunoqlobulinTherary.recorded_phenomenal_select == 'Інше,вказати'"
                v-model= replacementImunoqlobulinTherary.recorded_phenomenal_select_enter
                label="Введіть інформацію"
                prepend-icon ="create"
            ></v-text-field>
          </v-radio-group>
        </v-flex>
      </v-layout>
    </v-container>  
    <v-layout row>
      <v-flex xs12>
        <v-alert
          :value="alertShow"
          type="success"        
          color='#1976d2'
        >
          Дані збережено
        </v-alert>
      </v-flex>
    </v-layout>    
    <v-btn type="alertDisplay">Зберегти</v-btn>
    
  </v-form>
  
</template>

<script>
import style from './tab.css'
import axios from 'axios'
import EventBus from '@/event-bus'

export default {
    data(){
        return{
          alertShow:false, 
          replacementImunoqlobulinTherary2:[],
          replacementImunoqlobulinTherary:{
            RITTillToday: null, 
            EndImunoglobulinInjectionDate: null, 
            ProducerName: null,
            first_imunoqlobulin_injection_data_end_yes: null,
            ProducerYesNo: null,
            Igg: null,
            imunoqlobulin_producer_select: null,
            imunoqlobulin_producer_select_enter: null,   
            ActualInjectionType: null,  
            ActualInjectionLocation: null,  
            Dose: null, 
            DoseYes: null,
            InjectionInterval: null, 
            PatientWeight: null,
            PatientWeightYes: null,  
            RecordedPhenomena: null,  
            recorded_phenomenal_select: null,
            recorded_phenomenal_select_enter: null,
          },
           items: ['1','2','3','4'],
           variety: ['Октафарма', 'Біофарма', 'Інше,вказати' ], 
           others: ['Анафілаксія','Біль голови','Ниркова недостатність','Венозний тромбоз','Гарячка','Місцеві побічні явища','Асептичний менінгіт','Артеріальний тромбоз','Летальний випадок','Інше,вказати'],
           dataRules: [
                  (v) => /^(\d{1,2})-(\d{1,2})-(\d{4})$/.test(v) || 'Введіть ДД-ММ-РР'
                ], 
        }
    },
    methods: {

      submit () {
        this.$refs.form()
      },
      savePatient: function () {
        if (this.replacementImunoqlobulinTherary.EndImunoglobulinInjectionDate == 'Відомо') {
          this.replacementImunoqlobulinTherary.EndImunoglobulinInjectionDate = this.replacementImunoqlobulinTherary.first_imunoqlobulin_injection_data_end_yes;
        }
        if (this.replacementImunoqlobulinTherary.InjectionInterval == 'Вказати') {
           this.replacementImunoqlobulinTherary.InjectionInterval = this.replacementImunoqlobulinTherary.injection_interval_other;
        }
        if (this.replacementImunoqlobulinTherary.RecordedPhenomena == 'Так') {
           this.replacementImunoqlobulinTherary.RecordedPhenomena = this.replacementImunoqlobulinTherary.recorded_phenomenal_select;
        }
         if (this.replacementImunoqlobulinTherary.recorded_phenomenal_select == 'Інше,вказати') {
           this.replacementImunoqlobulinTherary.RecordedPhenomena = this.replacementImunoqlobulinTherary.recorded_phenomenal_select_enter;
        }
        if (this.replacementImunoqlobulinTherary.recorded_phenomenal_select == 'Інше,вказати') {
           this.replacementImunoqlobulinTherary.RecordedPhenomena = this.replacementImunoqlobulinTherary.recorded_phenomenal_select_enter;
        }
        if (this.replacementImunoqlobulinTherary.recorded_phenomenal_select == 'Інше,вказати') {
           this.replacementImunoqlobulinTherary.RecordedPhenomena = this.replacementImunoqlobulinTherary.recorded_phenomenal_select_enter;
        }

        delete this.replacementImunoqlobulinTherary.first_imunoqlobulin_injection_data_end_yes;
        delete this.replacementImunoqlobulinTherary.recorded_phenomenal_select;
        delete this.replacementImunoqlobulinTherary.recorded_phenomenal_select_enter;
        delete this.replacementImunoqlobulinTherary.injection_interval_other;

        this.replacementImunoqlobulinTherary2.push(this.replacementImunoqlobulinTherary);
        this.replacementImunoqlobulinTherary= {};

        let payload = {
           replacementImunoqlobulinTherary2: this.replacementImunoqlobulinTherary2
        };

        this.$swal({
    		  title: 'Чи бажаєте ви ввести ще дані про пацієнта?',
          showCancelButton: true,
          confirmButtonText: 'ТАК',
          cancelButtonText: 'НІ',
          showCloseButton: true,
          showLoaderOnConfirm: true,
        }).then((result) => {
          if(result.value) {
            
            EventBus.$emit('completedForm',payload,5);
            this.replacementImunoqlobulinTherary = {}
           
          } else {
            EventBus.$emit('postToDB',payload,5);
            this.alertShow = true;
            setTimeout(() => {
              this.alertShow = false;
            }, 3000)
          }
        })
        // EventBus.$emit('postToDB', this.replacementImunoqlobulinTherary,5);
      },
    }
    
}
</script>