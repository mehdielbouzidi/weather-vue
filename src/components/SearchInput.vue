<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control shadow-none border-0 border-bottom rounded-0"
      placeholder="Search a city.."
      v-model="input"
      @keyup.enter="handleSearch"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useWeatherStore } from '../stores/WeatherStore'

const apiKey = import.meta.env.VITE_WEATHER_API_KEY

export default defineComponent({
  name: 'SearchInput',
  setup() {
    const input = ref('')
    const weatherStore = useWeatherStore()

    async function handleSearch() {
      if (input.value.trim() !== '' && apiKey !== undefined) {
        await weatherStore.fetchWeatherData(input.value, apiKey)
      }
    }

    return { input, handleSearch }
  }
})
</script>
