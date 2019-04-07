<template>
  <v-form ref="form">
    <v-container>
      <v-layout>

        <v-flex xs12 md4>
          <p>Дата вперше встановленого клінічного діагнозу первинного імунодефіцину</p>   
          <v-radio-group v-model=" pathDagnosis.first_diagnostic_pid_data" :mandatory="false">
            <v-radio label="відомо" value="yes"></v-radio>
            <v-radio label="невідомо" value="no"></v-radio>
            <v-radio label="є лише генетичний анамнез" value="anamnesis"></v-radio>
            <v-text-field v-if="pathDagnosis.first_diagnostic_pid_data == 'yes'"
                v-model= pathDagnosis.first_diagnostic_pid_data_time
                label="Введіть дату"
            ></v-text-field>
          </v-radio-group>
        </v-flex>

        <v-flex md5>
          <p>Чи був встановлений діагноз ПІД без наявності ПІД-асоційованих симтомів і лише напідставі  лабораторних відхилень </p>   
          <v-radio-group v-model=" pathDagnosis.pid_lab_only" :mandatory="false">
            <v-radio label="так" value="yes"></v-radio>
            <v-radio label="ні" value="no"></v-radio>
            <v-radio label="невідомо" value="unknown"></v-radio>
            <v-select v-if="pathDagnosis.pid_lab_only == 'yes'"
                :items="items"
                attach
                label="Виберіть"
            ></v-select>

            
          </v-radio-group>
        </v-flex>



      
      </v-layout>
    </v-container>

    <v-btn @click="submit">Зберегти</v-btn>
  </v-form>
</template>

<<script>
export default {
    data(){
        return{
            pathDagnosis:{
                first_diagnostic_pid_dat: null,
                first_diagnostic_pid_data_time: null,
                pid_lab_only: null,
            },
            items: ['Лімфопенія', 'Нейтропенія', 'Тромбоцитопенія', 'Анемія','Монцитопенія','Підвищений рівень IgE','Гіпогамаглобулінемія'],
        }
    },
    methods: {
      submit () {
        this.$refs.form()
      },
    }
    
}
</script>>