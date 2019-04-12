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
            <v-text-field
              v-model="date"
              label="Дата народження"
              :rules="dataRules"
              prepend-icon ="event"
            ></v-text-field>
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
            <v-radio color="#1976d2" label="жіноча" value="female"></v-radio>
            <v-radio color="#1976d2" label="чоловіча" value="male"></v-radio>
          </v-radio-group>
        </v-flex>

        <v-flex xs12 md4>
          <p>Згода пацієнта на використання особистої інформації</p>   
          <v-radio-group v-model="generalData.radiosAgreement" :mandatory="false">
            <v-radio color="#1976d2" label="цілковита" value="complete"></v-radio>
            <v-radio color="#1976d2" label="згода лише на науковий аналіз" value="onlyresearch"></v-radio>
            <v-radio color="#1976d2" label="не застосовується" value="notallow"></v-radio>
          </v-radio-group>
        </v-flex>

        <v-flex xs12 md4>
          <p>Родинні зв'язки ПІД</p>   
          <v-radio-group v-model="generalData.radiosFamilyTies" :mandatory="false">
            <v-radio color="#1976d2" label="По чоловічій лінії" value="yes2"></v-radio>
            <v-radio color="#1976d2" label="По жіночій лінії" value="no2"></v-radio>
            <v-radio color="#1976d2" label="невідомо" value="unknown2"></v-radio>
          </v-radio-group>
        </v-flex>

        <v-flex xs12 md4>
          <p>Спорідненість пацієнта</p>   
          <v-radio-group v-model="generalData.radiosAffinity" :mandatory="false">
            <v-radio color="#1976d2" label="так" value="yes1"></v-radio>
            <v-radio color="#1976d2" label="ні" value="no1"></v-radio>
            <v-radio color="#1976d2" label="невідомо" value="unknown1"></v-radio>
            <v-radio color="#1976d2" label="можливо" value="maybe"></v-radio>
          </v-radio-group>
        </v-flex>

        <v-flex xs12 md4>
          <p>Генетично ускладнений сімейний анамнез первинних імунодифецитів</p>   
          <v-radio-group v-model="generalData.radioYesNo" :mandatory="false">
            <v-radio color="#1976d2" label="так" value="yes"></v-radio>
            <v-radio color="#1976d2" label="ні" value="no"></v-radio>
            <v-radio color="#1976d2" label="невідомо" value="unknown"></v-radio>
          </v-radio-group>
        </v-flex>

        <v-flex md4 v-if="generalData.radioYesNo == 'yes'">
          <v-text-field
            v-model= generalData.numberESID
            label="Номер ESID"
            clearable
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
          (v) => v && v.length <= 20 || 'Name must be less than 20 characters',
          (v) => /^[a-zA-Z\s]*$/.test(v) || 'Тільки літери'
        ],
        dataRules: [
                  (v) => /^(\d{1,2})-(\d{1,2})-(\d{4})$/.test(v) || 'Введіть ДД-ММ-РР'
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
  }
</script>




