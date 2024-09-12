<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Поездка</ion-card-title>

      <ion-button v-if="!isTasksExpanded" @click="toggleTasks(true)">
        {{ isExpanded ? 'Скрыть' : 'Показать' }}
      </ion-button>
    </ion-card-header>
  </ion-card>

  <ion-card>
    <ion-card-header>
      <ion-card-title>City Do-Do list</ion-card-title>
    </ion-card-header>

    <ion-card-header v-for="item in cityTask" :key="item.id">
      <ion-card-title class="stories-card__title">
        {{ item.title }}
      </ion-card-title>

      <ion-button v-if="!item.status" @click="setDoneCity(item.id)">
        ✔️
      </ion-button>
      <ion-button v-else @click="removeCity(item.id)"> ❌ </ion-button>
    </ion-card-header>
  </ion-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
} from '@ionic/vue'

const isTasksExpanded = ref(false)
cosnt isCityDone = ref(false)

const cityTasks = ref([
  { id: 0, title: 'Ivanovo', status: false },
  { id: 1, title: 'Moscow', status: false },
])

function toggleTasks() {
  isTasksExpanded.value = !isTasksExpanded.value
}

function toggleCityTask() {
  isCityDone.value = !isCityDone.value
}

function setCityDone(id: number) {
  const taskIndex = cityTasks.value.findIndex((task) => task.id === id)

  if (taskIndex === -1) {
    return
  }

  cityTasks.value[taskIndex].status = true
}

function removeCity(id: number) {
  cityTasks.value = cityTasks.value.filter((task) => task.id !== id)
}
</script>

<style lang="scss" src="./StoriesCard.scss"></style>
