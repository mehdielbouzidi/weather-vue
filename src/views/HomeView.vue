<template>
  <div class="container">
    <AppHeader />
    <AppMain />
  </div>
</template>

<script lang="ts">
import AppHeader from '../components/AppHeader.vue'
import AppMain from '../components/AppMain.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain
  }
}
</script>
