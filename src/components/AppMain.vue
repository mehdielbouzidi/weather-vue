<template>
  <main class="container">
    <SearchInput />
    <WeatherItemList />
  </main>
</template>

<script lang="ts">
import WeatherItemList from "./WeatherItemList.vue";
import SearchInput from "./SearchInput.vue";

export default {
  name: "AppMain",
  components: {
    SearchInput,
    WeatherItemList,
  },
};
</script>
