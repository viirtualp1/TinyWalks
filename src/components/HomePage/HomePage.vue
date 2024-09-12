<template>
  <ion-content>
    <story-tasks
      v-for="(cityTasks, cityTasksIdx) in citiesTasks"
      :key="cityTasksIdx"
      :title="cityTasks.title"
      :tasks="cityTasks.items"
      @toggle="toggleTask"
    />
  </ion-content>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { IonContent } from '@ionic/vue'
import type { TaskItem } from '../.././types/task'
import { StoryTasks } from '../Stories/StoryTasks'

const citiesTasks = computed(() => [
  { title: 'ИВ - МСК', items: cityTasks1.value },
  { title: 'СВБ - БЛГ', items: cityTasks2.value },
])

const cityTasks1 = ref<TaskItem[]>([
  { id: 0, title: 'Иваново', isDone: false },
  { id: 1, title: 'Москва', isDone: false },
])

const cityTasks2 = ref<TaskItem[]>([
  { id: 0, title: 'Свободный', isDone: false },
  { id: 1, title: 'Благовещенск', isDone: false },
])

function toggleTask(id: number) {
  const task = cityTasks.value.find((cityTask: TaskItem) => cityTask.id === id)

  if (!task) {
    return
  }

  task.isDone = !task.isDone
}
</script>

<style src="./HomePage.scss"></style>
