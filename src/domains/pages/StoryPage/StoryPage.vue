<template>
  <ion-content v-if="story" class="story-page">
    <ion-title>{{ story.title }}</ion-title>

    <story-tasks :tasks="story.tasks" @toggle="toggleTask" />
  </ion-content>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { IonTitle, IonContent } from '@ionic/vue'
import { StoryData } from '@/types/story'
import { stories } from '@/utils/stories'
import { StoryTasks } from '@/domains/stories'

const route = useRoute()
const story = ref<StoryData | null>(null)

const storyId = computed(() => {
  return route.params.id
})

function toggleTask(index: number) {
  if (!story.value) {
    return
  }

  const isDone = story.value.tasks[index].isDone

  if (!isDone) {
    return
  }

  story.value.tasks[index].isDone = !isDone
}

onMounted(() => {
  story.value = stories.find((s) => s.id === Number(storyId.value)) || null
})
</script>

<style src="StoryPage.scss"></style>
