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
<<<<<<< Updated upstream
    <v-btn @click="submit" :class="{blue: valid }">підтвердити</v-btn>
=======

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
        
      </v-layout>
    </v-container>

    <v-btn @click="submit" :class="{blue: valid }">submit</v-btn>
>>>>>>> Stashed changes
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
      }
    },
    methods: {
      submit () {
        this.$refs.form.validate()
      }
    }
  }
</script>




