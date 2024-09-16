<template>
  <ion-content v-if="story" class="story-page">
    <ion-title>{{ story.title }}</ion-title>

    <story-tasks :tasks="story.tasks" @update:task="updateTask" />
  </ion-content>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { IonTitle, IonContent } from '@ionic/vue'
import { TaskData } from '../../types/story'
import { stories } from '../../utils/stories'
import { StoryTasks } from '../Stories/StoryTasks'

const route = useRoute()

const storyId = computed(() => {
  return route.params.id
})

const story = computed(() => {
  return stories.find((s) => s.id === Number(storyId.value))
})

function updateTask(options: { task: TaskData; index: number }) {
  if (!story.value?.tasks[options.index]) {
    return
  }

  story.value.tasks[options.index] = options.task
}
</script>

<style src="./StoryPage.scss"></style>
