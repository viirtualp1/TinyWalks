<template>
  <ion-content>
    <h1>Истории</h1>

    <story-card
      v-for="story in searchStories"
      :key="story.id"
      :id="story.id"
      :title="story.title"
    />
  </ion-content>
</template>

<script setup lang="ts">
import { IonContent } from '@ionic/vue'
import { StoryCard } from '@/domains/stories'
import { searchStories } from '@/utils/stories'
</script>

<style lang="scss" src="./HomePage.scss"></style>
