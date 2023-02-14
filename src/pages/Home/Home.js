import React from "react";

import Gallery from "components/Gallery";
import SoundcloudWidget from "components/SoundcloudWidget";
import Bio from "components/Bio";
import images from "config/images.json";

const Home = () => {
  return (
    <div className="layout">
      <h2 className="layout__title">Biographie</h2>
      <Bio />
      <h2 className="layout__title">Galeries</h2>
      <Gallery images={images.mistrust} />
      <h2 className="layout__title">Ecoute</h2>
      <SoundcloudWidget />
    </div>
  );
};

export default Home;
