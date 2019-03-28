<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-tabs
        v-model="active"
        color="primary"
        dark
        slider-color="yellow"
        >
          <v-tab
            v-for="n in tabs"
            :key="n"
            ripple
          >
          {{ n.title }}
          </v-tab>
          <v-tab-item
            v-for="n in tabs"
            :key="n"
          >
            <v-card flat>
              <v-card-text>
                {{ n.body }}
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'GeneralData',
    data() {
      return {
        tabs: [
          {
            title:'Загальні дані',
            body: "some lorem text1"
          },
          {
            title:'Діагноз первинного імунодефіциту',
            body: "some lorem text2"
          },
          {
            title:'Стовбурові клітини',
            body: "some lorem text3"
          },
          {
            title:'Замісна імуноглобулінотерапія',
            body: "some lorem text4"
          }
        ]
      }
    }
  }
</script>