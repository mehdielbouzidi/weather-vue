import { defineStore } from "pinia";
import { getWeatherData } from "../services/weatherService";

type WeatherData = {
  name: string;
  label: string;
  description: string;
  temp: number;
  feels_like: number;
  icon: string;
}[];

export const useWeatherStore = defineStore({
  id: "weather",
  state: () => ({
    weatherData: [] as WeatherData,
    loading: false,
    error: null,
  }),
  actions: {
    async fetchWeatherData(cityName: string, apiKey: string) {
      try {
        this.loading = true;

        const weatherData = await getWeatherData(cityName, apiKey);
        this.weatherData = [...this.weatherData, weatherData];

        this.loading = false;
      } catch (error: any) {
        this.error = error.message;
      }
    },
  },
});
