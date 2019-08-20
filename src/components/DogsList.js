import React from "react";
import { Link } from "react-router-dom";

class DogsList extends React.Component {
  renderItem(dog) {
    return (
      <li key={dog.key}>
        <Link to={`/dog/${dog.key}`}>
          <img src={dog.src} alt={dog.name} />
          <span>{dog.name}</span>
        </Link>
      </li>
    );
  }

  render() {
    return <ul className="dogList">{this.props.items.map(this.renderItem)}</ul>;
  }
}

export default DogsList;
