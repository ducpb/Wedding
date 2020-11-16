import React from "react";
import chure from "../images/chure.jpg";
import chure_mobi from "../images/chure_mobi.jpg";
import chu_san from "../images/khuong.png";

const Ex03 = () => {
  return (
    <div className="groom-page typography" id="groom-id">
      <div className="section-fullbackground chure">
        <div className="background-section desktop">
          <div
            className="image"
            style={{
              backgroundImage: `url(${chure})`
            }}
          ></div>
        </div>
        <div
          className="background-section mobi"
          style={{
            backgroundImage: `url(${chure_mobi})`
          }}
        ></div>
        <div className="container">
          <div className="box-text">
            <h2>
              <img src={chu_san} />
            </h2>
            <p className="discription">
              Tình yêu lớn nhất<br /> không phải là yêu nhiều người.<br />
              Mà là ...yêu một người và yêu đến hết cuộc đời <br />
              Cảm ơn em đã đến bên anh.
            </p>
          </div>

          <div class="go-to-ivitation">
            <a href="#thiep-moi" id="ivitation-groom"><span style={{ fontSize: '20px' }}>THIỆP MỜI</span> </a>
          </div>

          <div className="back-button" id="back-groom">
            <a href="#back">
              <span></span>{" "}
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Ex03;
