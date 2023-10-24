import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function CalendarPrayerRodez() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.aladhan.com/v1/calendarByCity?city=Rodez&country=France"
      )
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      });
  }, []);

  return (
    <div className="hourCalendarPrayerRodez">
      <ul>
        {data.map((calendar, index) => (
          <Card key={index} calendar={calendar} />
        ))}
      </ul>
    </div>
  );
}
export default CalendarPrayerRodez;
