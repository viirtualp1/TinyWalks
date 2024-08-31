<template>
  <ion-page>
    <app-header />
    <home-page />
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage } from '@ionic/vue'

import { HomePage } from '../components/HomePage'
import { AppHeader } from '../components/AppHeader'
</script>
