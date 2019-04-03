<template>
  <v-form v-model="valid">
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
            @input="$v.lastname.$touch()"
            @blur="$v.lastname.$touch()"

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
            @input="$v.firstname.$touch()"
            @blur="$v.firstname.$touch()"
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
            @input="$v.middlename.$touch()"
            @blur="$v.middlename.$touch()"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
    <v-btn @click="submit">submit</v-btn>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      middlename: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 20 || 'Name must be less than 20 characters'
      ]
    })
  }

</script>