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
            :key="n.title"
            ripple
          >
          {{ n.title }}
          </v-tab>
          <v-tab-item>
            <v-card flat>
              <Tab1 />
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <Tab2 />
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <Tab3 />
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <Tab4 />
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <Tab5 />
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Tab1 from "@/components/Doctor/PatientInfo/Tabs/Tab1.vue"
import Tab2 from "@/components/Doctor/PatientInfo/Tabs/Tab2.vue"
import Tab3 from "@/components/Doctor/PatientInfo/Tabs/Tab3.vue"
import Tab4 from "@/components/Doctor/PatientInfo/Tabs/Tab4.vue"
import Tab5 from "@/components/Doctor/PatientInfo/Tabs/Tab5.vue"


  export default {
    name: 'GeneralData',
    components: {
      Tab1,
      Tab2,
      Tab3,
      Tab4,
      Tab5
    },
    data() {
      return {
        active: '',
        tabs: [
          {
            title:'Загальні дані',
          },
          {
            title:'Шлях до діагнозу',
          },
          {
            title:'Діагноз ПІД',
          },
          {
            title:'Стовбурові клітини',
          },
          {
            title:'Замісна імуноглобулінотерапія',
          },
        ]
      }
    },    
  }
</script>