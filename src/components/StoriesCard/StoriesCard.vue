<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Card Title</ion-card-title>
      <ion-button v-if="!isElVisible" @click="doText(true)">Show</ion-button>
      <ion-button v-else="isElVisible" @click="doText(false)">Hide</ion-button>
    </ion-card-header>

    <ion-card-content v-if="isElVisible">
      Here's a small text description for the card content. Nothing more,
      nothing less.
    </ion-card-content>
  </ion-card>

  <ion-card>
    <ion-card-header>
      <ion-card-title>City Do-Do list</ion-card-title>
    </ion-card-header>
    <ion-card-header v-for="item in cityTask" :key="item.id">
      <ion-card-title v-if="!item.status">{{ item.title }}</ion-card-title>
      <ion-card-title v-else style="text-decoration: line-through solid !important;">{{ item.title }}</ion-card-title>
      <ion-button v-if="!item.status" @click="setDoneCity(item.id)">✔️</ion-button>
      <ion-button v-else @click="removeCity(item.id)">❌</ion-button>
    </ion-card-header>
  </ion-card>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton
} from '@ionic/vue'

import { ref } from 'vue'

const isElVisible = ref(false)

const doText = (e) => {
  isElVisible.value = e
}

const cityTask = ref([
  { id: 0, title: 'Ivanovo', status: false },
  { id: 1, title: 'Moscow', status: false },
])

const setDoneCity = (id) => {
  cityTask.value == cityTask.value.map(x => {
    if (x.id === id)
      x.status = true
    return x
  })
}

const removeCity = (id) => {
  cityTask.value = cityTask.value.filter(y => y.id !== id)
}

</script>

<style>
ul {
  list-style-type: none;
  /* Убирает буллиты */
}
</style>

<style src="./StoriesCard.scss"></style>
