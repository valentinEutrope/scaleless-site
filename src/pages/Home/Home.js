import React from "react";

import Gallery from "../../components/Gallery";
import SoundcloudWidget from "../../components/SoundcloudWidget";

const Home = () => {
  return (
    <div>
      <div className="section">
        <Gallery />
      </div>
      <div className="section">
        <h2 className="section__title">Ecoute</h2>
        <SoundcloudWidget />
      </div>
    </div>
  );
};

export default Home;
