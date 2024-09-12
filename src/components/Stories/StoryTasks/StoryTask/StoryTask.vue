<template>
  <ion-item class="story-task">
    <ion-card-title
      class="story-task__title"
      :class="{ 'is-done': task.isDone }"
    >
      {{ task.title }}
    </ion-card-title>

    <ion-button @click="toggle">
      {{ task.isDone ? '❌' : '✔️' }}
    </ion-button>
  </ion-item>
</template>

<style lang="scss" src="./StoryTask.scss"></style>

<script setup lang="ts">
import { IonButton, IonCardTitle, IonItem } from '@ionic/vue'
import type { TaskItem } from '../../../../types/task'

const props = defineProps<{
  task: TaskItem
}>()

const emit = defineEmits<{
  (e: 'toggle', id: number): void
}>()

function toggle() {
  emit('toggle', props.task.id)
}
</script>
