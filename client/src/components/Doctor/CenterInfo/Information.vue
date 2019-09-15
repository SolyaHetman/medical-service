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
          <!-- Start Tab1 -->
          <v-tab-item>
            <v-card flat>
              <Tab1 />
            </v-card>
          </v-tab-item>
          <!-- End Tab1 -->
          <!-- Start Tab2 -->
          <v-tab-item>
            <v-card flat>
              <Tab2 />
            </v-card>
          </v-tab-item>
          <!-- End Tab2 -->
          <!-- Start Tab3 -->
          <v-tab-item>
            <v-card flat>
              <Tab3 />
            </v-card>
          </v-tab-item>
          <!-- End Tab3 -->
          <!-- Start Tab4 -->
          <v-tab-item>
            <v-card flat>
              <Tab4 />
            </v-card>
          </v-tab-item>
          <!-- End Tab4 -->
          <!-- Start Tab5 -->
          <v-tab-item>
            <v-card flat>
              <Tab5 />
            </v-card>
          </v-tab-item>
          <!-- End Tab5 -->
          <!-- Start Tab1 -->
          <v-tab-item>
            <v-card flat>
              <reviewTab1 />
            </v-card>
          </v-tab-item>
          <!-- End Tab1 -->
        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Tab1 from "@/components/Doctor/CenterInfo/Tabs/Tab1.vue"
import Tab2 from "@/components/Doctor/RegionPatient/Tabs/Tab2.vue"
import Tab3 from "@/components/Doctor/RegionPatient/Tabs/Tab3.vue"
import Tab4 from "@/components/Doctor/RegionPatient/Tabs/Tab4.vue"
import Tab5 from "@/components/Doctor/RegionPatient/Tabs/Tab5.vue"


  export default {
    name: 'Information',
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