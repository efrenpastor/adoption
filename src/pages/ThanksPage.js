import React from "react";
import Dogs from "../model/Dogs";
import { Link } from "react-router-dom";

class ThanksPage extends React.Component {
  render() {
    const { id } = this.props.match.params;
    const dog = Dogs.filter(e => e.key === Number(id));
    return (
      <section class="thanksPage">
        <p className="thanksPage__description">
          Thanks for your request to adopt our puddle{" "}
          <strong>{dog[0].name}</strong>
        </p>
        <Link to="/">
          <button className="btnFlat btnFlat--center">Back to home</button>
        </Link>
      </section>
    );
  }
}

export default ThanksPage;
