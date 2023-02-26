<template>
  <v-container class="">
    <v-responsive class="d-flex align-center text-center fill-height">
      <h1 class="text-h5 font-weight-bold">Search Record</h1>
      <div class="py-4" />
      <v-sheet width="300" class="mx-auto">
        <v-form @submit.prevent>
          <v-text-field label="Student ID"></v-text-field>
          <v-btn type="submit" color="error" :to="'/student/found'" block class="mt-2">Search</v-btn>
        </v-form>
      </v-sheet>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup></script>
