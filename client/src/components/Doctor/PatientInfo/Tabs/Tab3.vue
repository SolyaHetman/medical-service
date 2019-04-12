<template>
  <v-form v-model="valid" ref="form">
    <v-container>
      <v-layout>

        <v-flex md4>
          <p><font color="#808080">Уражені гени</font></p>
          <v-text-field
            v-model="pidDiagnosis.damage_genes"
          ></v-text-field>
        </v-flex>

        <v-flex md2 >
          <p>
            <font color="#808080">
              Дата генетичного дослідження
            </font>
          </p>
          <v-text-field
            v-model="pidDiagnosis.genetic_research_data"
          ></v-text-field>
        </v-flex>
        <v-flex md3>
          <p><font color="#808080">Метод секвенціонування</font></p>
          <v-text-field
            v-model="pidDiagnosis.sequencing_method"
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        <v-flex md2>
          <p><font color="#808080">Лабораторія,яка проводила генетичні дослідження</font></p>
          <v-text-field
            v-model="pidDiagnosis.research_lab"
          ></v-text-field>
        </v-flex>
        <v-flex md2>
          <p>
            <font color="#808080">
             <br/> Причина генетичного дослідження
            </font>
          </p>
          <v-text-field
            v-model="pidDiagnosis.genetic_research_reason"
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
        pidDiagnosis: {
          damage_genes: "Генетичне дослідження проводилось,мутацій не виявлено",
          genetic_research_data: "12-03-2006",
          sequencing_method: "Секвенціонування гена",
          symptoms_start_data: "10-02-2006",
          research_lab: "1",
          genetic_research_reason: "Невідомо",
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

