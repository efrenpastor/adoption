import React from "react";
import { Link } from "react-router-dom";

class DogDetail extends React.Component {
  render() {
    const dog = this.props.dog;
    return (
      <article className="dogDetail">
        <img className="dogDetail__image" src={dog.src} alt={dog.name} />
        <div class="dogDetail__properties">
          <span>
            <strong>Skill:</strong>
            {dog.skill}
          </span>
          <span>
            <strong>Vaccunation:</strong>
            {dog.vaccunation}
          </span>
        </div>
        <p class="dogDetail__description">{dog.description}</p>
        <Link to={`/thanks/${dog.key}`}>
          <button className="btnFlat btnFlat--center">Addopt</button>
        </Link>
      </article>
    );
  }
}

export default DogDetail;
