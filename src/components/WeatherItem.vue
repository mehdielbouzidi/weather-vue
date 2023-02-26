<template>
  <div class="p-3 card rounded-0">
    <div class="d-flex flex-row align-items-center">
      <div class="card-body">
        <h5 class="card-title">{{ cityData.name }}</h5>
        <div class="card-text">Current temperature: {{ Math.round(cityData.temp) }}°</div>
        <div class="card-text">Feels like: {{ Math.round(cityData.feels_like) }}°</div>
        <div class="card-text text-capitalize">{{ cityData.description }}</div>
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
  export default {
    name: 'WeatherItem',
    props: {
      cityData: {
        type: Object,
        required: true
      }
    }
  }
</script>