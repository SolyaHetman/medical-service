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
              <General />
            </v-card>
          </v-tab-item>
          <!-- End Tab1 -->
          <!-- Start Tab2 -->
          <v-tab-item>
            <v-card flat>
              <PathDig />
            </v-card>
          </v-tab-item>
          <!-- End Tab2 -->
          <!-- Start Tab3 -->
          <v-tab-item>
            <v-card flat>
              <DiagnosiImmunodeficiency />
            </v-card>
          </v-tab-item>
          <!-- End Tab3 -->
          <!-- Start Tab4 -->
          <v-tab-item>
            <v-card flat>
              <StemCells />
            </v-card>
          </v-tab-item>
          <!-- End Tab4 -->
          <!-- Start Tab5 -->
          <v-tab-item>
            <v-card flat>
              <ReplacementIm />
            </v-card>
          </v-tab-item>
          <!-- End Tab5 -->
        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import General from "@/components/Doctor/AddPatient/Tabs/General.vue"
import PathDig from "@/components/Doctor/AddPatient/Tabs/PathDig.vue"
import DiagnosiImmunodeficiency from "@/components/Doctor/AddPatient/Tabs/DiagnosiImmunodeficiency.vue"
import StemCells from "@/components/Doctor/AddPatient/Tabs/StemCells.vue"
import ReplacementIm  from "@/components/Doctor/AddPatient/Tabs/ReplacementIm.vue"

  export default {
    name: 'GeneralData',
    components: {
      General,
      PathDig,
      DiagnosiImmunodeficiency,
      StemCells,
      ReplacementIm
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
            title:'Діагноз первинного імунодефіциту',
          },
          {
            title:'Стовбурові клітини/генна терапія',
          },
          {
            title:'Замісна імуноглобулінотерапія',
          },
        ]
      }
    }
  }
</script>