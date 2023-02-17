import React from "react";

const Introduction = () => {
  const imageUrl = "assets/images/introduction.png";

  return (
    <div className="introduction container">
      <img src={imageUrl} alt="introduction_image" />
    </div>
  );
};

export default Introduction;
