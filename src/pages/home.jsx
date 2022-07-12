import Banner from "../components/banner";
import { Link } from "react-router-dom";
import logements from "../data/logements.json";
import Thumbnail from "../components/thumbnail";

function Home() {
  return (
    /* coder si le fetch ne marche pas je reçois un mesage d'erreur-404????*/

    <div className="home_container">
      <Banner />
      <div className="accomodation-container">
        {logements.logements.map((house) => (
          <Link key={house.id} to={`logements/${house.id}`}>
            <Thumbnail image={house.cover} title={house.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Home;
