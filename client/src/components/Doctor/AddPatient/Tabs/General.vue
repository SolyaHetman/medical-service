<template>
  <v-form v-model="valid" ref="form" @submit.prevent="savePatient">
    <v-container>
      <v-layout>

        <v-flex xs12 md4 >
          <v-text-field
            v-model="generalData.pid"
            :rules="nameRules"
            :counter="20"
            label="ПIД"
            prepend-icon ="create"
            required
          ></v-text-field>
        </v-flex>
        <v-flex md4>
          <v-text-field
            v-model="generalData.date"
            label="Дата народження"
            :rules="dataRules"
            prepend-icon ="event"
            ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
        <v-flex md4>
          <v-autocomplete
            :items="items"
            v-model="generalData.homeland"
            attach
            label="Місто народження"
            prepend-icon ="place"
          ></v-autocomplete>
        </v-flex>

        <v-flex md4>
          <v-autocomplete
            :items="items"
            v-model="generalData.city"
            attach
            label="Місто теперішнього проживання"
            prepend-icon ="place"
          ></v-autocomplete>
        </v-flex>

      </v-layout>
    </v-container>
 

    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md4>
          <p>Стать</p>
          <v-radio-group v-model="generalData.sex" :mandatory="false">
            <v-radio color="#1976d2" label="Жіноча" value="Жіноча"></v-radio>
            <v-radio color="#1976d2" label="Чоловіча" value="Чоловіча"></v-radio>
          </v-radio-group>
        </v-flex>

        <v-flex xs12 md4>
          <p>Згода пацієнта на використання особистої інформації</p>   
          <v-radio-group v-model="generalData.radiosAgreement" :mandatory="false">
            <v-radio color="#1976d2" label="Цілковита" value="Цілковита"></v-radio>
            <v-radio color="#1976d2" label="Згода лише на науковий аналіз" value="Згода лише на науковий аналіз"></v-radio>
            <v-radio color="#1976d2" label="Не застосовується" value="Не застосовується"></v-radio>
          </v-radio-group>
        </v-flex>


        <v-flex xs12 md4>
          <p>Генетично ускладнений сімейний анамнез ПІД</p>   
          <v-radio-group v-model="generalData.radioYesNo" :mandatory="false">
            <v-radio color="#1976d2" label="Так" value="Так"></v-radio>
            <v-radio color="#1976d2" label="Ні" value="Ні"></v-radio>
            <v-radio color="#1976d2" label="Невідомо" value="Невідомо"></v-radio>
          </v-radio-group>
        </v-flex>

        <v-flex md4 v-if="generalData.radioYesNo == 'Так'">
          
          <p>Родинні зв'язки ПІД</p>   
            <v-checkbox  
              v-model="generalData.numberESID" 
              label="Батько"
              value="Батько"
              color="#1976d2" 
              clq
            ></v-checkbox>
            <v-flex xs12 v-if="generalData.numberESID.includes('Батько')">
              <v-text-field 
                v-model= generalData.fatherESID
                label="ESID батька"
              ></v-text-field>
            </v-flex>  
            <v-checkbox  
              v-model="generalData.numberESID" 
              label="Мати"
              value="Мати"
              color="#1976d2" 
              clq
            ></v-checkbox>
            <v-flex xs12 v-if="generalData.numberESID.includes('Мати')">
              <v-text-field 
                v-model= generalData.motherESID
                label="ESID Мати"
              ></v-text-field>
            </v-flex>  
            <v-checkbox  
              v-model="generalData.numberESID"
              label="Сестра"
              value="Сестра"
              color="#1976d2" 
              clq
            ></v-checkbox>
            <v-flex xs12 v-if="generalData.numberESID.includes('Сестра')">
              <v-text-field 
                v-model= generalData.sisterESID
                label="ESID Сестра"
              ></v-text-field>
            </v-flex>
            <v-checkbox  
              v-model="generalData.numberESID"
              label="Брат"
              value="Брат"
              color="#1976d2" 
              clq
            ></v-checkbox>
            <v-flex xs12 v-if="generalData.numberESID.includes('Брат')">
              <v-text-field 
                v-model= generalData.brotherESID
                label="ESID Брат"
              ></v-text-field>
            </v-flex>   
            <v-checkbox  
              v-model="generalData.numberESID" 
              label="Родич по жіночій лінії"
              value="Родич по жіночій лінії"
              color="#1976d2" 
              clq
            ></v-checkbox>
            <v-flex xs12 v-if="generalData.numberESID.includes('Родич по жіночій лінії')">
              <v-text-field 
                v-model= generalData.womenESID
                label="ESID Родич по жіночій лінії"
              ></v-text-field>
            </v-flex>  
            <v-checkbox  
              v-model="generalData.numberESID" 
              label="Родич по чоловічій лінії"
              value="Родич по чоловічій лінії"
              color="#1976d2" 
              clq
            ></v-checkbox>
            <v-flex xs12 v-if="generalData.numberESID.includes('Родич по чоловічій лінії')">
              <v-text-field 
                v-model= generalData.menESID
                label="ESID Родич по чоловічій лінії"
              ></v-text-field>
            </v-flex>  
        </v-flex>
        
      </v-layout>
    </v-container>
    <v-btn type="submit">Далі</v-btn>
    <!-- <v-btn @click="next">next</v-btn> -->
  </v-form>
</template>

<style scoped>
  .v-form>.container>.layout:only-child {
    margin: -20px;
}
</style>

<script>
import style from './tab.css';
import axios from 'axios';
import EventBus from '@/event-bus';

export default {
  data () {
    return {
      valid: false,
      menu: null,
      date: null,
      nameRules: [
        (v) => !!v || 'Заповніть дані',
        (v) => v && v.length <= 20 || 'Name must be less than 20 characters',
        // (v) => /^[a-zA-Z\s]*$/.test(v) || 'Тільки літери'
      ],
      dataRules: [
        (v) => /^(\d{1,2})-(\d{1,2})-(\d{4})$/.test(v) || 'Введіть ДД-ММ-РР',
        (v) => !!v || 'Заповніть дані',
              ],
      items: ['Львів,львівська область', 'Київ,київська область', 'Вінниця,вінницька область', ],
      alert: true,
      generalData: {
        pid: null,
        date: null,
        homeland: null,
        city: null,
        sex: null,
        radioYesNo: null,
        radiosAgreement: null,
        family_ties_pid:null,
        radiosAffinity: null,
        numberESID:[],
        fatherESID: null,
        motherESID: null,
        sisterESID: null,
        brotherESID: null,
        womenESID: null,
        menESID: null,

      } 
    }
  },
  methods: {
    save (date) {
      this.$refs.menu.save(date)
    },
    savePatient: function () {
      this.$refs.form.validate()
      if (this.generalData.radioYesNo == 'Так') {
        this.generalData.radioYesNo = this.generalData.numberESID;
      }
      EventBus.$emit('completedForm', this.generalData, 1);
    }
  }
}
</script>




