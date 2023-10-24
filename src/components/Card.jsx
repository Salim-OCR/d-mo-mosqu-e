function Card({ calendar }) {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  const isToday =
    calendar.date.hijri.day === currentDate.getDate() &&
    calendar.date.hijri.month.number - 1 === currentDate.getMonth() &&
    calendar.date.hijri.year === currentDate.getFullYear();

  return (
    <li className={`card ${isToday ? "today" : ""}`}>
      <div className="infos-calendrier-hijri">
        <div className="date">
          <h4>
            {calendar.date.hijri.day} - {calendar.date.hijri.month.en} -
            {calendar.date.hijri.year}
          </h4>
          <h4>{calendar.date.gregorian.date.split("-").join("/")}</h4>
        </div>
        <div className="timings">
          <p>Fajr : {calendar.timings.Fajr} </p>
          <p>Levé de soleil : {calendar.timings.Sunrise} </p>
          <p>Dhuhr : {calendar.timings.Dhuhr} </p>
          <p> Asr : {calendar.timings.Asr} </p>
          <p>Maghrib : {calendar.timings.Maghrib} </p>
          <p>Isha : {calendar.timings.Isha} </p>
        </div>
      </div>
    </li>
  );
}

export default Card;
