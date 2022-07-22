import Banner from "../components/banner";
import { Link } from "react-router-dom";
import logements from "../data/logements.json";
import Thumbnail from "../components/thumbnail";
import { useEffect, useState } from "react";

function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchJSON = () => {
      fetch("src/data/logements.json")
        .then((res) => res.text())
        .then(
          () => {
            setIsLoaded(true);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    };

    fetchJSON();
  }, []);

  return error ? (
    <p>Erreur </p>
  ) : !isLoaded ? (
    <p>loading... </p>
  ) : (
    <div className="home-container">
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
