<template>
  <v-form v-model="valid" ref="form">
    <v-container>
      <v-layout>

        <v-flex md2 >
          <p><font color="#808080">Ім'я</font></p>
          <v-text-field
            v-model="generalData.lastname"
            :rules="nameRules"
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">Прізвище</font></p>
          <v-text-field
            v-model="generalData.firstname"
            :rules="nameRules"
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">Побатькові</font></p>
          <v-text-field
            v-model="generalData.middlename"
            :rules="nameRules"
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">Дата народження</font></p>
          <v-text-field
            v-model="generalData.birthdate"
            prepend-icon ="event"
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">Стать</font></p>
          <v-text-field
            v-model="generalData.Sex"
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        <v-flex md2 >
          <p><font color="#808080">Країна народження</font></p>
          <v-text-field
            v-model="generalData.Country"
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">Країна теперішнього проживання</font></p>
          <v-text-field
            v-model="generalData.CountryN"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
      <v-flex md3>
          <p><font color="#808080">Згода пацієнта на використання особистої інформації</font></p>
          <v-text-field
            v-model="generalData.Agreement"
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">Родинні зв'язки ПІД</font></p>
          <v-text-field
            v-model="generalData.FamilyTies"
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">Спорідненість пацієнта</font></p>
          <v-text-field
            v-model="generalData.Affinity"
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        <v-flex md4>
          <p><font color="#808080">Генетично ускладнений сімейний анамнез первинних імунодефіцитів</font></p>
          <v-text-field
            v-model="generalData.numberESID"
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
        date: null,
        nameRules: [
          (v) => !!v || 'Name is required',
          (v) => v && v.length <= 20 || 'Name must be less than 20 characters'
        ],
        generalData: {
          firstname:  "Тарас",
          lastname:   "Кулаков",
          middlename: "Миколайович",
          birthdate:  "18-03-2000",
          Sex:        "Чоловік",
     	    Country:    "Білорусь",
     	    CountryN:   "Україна",
          FamilyTies: "По чоловічій лінії",
          Agreement:  "Згода лише на науковий аналіз",
          Affinity:   "Невідомо",
          numberESID: "Невідомо",
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

