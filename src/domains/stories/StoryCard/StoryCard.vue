<template>
  <ion-card>
    <ion-card-title>
      {{ title }}
    </ion-card-title>

    <ion-card-content>
      <ion-button :href="`/story/${id}`"> Открыть </ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardTitle, IonCardContent, IonButton } from '@ionic/vue'
import type { SearchStoryData } from '@/types/story'

defineProps<SearchStoryData>()
</script>
