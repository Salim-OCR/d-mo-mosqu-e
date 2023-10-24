import { useEffect, useState } from "react";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          "https://api.airvisual.com/v2/nearest_city?lat=44.3500&lon=2.5700&key=b277d905-9b30-4690-b637-faeaf830df5c"
        );
        const data = await response.json();
        setWeatherData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div id="weather">
      {weatherData && (
        <>
          
          <h3>{weatherData.data.city} - {weatherData.data.country}</h3>
          <p>
            {weatherData.data.current.weather.tp}°{" "}
            <img
              src={`./images/icons/${weatherData.data.current.weather.ic}.svg`}
              alt="icon weather"
            />
          </p>
        </>
      )}
    </div>
  );
}

export default Weather;
