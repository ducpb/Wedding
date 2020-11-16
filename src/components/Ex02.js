import React from "react";
import codau from "../images/codau.jpg";
import codau_mobi from "../images/codau_mobi.png";
import chu_linh from "../images/mai.png";

const Ex02 = () => {
    return (
        <div className="bride-page typography" id="bride-id">
            <div className="section-fullbackground codau">
                <div className="background-section desktop">
                    <div
                        className="image"
                        style={{
                            backgroundImage: `url(${codau})`
                        }}
                    ></div>
                </div>
                <div
                    className="background-section mobi"
                    style={{
                        backgroundImage: `url(${codau_mobi})`
                    }}
                ></div>
                <div className="container">
                    <div className="box-text">
                        <h2>
                            <img src={chu_linh} />
                        </h2>
                        <p className="discription">
                            Có duyên có nợ tơ hồng<br />
              Trăm năm hạnh phúc tình không đổi dời<br />
              Rước em về với cuộc đời<br />
              Cùng anh chia sẻ ngọt bùi bên nhau.
            </p>
                    </div>
                    <div class="go-to-ivitation">
                        <a href="#thiep-moi" id="ivitation-bride" ><span style={{ fontSize: '20px' , fontFamily: 'Source Sans Pro'}}>THIỆP MỜI</span> </a>
                    </div>

                    <div className="back-button">
                        <a href="#back" id="back-bride">
                            <span></span>{" "}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ex02;