<template>
  <v-form v-model="valid" ref="form">
    <v-container>
      <v-layout>
        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="20"
            label="Прізвище"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="20"
            label="Ім'я"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="middlename"
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
        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-slot:activator="{ on }"
            v-model="date"
            label="Введіть дату народження"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
          <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
        


        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid>
    <p>Стать</p>
    <v-radio-group v-model="radios" :mandatory="false">
      <v-radio label="жіноча" value="female"></v-radio>
      <v-radio label="чоловіча" value="male"></v-radio>
    </v-radio-group>
  </v-container>

  <v-container>
      <v-layout>
        <v-flex
          xs12
          md4
        >
          <v-select
          :items="items"
          box
          label="Країна народження"
        ></v-select>
        </v-flex>
      
        <v-flex
          xs12
          md4
        >
          <v-select
          :items="items"
          box
          label="Країна теперішнього проживання"
        ></v-select>
        </v-flex>
      </v-layout>

    </v-container>


    <v-container>
      <v-layout>
        <v-flex
          xs12
          md4
        >
        <p>Згода пацієнта на використання особистої інформації</p>   
      <v-radio-group v-model="radios" :mandatory="false">
      <v-radio label="цілковита" value="complete"></v-radio>
      <v-radio label="згода лише на науковий аналіз" value="onlyresearch"></v-radio>
      <v-radio label="не застосовується" value="notallow"></v-radio>
    </v-radio-group>
         
        </v-flex>
      </v-layout>
    </v-container>


    <v-container>
      <v-layout>
        <v-flex
          xs12
          md4
        >
        <p>Генетично ускладнений сімейний анамнез первинних імунодифецитів</p>   
      <v-radio-group v-model="radios1" :mandatory="false">
      <v-radio label="так" value="yes"></v-radio>
      <v-radio label="ні" value="no"></v-radio>
      <v-radio label="невідомо" value="unknown"></v-radio>
    </v-radio-group>
         
        </v-flex>
      </v-layout>
    </v-container>


  <v-container>
      <v-layout>
        <v-flex
          xs12
          md4
        >
        <p>Родинні зв'язки ПІД</p>   
      <v-radio-group v-model="radios1" :mandatory="false">
      <v-radio label="По чоловічій лінії" value="yes2"></v-radio>
      <v-radio label="По жіночій лінії" value="no2"></v-radio>
      <v-radio label="невідомо" value="unknown2"></v-radio>
    </v-radio-group>
         
        </v-flex>

        <v-flex
          xs12
          md4
        >
        <p>Спорідненість пацієнта</p>   
      <v-radio-group v-model="radios1" :mandatory="false">
      <v-radio label="так" value="yes1"></v-radio>
      <v-radio label="ні" value="no1"></v-radio>
      <v-radio label="невідомо" value="unknown1"></v-radio>
      <v-radio label="можливо" value="maybe"></v-radio>
    </v-radio-group>
         
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
        firstname: '',
        lastname: '',
        middlename: '',
        nameRules: [
          (v) => !!v || 'Name is required',
          (v) => v && v.length <= 20 || 'Name must be less than 20 characters'
        ],
        //radios: 'radio-1',
        items: ['Львів', 'Київ', 'Вінниця', 'Рівне']
      }
    },
    methods: {
      submit () {
        this.$refs.form.validate()
      }
    }
  }
</script>




