<template>
  <ion-list class="story-tasks">
    <story-task
      v-for="(task, taskIdx) in tasks"
      :task="task"
      :index="taskIdx"
      @update:task="(task) => updateTask(task, taskIdx)"
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
  (e: 'update:task', options: { task: TaskData; index: number }): void
}>()

function updateTask(task: TaskData, taskIdx: number) {
  emit('update:task', {
    task,
    index: taskIdx,
  })
}
</script>
