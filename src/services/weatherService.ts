import axios from 'axios'
import { getCityData } from './CityService'

export interface WeatherData {
  main: {
    temp: number
    feels_like: number
  }
  weather: {
    main: string
    description: string
    icon: string
  }[]
}

export async function getWeatherData(cityName: string, apiKey: string) {
  const { lat, lon, name } = await getCityData(cityName, apiKey)

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

  return axios.get<WeatherData>(url).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to retrieve weather data')
    }

    const { weather, main } = response.data
    const { main: label, description, icon } = weather[0]
    const { temp, feels_like } = main

    return { name, label, description, temp, icon, feels_like }
  })
}
