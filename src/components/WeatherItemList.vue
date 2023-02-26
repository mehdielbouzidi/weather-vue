<template>
  <div class="row g-2">
    <div v-for="cityData in weatherData" :key="cityData.name" class="col-12 col-sm-6">
      <WeatherItem :cityData="cityData" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { useWeatherStore } from '../stores/WeatherStore'
import WeatherItem from './WeatherItem.vue'

const apiKey = import.meta.env.VITE_WEATHER_API_KEY

export default defineComponent({
  name: 'WeatherItemList',
  components: { WeatherItem },
  setup() {
    const weatherStore = useWeatherStore()
    const weatherData = computed(() => weatherStore.weatherData)
    const loading = computed(() => weatherStore.loading)

    onMounted(async () => {
      await weatherStore.fetchWeatherData('Amsterdam', apiKey)
    })

    return { weatherData, loading }
  }
})
</script>
