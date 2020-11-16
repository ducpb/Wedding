import React from "react";
import small_km from "../../images/small_km.png";

const Ex013 = () => {
  return (
    <div className="footer-home typography" style={{ height: "100vh" }}>
      <div className="container_common">
        <div className="content_common" style={{ paddingTop: "30vh" }}>
          <h2 className="special_thanks" style={{fontFamily: 'Source Sans Pro'}}>Special Thanks</h2>
          <span className="line1" />
          <a href="https://ducpb.github.io/wedding/" className="logo_ft">
            <img src={small_km} style={{ margin: "auto" }} />
          </a>
          <span className="line2" />
        </div>
      </div>

      <div className="decor_left">
        <img
          className="decor_ft"
          src="https://tita.wedding/wp-content/themes/main/assets/images/common/decor_ft_left.png"
          alt="Wedding"
        />
        <img
          className="decor_ft_m"
          src="https://tita.wedding/wp-content/themes/main/assets/images/common/decor_ft_left_m.png"
          alt="Wedding"
        />
      </div>
      <div className="decor_right">
        <img
          src="https://tita.wedding/wp-content/themes/main/assets/images/common/decor_ft_right.png"
          alt="Wedding"
        />
      </div>
    </div>
  );
};

export default Ex013;
