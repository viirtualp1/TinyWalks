<template>
  <ion-item class="story-task">
    <ion-card-title
      class="story-task__title"
      :class="{ 'is-done': task.isDone }"
    >
      {{ task.name }}
    </ion-card-title>

    <ion-button type="button" color="success" size="small" @click="toggle">
      <img
        :src="task.isDone ? IconTrash : IconMark"
        loading="lazy"
        width="16"
        height="16"
        alt="Toggle task"
      />
    </ion-button>
  </ion-item>
</template>

<script setup lang="ts">
import { IonButton, IonCardTitle, IonItem } from '@ionic/vue'
import { TaskData } from '@/types/story'

import IconMark from '@/assets/icons/icon-mark.svg'
import IconTrash from '@/assets/icons/icon-trash.svg'

const props = defineProps<{
  task: TaskData
  index: number
}>()

const emit = defineEmits<{
  (e: 'toggle', index: number): void
}>()

function toggle() {
  emit('toggle', props.index)
}
</script>

<style src="./StoryTask.scss"></style>
