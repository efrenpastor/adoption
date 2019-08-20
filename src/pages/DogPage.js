import React from "react";
import Dogs from "../model/Dogs";
import DogDetail from "../components/DogDetail";

class DogPage extends React.Component {
  render() {
    const { id } = this.props.match.params;
    const dog = Dogs.filter(e => e.key === Number(id))[0];
    return (
      <section class="wrapper wrapper--small">
        <DogDetail dog={dog} />
      </section>
    );
  }
}

export default DogPage;
