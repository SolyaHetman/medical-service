<template>
  <v-toolbar class="primary" dark>
    <v-toolbar-title>MedicalService</v-toolbar-title>
    <v-toolbar-items class="hidden-sm-and-down ml-auto">
      <v-btn flat to="/login">Логін</v-btn>  
      <v-btn flat to="/newpatient">Додати нового пацієнта</v-btn>  
      <v-btn flat to="/dashboard">Всі пацієнти</v-btn>
      <v-btn flat to="/doctorRegion">Лікар по області</v-btn>  
      <v-btn flat to="/doctorCentre">Центр</v-btn>  
      <v-btn flat to="/mainDoctor">Кафедра</v-btn>  
    </v-toolbar-items>
  </v-toolbar>  
 
</template>

<script>
export default {
    name: "Navbar",

}
</script>

