<template>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a href="#" class="nav-link" :class="{active: activeTab === 'today'}" @click="activeTab = 'today'">Today</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link" :class="{active: activeTab === 'tomorrow'}" @click="activeTab = 'tomorrow'">Tomorrow</a>
      </li>
    </ul>
</template>

  <script lang="ts">
    import { ref } from 'vue';
  
    export default {
      name: 'WeatherItemTab',
      setup() {
        const activeTab = ref('today');
        return { activeTab };
      }
    }
  </script>
