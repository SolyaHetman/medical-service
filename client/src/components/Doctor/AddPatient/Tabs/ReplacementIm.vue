<template>
  <v-form ref="form"  @submit.prevent="savePatient">
    <v-container>
      <v-layout>

        <v-flex xs12 md4>
          <p>Чи отримує пацієнт на сьогоднішній день замісну імуноглобулінотерапію?</p>   
          <v-radio-group v-model="replacementImunoqlobulinTherary.rit_till_today" :mandatory="false">
            <v-radio color="#1976d2" label="Так" value="Так"></v-radio>
            <v-radio color="#1976d2" label="Ні" value="Ні"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
          </v-radio-group>
        </v-flex>
        <v-flex md3>
          <p>Дата введення:</p>   
          <v-radio-group v-model="replacementImunoqlobulinTherary.first_imunoqlobulin_injection_data" :mandatory="false">
            <v-radio color="#1976d2" label="Відомо" value="Відомо"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
            <v-text-field v-if="replacementImunoqlobulinTherary.first_imunoqlobulin_injection_data == 'Відомо'"
                v-model= replacementImunoqlobulinTherary.first_imunoqlobulin_injection_data_yes
                :rules="dataRules"
                label="Введіть дані"
                prepend-icon ="event"
            ></v-text-field>
          </v-radio-group>
        </v-flex>
        <v-flex md4>
          <p>Виробник імуноглобулінів, які отримує пацієнт:</p>   
          <v-radio-group v-model="replacementImunoqlobulinTherary.imunoqlobulin_producer" :mandatory="false">
            <v-radio color="#1976d2" label="Відомо" value="Відомо"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
            <v-text-field v-if="replacementImunoqlobulinTherary.imunoqlobulin_producer == 'Відомо'"
                v-model= replacementImunoqlobulinTherary.imunoqlobulin_producer_select
                label="Введіть"
                prepend-icon ="create"
            ></v-text-field>
          </v-radio-group>
        </v-flex>
    </v-layout>
    </v-container>   

    <v-container>
      <v-layout>
          <v-flex xs12 md4>
          <p>Актуальний шлях введення імуноглобуліну:</p>   
          <v-radio-group v-model="replacementImunoqlobulinTherary.actual_injection_way" :mandatory="false">
            <v-radio color="#1976d2" label="Довенно" value="Довенно"></v-radio>
            <v-radio color="#1976d2" label="Підшкірно" value="Підшкірно"></v-radio>
            <v-radio color="#1976d2" label="Дом`язово" value="Дом`язово"></v-radio>
          </v-radio-group>
          </v-flex>
          <v-flex md3>
          <p>Актуальне місце введення імуноглобуліну:</p>   
          <v-radio-group v-model="replacementImunoqlobulinTherary.actual_injection_location" :mandatory="false">
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
          <v-radio-group v-model="replacementImunoqlobulinTherary.dosa" :mandatory="false">
            <v-radio color="#1976d2" label="Відомо" value="Відомо"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
            <v-text-field v-if="replacementImunoqlobulinTherary.dosa == 'Відомо'"
                v-model= replacementImunoqlobulinTherary.do_yes
                label="Доза мг/кг ваги"
                prepend-icon ="create"
            ></v-text-field>
          </v-radio-group>
        </v-flex>
        <v-flex md3>
        <p>Рівень імуноглобулінів,перед введеням замісної імуноглобулінотерапії:</p>   
            <v-text-field 
                v-model= replacementImunoqlobulinTherary.IgG
                label="Введіть IgG "
                prepend-icon ="create"
            ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>   

      <v-container>
        <v-layout>
          <v-flex xs12 md4>
            <p>Інтервал між введенями</p>   
            <v-radio-group v-model="replacementImunoqlobulinTherary.injection_interval" :mandatory="false">
              <v-radio color="#1976d2" label="Так" value="Так"></v-radio>
              <v-radio color="#1976d2" label="Ні" value="Ні"></v-radio>
              <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
            </v-radio-group>
        </v-flex>
        <v-flex md3>
          <p>Актуальна вага:</p>   
          <v-radio-group v-model="replacementImunoqlobulinTherary.patient_weight" :mandatory="false">
            <v-radio color="#1976d2" label="Відомо" value="Відомо"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
            <v-text-field v-if="replacementImunoqlobulinTherary.patient_weight == 'Відомо'"
                v-model= replacementImunoqlobulinTherary.patient_weight_yes
                label="Введіть вагу кг"
            ></v-text-field>
          </v-radio-group>
        </v-flex>
        <v-flex xs12 md4>
            <p>Зафіксовані небажані явища</p>   
            <v-radio-group v-model="replacementImunoqlobulinTherary.recorded_phenomenal" :mandatory="false">
              <v-radio color="#1976d2" label="Так" value="Так"></v-radio>
              <v-radio color="#1976d2" label="Ні" value="Ні"></v-radio>
              <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
              <v-select v-if="replacementImunoqlobulinTherary.recorded_phenomenal == 'Так'"
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
     

    <v-btn type="submit">Зберегти</v-btn>
  </v-form>
</template>

<script>
import style from './tab.css'
import axios from 'axios'
export default {
    data(){
        return{
            replacementImunoqlobulinTherary:{
                rit_till_today: null, 
                first_imunoqlobulin_injection_data: null,
                first_imunoqlobulin_injection_data_yes: null,  
                imunoqlobulin_producer: null,
                IgG: null,
                imunoqlobulin_producer_select: null,   
                actual_injection_way: null,  
                actual_injection_location: null,  
                dosa: null, 
                injection_interval: null, 
                patient_weight: null,
                patient_weight_yes: null,  
                recorded_phenomenal: null,  
                recorded_phenomenal_select: null,
                recorded_phenomenal_select_enter: null,
            },
           items: ['1','2','3','4'], 
           others: ['Анафілаксія','Біль голови','Ниркова недостатність','Венозний тромбоз','Гарячка','Місцеві побічні явища','Асептичний менінгіт','Артеріальний тромбоз','Інше,вказати'],
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
        const url = 'http://localhost:3000/users';

        axios.post(url, this.replacementImunoqlobulinTherary)
          .then(res =>console.log('Saved2!!!'))
          .catch(err => console.log(err))
      }
    }
    
}
</script>