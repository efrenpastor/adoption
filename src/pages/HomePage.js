import React from "react";
import DogsList from "../components/DogsList";

class HomePage extends React.Component {
  render() {
    return (
      <section className="dogPage">
        <div className="wrapper">
          <h1>Our Poddies are ready for adoption</h1>
          <DogsList items={this.props.items} />
        </div>
      </section>
    );
  }
}

export default HomePage;
