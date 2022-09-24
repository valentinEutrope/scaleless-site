import React from "react";
import SoundcloudWidget from "../../components/SoundcloudWidget";
import Bio from "../../components/Bio";

const Home = () => {
  return (
    <div className="section">
      <h2 className="section__title">Biographie</h2>
      <Bio />
      <h2 className="section__title">Ecoute</h2>
      <SoundcloudWidget />
    </div>
  );
};

export default Home;
