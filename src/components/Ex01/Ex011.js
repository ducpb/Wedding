import React from "react";
import Logo from "../../images/logo.png";
import Story from "../../images/story.png";
import Bia from "../../images/bia.jpg";

const Ex011 = () => {
  return (
    <section className="h-section1">
      <div className="banner_image">
        <div className="video">
          <video
            muted
            id="myVideo"
            loop="true"
            preload="metadata"
            poster={Bia}
            playsInline
            autoPlay
            src=""
          />
        </div>
      </div>

      <div className="des">
        <a href="https://ducpb.github.io/wedding">
          <img src={Logo} />
        </a>

        <p className="lable-tita">
          <img width={285} src={Story} alt="https://ducpb.github.io/wedding" />
        </p>

        <p className="label-save" style={{ fontSize: '10px' ,fontFamily: 'Source Sans Pro'}}>Save the date</p>
        <p className="label-date" style={{ fontSize: '30px' ,fontFamily: 'Source Sans Pro'}}>22 - 11</p>
      </div>

      <button className="btn-redirect left" id="redirect-bride">
        <p className="label">
          <img
            width={103}
            src="https://tita.wedding/wp-content/themes/main/assets/images/common/cd.png"
            alt="https://ducpb.github.io/wedding"
          />
        </p>
        <span className="redirect">
          <img
            src="https://tita.wedding/wp-content/themes/main/assets/images/common/left.png"
            alt="Wedding"
          />
        </span>
      </button>

      <button className="btn-redirect right" id="redirect-groom">
        <p className="label">
          <img
            width={103}
            src="https://tita.wedding/wp-content/themes/main/assets/images/common/cr.png"
            alt="https://ducpb.github.io/wedding"
          />
        </p>
        <span className="redirect">
          <img
            src="https://tita.wedding/wp-content/themes/main/assets/images/common/right.png"
            alt="Wedding"
          />
        </span>
      </button>

      <button className="down-screen" id="down-screen">
        <img
          src="https://tita.wedding/wp-content/themes/main/assets/images/common/down.png"
          alt="Wedding"
        />
      </button>
    </section>
  );
};

export default Ex011;
