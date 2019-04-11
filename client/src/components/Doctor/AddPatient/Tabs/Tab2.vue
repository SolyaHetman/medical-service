<template>
  <v-form ref="form">
    <v-container>
      <v-layout>

        <v-flex xs12 md4>
          <p>Дата вперше встановленого клінічного діагнозу первинного імунодефіцину</p>   
          <v-radio-group v-model=" pathDagnosis.first_diagnostic_pid_data" :mandatory="false">
            <v-radio color="#1976d2" label="відомо" value="yes"></v-radio>
            <v-radio color="#1976d2" label="невідомо" value="no"></v-radio>
            <v-radio color="#1976d2" label="є лише генетичний анамнез" value="anamnesis"></v-radio>
            <v-text-field v-if="pathDagnosis.first_diagnostic_pid_data == 'yes'"
                v-model= pathDagnosis.first_diagnostic_pid_data_time
                :rules="dataRules"
                label="Введіть дату"
            ></v-text-field>
          </v-radio-group>
        </v-flex>

        <v-flex md5>
          <p>Чи був встановлений діагноз ПІД без наявності ПІД-асоційованих симтомів і лише напідставі  лабораторних відхилень </p>   
          <v-radio-group v-model=" pathDagnosis.pid_lab_only" :mandatory="false">
            <v-radio color="#1976d2" label="так" value="yes"></v-radio>
            <v-radio color="#1976d2" label="ні" value="no"></v-radio>
            <v-radio color="#1976d2" label="невідомо" value="unknown"></v-radio>
            <v-select v-if="pathDagnosis.pid_lab_only == 'yes'"
                v-model="pathDagnosis.pid_select"
                :items="items"
                attach
                label="Виберіть"
            ></v-select>
            <v-text-field v-if="(pathDagnosis.pid_select == 'Інше') & (pathDagnosis.pid_lab_only == 'yes')"
                v-model= pathDagnosis.pid_select_enter
                label="Введіть інформацію"
                clearable
            ></v-text-field>
          </v-radio-group>
        </v-flex>

        <v-flex  md2>
          <p>Початок симтомів</p>   
            <v-text-field 
                v-model= pathDagnosis.symptoms_start_data
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
              value="infection"
              color="#1976d2" 
              clq
            ></v-checkbox>
            <v-checkbox  
              v-model=" pathDagnosis.symptoms_start" 
              label="Дисрегуляція імунної відповіді"
              value="immune_response"
              color="#1976d2" 
            ></v-checkbox>
            <v-checkbox  
              v-model=" pathDagnosis.symptoms_start" 
              label="Малігнізація (онконастороженість)"
              value="onconsumption"
              color="#1976d2" 
            ></v-checkbox>
            <v-checkbox  
              v-model=" pathDagnosis.symptoms_start" 
              label="Синдромальні маніфестації"
              value="syndromal_manifestations"
              color="#1976d2" 
            ></v-checkbox>
            <v-checkbox  
              v-model=" pathDagnosis.symptoms_start" 
              label="Перші симтоми невідомі"
              value="no_first_symptoms"
              color="#1976d2" 
            ></v-checkbox>
            <v-checkbox  
              v-model=" pathDagnosis.symptoms_start" 
              label="Відсутність ПІД-асоційованих симтомів"
              value="no_pid_symptoms"
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
            ></v-text-field>
        </v-flex>

        <v-flex  md3>
          <p>Вкажіть наступні дані</p>   
            <v-text-field 
                v-model= pathDagnosis.IgG
                label="Рівень IgG"
            ></v-text-field>
            <v-text-field 
                v-model= pathDagnosis.IgA
                label="Рівень IgA"
            ></v-text-field>
            <v-text-field 
                v-model= pathDagnosis.IgM
                label="Рівень IgM"
            ></v-text-field>
        </v-flex>
                
      </v-layout>
    </v-container>


  


    <v-btn @click="submit">Зберегти</v-btn>
  </v-form>
</template>

<style scoped>


</style>

<script>
export default {
    data(){
        return{
            pathDagnosis:{
                first_diagnostic_pid_dat: null,
                first_diagnostic_pid_data_time: null,
                pid_lab_only: null,
                pid_select: null,
                symptoms_start: [],
                symptoms_start_another: null,
                IgG: null,
                IgA: null,
                IgM: null,
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
    }
    
}
</script>>

