<template>
  <v-container class="">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-img contain height="150" src="@/assets/512x512.png" />
      <div class="text-body-2 font-weight-light mb-1">Welcome to Vuetify 3</div>
      <h1 class="text-h5 font-weight-bold">Excellent Data Filler - Testing (Dynamic Site)</h1>
      <div class="py-2" />
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <router-link to="/search/record">Search Record</router-link>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
//
</script>
