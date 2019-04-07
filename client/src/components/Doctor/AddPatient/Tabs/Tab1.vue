<template>
  <v-form v-model="valid" ref="form">
    <v-container>
      <v-layout>

        <v-flex xs12 md4 >
          <v-text-field
            v-model="generalData.lastname"
            :rules="nameRules"
            :counter="20"
            label="Прізвище"
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs12 md4>
          <v-text-field
            v-model="generalData.firstname"
            :rules="nameRules"
            :counter="20"
            label="Ім'я"
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs12 md4>
          <v-text-field
            v-model="generalData.middlename"
            :rules="nameRules"
            :counter="20"
            label="Побатькові"
            required
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        <v-flex md4>
          <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
          >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              label="Дата народження"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            ref="picker"
            v-model="date"
            :max="new Date().toISOString().substr(0, 10)"
            min="1950-01-01"
            @change="save"
          ></v-date-picker>
        </v-menu>
        </v-flex>

        <v-flex md4>
          <v-select
            :items="items"
            attach
            label="Країна народження"
          ></v-select>
        </v-flex>

        <v-flex md4>
          <v-select
            :items="items"
            attach
            label="Країна теперішнього проживання"
          ></v-select>
        </v-flex>

      </v-layout>
    </v-container>
 

    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md4>
          <p>Стать</p>
          <v-radio-group v-model="generalData.radioSex" :mandatory="false">
            <v-radio label="жіноча" value="female"></v-radio>
            <v-radio label="чоловіча" value="male"></v-radio>
          </v-radio-group>
        </v-flex>

        <v-flex xs12 md4>
          <p>Згода пацієнта на використання особистої інформації</p>   
          <v-radio-group v-model="generalData.radiosAgreement" :mandatory="false">
            <v-radio label="цілковита" value="complete"></v-radio>
            <v-radio label="згода лише на науковий аналіз" value="onlyresearch"></v-radio>
            <v-radio label="не застосовується" value="notallow"></v-radio>
          </v-radio-group>
        </v-flex>

        <v-flex xs12 md4>
          <p>Родинні зв'язки ПІД</p>   
          <v-radio-group v-model="generalData.radiosFamilyTies" :mandatory="false">
            <v-radio label="По чоловічій лінії" value="yes2"></v-radio>
            <v-radio label="По жіночій лінії" value="no2"></v-radio>
            <v-radio label="невідомо" value="unknown2"></v-radio>
          </v-radio-group>
        </v-flex>

        <v-flex xs12 md4>
          <p>Спорідненість пацієнта</p>   
          <v-radio-group v-model="generalData.radiosAffinity" :mandatory="false">
            <v-radio label="так" value="yes1"></v-radio>
            <v-radio label="ні" value="no1"></v-radio>
            <v-radio label="невідомо" value="unknown1"></v-radio>
            <v-radio label="можливо" value="maybe"></v-radio>
          </v-radio-group>
        </v-flex>

        <v-flex xs12 md4>
          <p>Генетично ускладнений сімейний анамнез первинних імунодифецитів</p>   
          <v-radio-group v-model="generalData.radioYesNo" :mandatory="false">
            <v-radio label="так" value="yes"></v-radio>
            <v-radio label="ні" value="no"></v-radio>
            <v-radio label="невідомо" value="unknown"></v-radio>
          </v-radio-group>
        </v-flex>

        <v-flex md4 v-if="generalData.radioYesNo == 'yes'">
          <v-text-field
            v-model= generalData.numberESID
            label="Номер ESID"
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>

    <v-btn @click="submit">Зберегти</v-btn>
  </v-form>
</template>


<script>
  export default {
    data () {
      return {
        valid: false,
        menu: null,
        date: null,
        nameRules: [
          (v) => !!v || 'Name is required',
          (v) => v && v.length <= 20 || 'Name must be less than 20 characters'
        ],
        items: ['Львів', 'Київ', 'Вінниця', 'Рівне'],
        generalData: {
          firstname: null,
          lastname: null,
          middlename: null,
          radioSex: null,
          radioYesNo: null,
          radiosAgreement: null,
          radiosFamilyTies:null,
          radiosAffinity: null,
          numberESID:null,
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
    watch: {
        menu (val) {
          val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
        }
     }
  }
</script>




