<template>
  <v-form v-model="valid" ref="form">
    <v-container>
      <v-layout>

        <v-flex md2 >
          <p><font color="#808080">Дата вперше встановленого клінічного діагнозу первинного імунодефіцину</font></p>
          <v-text-field
            v-model="pathDiagnosis.first_diagnostic_pid_dat"
          ></v-text-field>
        </v-flex>

        <v-flex md4 >
          <p>
          	<font color="#808080">
          		Чи був встановлений діагноз ПІД без наявності ПІД-асоційованих симтомів і лише напідставі лабораторних відхилень
          	</font>
          </p>
          <v-text-field
            v-model="pathDiagnosis.pid_lab_only"
          ></v-text-field>
        </v-flex>
        <v-flex md3>
          <p><font color="#808080"><br/>Перші ПІД-асоційовані симтоми</font></p>
          <v-text-field
            v-model="pathDiagnosis.symptoms_start"
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
      	<v-flex md2>
          <p><font color="#808080">Початок симтомів</font></p>
          <v-text-field
            v-model="pathDiagnosis.symptoms_start_data"
          ></v-text-field>
        </v-flex>
        <v-flex md2>
          <p>
          	<font color="#808080">
          		IgG
          	</font>
          </p>
          <v-text-field
            v-model="pathDiagnosis.IgG"
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">IgA</font></p>
          <v-text-field
            v-model="pathDiagnosis.IgA"
          ></v-text-field>
        </v-flex>
        <v-flex md2>
          <p><font color="#808080">IgM</font></p>
          <v-text-field
            v-model="pathDiagnosis.IgM"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
    <v-btn @click="submit">Зберегти</v-btn>
    <v-btn @click="cancel" to="/dashboard">Скасувати</v-btn>
 </v-form>
</template>

<script>
  export default {
    data () {
      return {
        valid: false,
        pathDiagnosis: {
          first_diagnostic_pid_dat: "15-03-2005",
          pid_lab_only: "Так, встановлено лімфопенію",
          symptoms_start: "Інфекції, дисрегуляція іммуної відповіді",
          symptoms_start_data: "27-03-2005",
          IgG: "9.2 г/л",
          IgA: "2 г/л",
          IgM: "1.4 г/л",
        } 
      }
    },
    methods: {
      submit () {
        this.$refs.form.validate()
      },
      save (date) {
        this.$refs.menu.save(date)
      },
    },
  }
</script>

