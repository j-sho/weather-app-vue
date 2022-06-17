import { WeatherTypes, Result } from "../types/weatherTypes.interface";
import axios from "axios";

const APIKEY = "efb4b0acb4d1934f7ffb256c05856587";

export const getWeather = async function (
  search: string
): Promise<WeatherTypes> {
  let errorMessage = "";
  let descriptionIcon = "";
  let results: Result[] = [];
  await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${search}&appid=${APIKEY}`
    )
    .then((response) => {
      errorMessage = "";
      descriptionIcon = response.data.weather[0].icon;
      const { temp, feels_like, temp_min, temp_max, pressure, humidity } =
        response.data.main;
      results = [
        { id: 1, title: "Temp", value: temp },
        { id: 2, title: "Feels like", value: feels_like },
        { id: 3, title: "Temp min", value: temp_min },
        { id: 4, title: "Temp max", value: temp_max },
        { id: 5, title: "Pressure", value: pressure },
        { id: 6, title: "Humidity", value: humidity },
      ];
    })
    .catch((errors) => {
      errorMessage =
        "Sorry we can't find weather data for this city. Try another one.";
      descriptionIcon = "";
      results = [];
      console.log(errors);
    });
  return { errorMessage, descriptionIcon, results };
};
