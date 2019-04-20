<template>
  <v-form v-model="valid" ref="form">
    <v-container>
      <v-layout>

        <v-flex md2 >
          <p><font color="#808080">Номер реєстрації</font></p>
          <v-text-field
            v-model="generalData.numberOfRegistry"
            :rules="nameRules"
            readonly
          ></v-text-field>
        </v-flex>

        <v-flex md2 >
          <p><font color="#808080">ПІБ</font></p>
          <v-text-field
            v-model="generalData.pib"
            :rules="nameRules"
            readonly
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">Дата народження</font></p>
          <v-text-field
            v-model="generalData.birthdate"
            prepend-icon ="event"
            readonly
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">Стать</font></p>
          <v-text-field
            v-model="generalData.Sex"
            readonly
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        <v-flex md2 >
          <p><font color="#808080">Країна та місто народження</font></p>
          <v-text-field
            v-model="generalData.Country"
            readonly
            prepend-icon ="place"
          ></v-text-field>
        </v-flex>

        <v-flex md3>
          <p><font color="#808080">Країна та місто теперішнього проживання</font></p>
          <v-text-field
            v-model="generalData.CountryN"
            readonly
            prepend-icon ="place"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
      
        <v-flex md2>
          <p><font color="#808080">Родинні зв'язки ПІД</font></p>
          <v-text-field
            v-model="generalData.FamilyTies"
            readonly
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">Спорідненість пацієнта</font></p>
          <v-text-field
            v-model="generalData.Affinity"
            readonly
          ></v-text-field>
        </v-flex>

        <v-flex md6>
          <p><font color="#808080">Генетично ускладнений сімейний анамнез первинних імунодефіцитів</font></p>
          <v-text-field
            v-model="generalData.numberESID"
            readonly
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
            readonly
            solo
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>

    <v-btn @click="submit">Зберегти</v-btn>
    <v-btn @click="edit">Редагувати</v-btn>

 </v-form>
</template>

<style scoped>
  .v-form>.container>.layout:only-child {
    margin: -20px;
}

</style>


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
          numberOfRegistry: "ТКМ18032000", 
          pib:              "Т.К.М.",
          birthdate:        "18-03-2000",
          Sex:              "Чоловік",
          Country:          "Білорусь, Мінськ",
          CountryN:         "Україна, Львів",
          FamilyTies:       "По чоловічій лінії",
          Agreement:        "Згода лише на науковий аналіз",
          Affinity:         "Невідомо",
          numberESID:       "Невідомо",
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
      edit(){
        this.generalData.push(this.edit);
      }
    }
  }
</script>