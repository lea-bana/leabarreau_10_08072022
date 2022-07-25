import logements from "../data/logements.json";
import { useParams } from "react-router-dom";
import Carrousel from "../components/carrousel";
import Collapse from "../components/collapse";
import Error from "./error";
import Host from "../components/host";
import Tags from "../components/tags";
import Rating from "../components/rating";

function Accomodation() {
  const { id } = useParams();
  const accomodationById = logements.logements.find((house) => house.id === id);
  //console.log(accomodationById);

  if (!accomodationById) {
    return <Error />;
  } else {
    return (
      <div className="wrapper">
        <div className="accomodation-page">
          <Carrousel pictures={accomodationById.pictures} />
          <div className="info">
            <div className="info-top">
              <div className="info-accomodation">
                <h1>{accomodationById.title}</h1>
                <p>{accomodationById.location}</p>
              </div>
              <Tags listTags={accomodationById.tags} />
            </div>
            <div className="profile">
              <Host
                picture={accomodationById.host.picture}
                name={accomodationById.host.name}
              />
              <Rating ratingValue={accomodationById.rating} />
            </div>
          </div>

          <section className="dropdowns">
            <Collapse
              title="Description"
              content={accomodationById.description}
            />
            <Collapse
              title="Équipements"
              content={accomodationById.equipments}
            />
          </section>
        </div>
      </div>
    );
  }
}
export default Accomodation;
