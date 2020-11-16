import React from "react";
import MP3 from '../music/ngay_cuoi.mp3'
const Music = () => {
  return (
    <>
      <button className="btn-music" id="btnMusic">
        <span>
          <img
            src="https://tita.wedding/wp-content/themes/main/assets/images/common/pause.png"
            alt="pause"
          />
          <img
            className="is-active"
            src="https://tita.wedding/wp-content/themes/main/assets/images/common/play.png"
            alt="pause"
          />
        </span>
        <span>Music</span>
      </button>
      <audio
        id="myAudio"
        autoPlay
        src={MP3}
        loop
      />
    </>
  );
};

export default Music;
