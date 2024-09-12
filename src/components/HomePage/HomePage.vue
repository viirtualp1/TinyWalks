<template>
  <ion-content>
    <story-tasks :tasks="cityTasks" @toggle="toggleTask" />
  </ion-content>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IonContent } from '@ionic/vue'
import type { TaskItem } from '../.././types/task'
import { StoryTasks } from '../Stories/StoryTasks'

const cityTasks = ref<TaskItem[]>([
  { id: 0, title: 'Иваново', isDone: false },
  { id: 1, title: 'Москва', isDone: false },
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
