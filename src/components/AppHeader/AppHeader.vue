<template>
  <ion-header class="app-header">
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-header>
</template>

<script setup lang="ts">
import {
  IonHeader,
  IonTabs,
  IonTabBar,
  IonRouterOutlet,
  IonTabButton,
  IonLabel,
} from '@ionic/vue'
</script>

<style src="./AppHeader.scss"></style>
