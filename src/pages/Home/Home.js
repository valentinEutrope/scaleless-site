import React from "react";

import Introduction from "components/Introduction";
import Gallery from "components/Gallery";
import Listen from "components/Listen";
import Bio from "components/Bio";
import Title from "components/Title";
import images from "config/images.json";

const Home = () => {
  return (
    <div className="home">
      <Introduction />
      <div className="section">
        <Title>Biographie</Title>
        <Bio />
      </div>
      <div className="section">
        <Title>Galeries</Title>
        <Gallery images={images.mistrust} />
      </div>
      <div className="section">
        <Title>Ecoute</Title>
        <Listen />
      </div>
    </div>
  );
};

export default Home;
