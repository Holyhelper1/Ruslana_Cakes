import { useEffect, useState } from "react";
import styles from "./weather-block.module.css";
import { createWeatherIcon } from "./utils/icon-weather.ts";

export const WeatherBlock = () => {
  const [city, setCity] = useState<string>("Нижний Новгород");
  const [temperature, setTemperature] = useState<string | number>("");
  const [weather, setWeather] = useState<string>("");
  const [weatherIcon, setWeatherIcon] = useState<string | undefined>("https://cdn-icons-png.flaticon.com/512/1888/1888282.png");

  useEffect(() => {
    const fetchWeather = async (cityName: string) => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=ru&appid=acd4f346c669d7400f4dbbeb7f1350e0`
        );
        if (!res.ok) {
          throw new Error(
            `Ошибка при получении погоды: ${res.status} ${res.statusText}`
          );
        }
        const { main, name, weather } = await res.json();
        setCity(name);
        setTemperature(Math.round(main.temp));
        setWeather(weather[0].description);
        setWeatherIcon(createWeatherIcon(weather[0].description));
      } catch (error: any) {
        console.error("Ошибка:", error.message);
        await fetchWeather("Tomsk");
      }
    };

    const fetchLocation = async () => {
      try {
        const response = await fetch("https://api.sypexgeo.net/json/");
        if (!response.ok) {
          throw new Error("Не удалось получить данные по местоположению");
        }
        const data = await response.json();
        const currentCityName = data.city.name_en || "Tomsk";
        await fetchWeather(currentCityName);
      } catch (error) {
        console.warn(
          "Не удалось получить данные по местоположению. Используется город по умолчанию: Tomsk"
        );
        await fetchWeather("Tomsk");
      }
    };

    fetchLocation();
  }, []);

  return (
    <div className={styles.footer_weather}>
      <div>
        {city},{" "}
        <div>
          {new Date().toLocaleDateString("ru", {
            day: "numeric",
            month: "long",
          })}
        </div>
      </div>
      <div className={styles.footer_weather_text}>
        <div className={styles.footer_weather_block}>
          <div>{weather}</div>
          <div>
            {temperature}°C
            <img
              className={styles.footer_weather_icon}
              src={weatherIcon}
              alt="weather-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
