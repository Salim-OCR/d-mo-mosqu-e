import { useEffect, useState } from "react";
import axios from "axios"; // Importez Axios

function HourPrayer() {
  const [prayerData, setPrayerData] = useState([]);

  useEffect(() => {
    const fetchPrayerData = async () => {
      try {
        const response = await axios.get(
          "https://api.aladhan.com/v1/calendarByCity?city=Rodez&country=France"
        );
        setPrayerData(response.data.data);
      } catch (error) {
        console.error("Error fetching prayer data:", error);
      }
    };

    fetchPrayerData();
  }, []);

  const currentDate = new Date();

  // Filtre les données pour obtenir les horaires de prière d'aujourd'hui
  const prayerTimingsToday = prayerData.filter((item) => {
    const prayerDate = new Date(item.date.readable);
    return (
      prayerDate.getDate() === currentDate.getDate() &&
      prayerDate.getMonth() === currentDate.getMonth() &&
      prayerDate.getFullYear() === currentDate.getFullYear()
    );
  });

  return (
    <div id="hourPrayer">
      {prayerTimingsToday.length > 0 ? (
        <>
          <h4>
            Aujourd'hui nous sommes le :{" "}
            <span>
              {currentDate.toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </h4>
          <ul>
            <li>Fajr : {prayerTimingsToday[0].timings.Fajr.split(" ")[0]} </li>
            <li>
              Lever du soleil :{" "}
              {prayerTimingsToday[0].timings.Sunrise.split(" ")[0]}{" "}
            </li>
            <li>Dohr : {prayerTimingsToday[0].timings.Dhuhr.split(" ")[0]} </li>
            <li>
              Maghreb : {prayerTimingsToday[0].timings.Maghrib.split(" ")[0]}{" "}
            </li>
            <li>Isha : {prayerTimingsToday[0].timings.Isha.split(" ")[0]} </li>
          </ul>
        </>
      ) : (
        "Les horaires de prière pour aujourd'hui ne sont pas disponibles."
      )}
    </div>
  );
}

export default HourPrayer;
