import { ref } from 'vue'

export { default as StoriesCard } from './StoriesCard.vue'

export default {
  name: 'App',
  setup() {
    const cityTask = ref([{ id: 0, title: 'Ivanovo', status: false }])

    return {
      cityTask,
    }
  },
}
