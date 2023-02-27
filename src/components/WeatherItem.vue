<template>
  <WeatherItemTab />
  <div class="p-3 card rounded-0 border-top-0">
    <div class="d-flex flex-row align-items-center">
      <div class="card-body">
        <h5 class="card-title">{{ cityData.name }}</h5>
        <div class="card-text">
          Current temperature: {{ Math.round(cityData.temp) }}°
        </div>
        <div class="card-text">
          Feels like: {{ Math.round(cityData.feels_like) }}°
        </div>
        <div class="card-text text-capitalize">{{ cityData.description }}</div>
        <button class="btn btn-sm btn-danger mt-2" @click="$emit('remove')"><i class="bi bi-trash"></i></button>
      </div>
      <div>
        <img
          :src="'http://openweathermap.org/img/wn/' + cityData.icon + '@2x.png'"
          :alt="cityData.name"
        />
        <div class="card-text text-center">{{ cityData.label }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import WeatherItemTab from './WeatherItemTab.vue';

export default {
    name: "WeatherItem",
    props: {
        cityData: {
            type: Object,
            required: true,
        }
    },
    components: { WeatherItemTab }
};
</script>
