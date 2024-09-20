<template>
  <ion-list class="story-tasks">
    <story-task
      v-for="(task, taskIdx) in tasks"
      :task="task"
      :index="taskIdx"
      @toggle="updateTask"
    />
  </ion-list>
</template>

<style lang="scss" src="./StoryTasks.scss"></style>

<script setup lang="ts">
import { IonList } from '@ionic/vue'
import { StoryTask } from './StoryTask'
import type { TaskData } from '../../../types/story'

defineProps<{
  tasks: TaskData[]
}>()

const emit = defineEmits<{
  (e: 'toggle', index: number): void
}>()

function updateTask(index: number) {
  emit('toggle', index)
}
</script>
