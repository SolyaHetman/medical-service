<template>
  <v-form ref="form">
    <v-container>
      <v-layout>

        <v-flex xs12 md4>
          <p>Чи отримує пацієнт на сьогоднішній день замісну імуноглобулінотерапію?</p>   
          <v-radio-group v-model="replacementImunoqlobulinTherary.rit_till_today" :mandatory="false">
            <v-radio color="#1976d2" label="Так" value="yes"></v-radio>
            <v-radio color="#1976d2" label="Ні" value="no"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="unknown"></v-radio>
          </v-radio-group>
        </v-flex>
        <v-flex md3>
          <p>Дата першого введення:</p>   
          <v-radio-group v-model="replacementImunoqlobulinTherary.first_imunoqlobulin_injection_data" :mandatory="false">
            <v-radio color="#1976d2" label="Відомо" value="known"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="unknown"></v-radio>
            <v-text-field v-if="replacementImunoqlobulinTherary.first_imunoqlobulin_injection_data == 'known'"
                v-model= replacementImunoqlobulinTherary.first_imunoqlobulin_injection_data_yes
                label="Введіть дані"
            ></v-text-field>
          </v-radio-group>
        </v-flex>
        <v-flex md4>
          <p>Виробник імуноглобулінів, які отримує пацієнт:</p>   
          <v-radio-group v-model="replacementImunoqlobulinTherary.imunoqlobulin_producer" :mandatory="false">
            <v-radio color="#1976d2" label="Відомо" value="known"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="unknown"></v-radio>
            <v-select v-if="replacementImunoqlobulinTherary.imunoqlobulin_producer == 'known'"
                v-model= replacementImunoqlobulinTherary.imunoqlobulin_producer_select
                label="Виберіть"
                :items="items"
                attach
            ></v-select>
          </v-radio-group>
        </v-flex>
    </v-layout>
    </v-container>   

    <v-container>
      <v-layout>
          <v-flex xs12 md4>
          <p>Актуальний шлях введення імуноглобуліну:</p>   
          <v-radio-group v-model="replacementImunoqlobulinTherary.actual_injection_way" :mandatory="false">
            <v-radio color="#1976d2" label="Довенно" value="dovena"></v-radio>
            <v-radio color="#1976d2" label="Підшкірно" value="subcutaneous"></v-radio>
            <v-radio color="#1976d2" label="Дом`язово" value="domuscle"></v-radio>
          </v-radio-group>
          </v-flex>
          <v-flex md4>
          <p>Актуальний шлях введення імуноглобуліну:</p>   
          <v-radio-group v-model="replacementImunoqlobulinTherary.actual_injection_location" :mandatory="false">
            <v-radio color="#1976d2" label="Вдома" value="at_home"></v-radio>
            <v-radio color="#1976d2" label="В лікарні" value="at_hospital"></v-radio>
            <v-radio color="#1976d2" label="Стаціонарно" value="stationary"></v-radio>
            <v-radio color="#1976d2" label="Амбулаторно" value="ambulatoty"></v-radio>
            <v-radio color="#1976d2" label="Обидві локації" value="both_locations"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="unknown"></v-radio>
          </v-radio-group>
        </v-flex>
        <v-flex md3>
          <p>Доза:</p>   
          <v-radio-group v-model="replacementImunoqlobulinTherary.dosa" :mandatory="false">
            <v-radio color="#1976d2" label="Відомо" value="known"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="unknown"></v-radio>
            <v-text-field v-if="replacementImunoqlobulinTherary.dosa == 'known'"
                v-model= replacementImunoqlobulinTherary.do_yes
                label="Введіть дозу мг/кг ваги"
            ></v-text-field>
          </v-radio-group>
        </v-flex>
      </v-layout>
    </v-container>   

      <v-container>
        <v-layout>
          <v-flex xs12 md4>
            <p>Інтервал між введенями</p>   
            <v-radio-group v-model="replacementImunoqlobulinTherary.injection_interval" :mandatory="false">
              <v-radio color="#1976d2" label="Так" value="yes"></v-radio>
              <v-radio color="#1976d2" label="Ні" value="no"></v-radio>
              <v-radio color="#1976d2" label="Невідомо" value="unknown"></v-radio>
            </v-radio-group>
        </v-flex>
        <v-flex md3>
          <p>Актуальна вага:</p>   
          <v-radio-group v-model="replacementImunoqlobulinTherary.patient_weight" :mandatory="false">
            <v-radio color="#1976d2" label="Відомо" value="known"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="unknown"></v-radio>
            <v-text-field v-if="replacementImunoqlobulinTherary.patient_weight == 'known'"
                v-model= replacementImunoqlobulinTherary.patient_weight_yes
                label="Введіть вагу кг"
            ></v-text-field>
          </v-radio-group>
        </v-flex>
        <v-flex xs12 md4>
            <p>Зафіксовані небажані явища</p>   
            <v-radio-group v-model="replacementImunoqlobulinTherary.recorded_phenomenal" :mandatory="false">
              <v-radio color="#1976d2" label="Так" value="yes"></v-radio>
              <v-radio color="#1976d2" label="Ні" value="no"></v-radio>
              <v-radio color="#1976d2" label="Невідомо" value="unknown"></v-radio>
              <v-select v-if="replacementImunoqlobulinTherary.recorded_phenomenal == 'yes'"
                v-model="replacementImunoqlobulinTherary.recorded_phenomenal_select"
                :items="others"
                attach
                label="Виберіть"
            ></v-select>
            <v-text-field v-if="replacementImunoqlobulinTherary.recorded_phenomenal_select == 'Інше,вказати'"
                v-model= replacementImunoqlobulinTherary.recorded_phenomenal_select_enter
                label="Введіть інформацію"
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
            replacementImunoqlobulinTherary:{
                rit_till_today: null, 
                first_imunoqlobulin_injection_data: null,
                first_imunoqlobulin_injection_data_yes: null,  
                imunoqlobulin_producer: null,
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
        }
    },
    methods: {
      submit () {
        this.$refs.form()
      },
    }
    
}
</script>