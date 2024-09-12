<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Поездка</ion-card-title>

      <ion-button @click="toggleTasks">
        {{ isTasksExpanded ? 'Скрыть' : 'Показать' }}
      </ion-button>
    </ion-card-header>
  </ion-card>

  <ion-card v-if="!isTasksExpanded">
    <ion-card-header>
      <ion-card-title>City Do-Do list</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      <ion-list>
        <story-task
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          @toggle="toggleTask"
        />
      </ion-list>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonList,
} from '@ionic/vue'
import type { TaskItem } from '../../../types/task.ts'
import { StoryTask } from './StoryTask'

defineProps<{
  tasks: TaskItem[]
}>()

const emit = defineEmits<{
  (e: 'toggle', id: number): void
}>()

const isTasksExpanded = ref(false)

function toggleTasks() {
  isTasksExpanded.value = !isTasksExpanded.value
}

function toggleTask(id: number) {
  emit('toggle', id)
}
</script>
