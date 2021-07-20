import React from "react";

const SoundcloudWidget = () => {
  return (
    <div className="widget-container">
      <iframe
        title="soundcloud-widget-scaleless"
        width="50%"
        height="300"
        scrolling="yes"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1289546872&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
    </div>
  );
};

export default SoundcloudWidget;
