<template>
  <v-toolbar class="primary" dark>
    <v-toolbar-title>MedicalService</v-toolbar-title>
    <v-toolbar-items class="hidden-sm-and-down ml-auto">
      <v-btn flat to="/login">Login</v-btn>
      <v-btn flat>Register</v-btn>
      <v-btn flat to="/dashboard">Dashboard</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
    name: "Navbar"
}
</script>