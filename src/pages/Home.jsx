import Clock from "../components/Clock";
import HourPrayer from "../components/HourPrayer";
import Weather from "../components/Weather";

function Home() {
  return (
    <section id="pageHome">
      <div className="container">
        <div className="imgHome">
          <img src="./images/mosquee2.jpg" alt="image de la mosquée de Rodez" />
        </div>
        <div className="presentation">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            distinctio assumenda numquam dolorum voluptas sapiente recusandae
            soluta rem commodi qui praesentium quisquam nostrum, blanditiis
            illo, itaque laudantium quasi sint consectetur!
          </p>
        </div>
      </div>
      {/* <div className="info-container">
        <HourPrayer />
        <Clock />
        <Weather />
      </div> */}
    </section>
  );
}
export default Home;
