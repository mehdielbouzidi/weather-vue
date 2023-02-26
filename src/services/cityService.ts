import axios from 'axios'

interface CityData {
  name: string
  lat: number
  lon: number
}

export function getCityData(cityName: string, apiKey: string) {
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`

  return axios.get<CityData[]>(url).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to retrieve city data')
    }

    const cityData = response.data[0];

    if (!cityData) {
      throw new Error(`City not found: ${cityName}`)
    }

    return cityData
  })
}
