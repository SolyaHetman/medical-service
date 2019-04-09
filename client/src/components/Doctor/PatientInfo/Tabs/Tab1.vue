<template>
  <v-form>
    <v-container>
      <v-layout>

        <v-flex md2 >
          <p>Ім'я</p>
          <v-text-field
            v-model="generalData.lastname"
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p>Прізвище</p>
          <v-text-field
            v-model="generalData.firstname"
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p>Побатькові</p>
          <v-text-field
            v-model="generalData.middlename"
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>


    <v-container>
      <v-layout>
    	<v-flex md2>
          <p>Дата народження</p>
          <v-text-field
            v-model="generalData.birthdate"
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p>Стать</p>
          <v-text-field
            v-model="generalData.Sex"
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>


    <v-container>
      <v-layout>
        <v-flex md2 >
          <p>Країна народження</p>
          <v-text-field
            v-model="generalData.Country"
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p>Країна теперішнього проживання</p>
          <v-text-field
            v-model="generalData.CountryN"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>

 </v-form>
</template>


<script>
  export default {
    data () {
      return {
        generalData: {
          firstname: "Тарас",
          lastname: "Кулаков",
          middlename: "Миколайович",
          birthdate: "18-03-2000",
          Sex: "Чоловік",
     	  Country: "Білорусь",
     	  CountryN: "Україна",
          numberESID:null,
        } 
      }
    }
  }
</script>

