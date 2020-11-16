import a11 from "../images/a1/a1.jpg";
import a12 from "../images/a1/a2.jpg";
import a13 from "../images/a1/a3.jpg";
import a14 from "../images/a1/a4.jpg";
import a15 from "../images/a1/a5.jpg";
import a16 from "../images/a1/a6.jpg";
import a21 from "../images/a2/a1.jpg";
import a22 from "../images/a2/a2.jpg";
import a23 from "../images/a2/a3.jpg";
import a24 from "../images/a2/a4.jpg";
import a25 from "../images/a2/a5.jpg";
import a26 from "../images/a2/a6.jpg";
import a31 from "../images/a3/a1.jpg";
import a32 from "../images/a3/a2.jpg";
import a33 from "../images/a3/a3.jpg";
import a34 from "../images/a3/a4.jpg";
import a35 from "../images/a3/a5.jpg";
import a36 from "../images/a3/a6.jpg";

const Ex05 = () => {
    return (
        <div className="popup-album-image-m" id="popup-album-image-m">
            <button className="btn-close" id="btn-close-album-popup-m">
                <img src="https://tita.wedding/wp-content/themes/main/assets/images/common/close.png" alt="Close" />
            </button>
            <div className="owl-carousel owl-loaded owl-drag" id="owl-carousel-popup">
                <div className="owl-stage-outer">
                    <div className="owl-stage" style={{ transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '19880px' }}>
                        <div className="owl-item active" style={{ width: '350px', marginRight: '5px' }}>
                            <div><img className=" lazyloaded" data-src={a11} alt=""
                                src={a11} />
                            </div>
                        </div>   
                        <div className="owl-item active" style={{ width: '350px', marginRight: '5px' }}>
                            <div><img className=" lazyloaded" data-src={a12} alt=""
                                src={a12} />
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: '350px', marginRight: '5px' }}>
                            <div><img className=" lazyloaded" data-src={a11} alt=""
                                src={a13} />
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: '350px', marginRight: '5px' }}>
                            <div><img className=" lazyloaded" data-src={a11} alt=""
                                src={a14} />
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: '350px', marginRight: '5px' }}>
                            <div><img className=" lazyloaded" data-src={a11} alt=""
                                src={a15} />
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: '350px', marginRight: '5px' }}>
                            <div><img className=" lazyloaded" data-src={a11} alt=""
                                src={a16} />
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: '350px', marginRight: '5px' }}>
                            <div><img className=" lazyloaded" data-src={a11} alt=""
                                src={a21} />
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: '350px', marginRight: '5px' }}>
                            <div><img className=" lazyloaded" data-src={a11} alt=""
                                src={a22} />
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: '350px', marginRight: '5px' }}>
                            <div><img className=" lazyloaded" data-src={a11} alt=""
                                src={a23} />
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: '350px', marginRight: '5px' }}>
                            <div><img className=" lazyloaded" data-src={a11} alt=""
                                src={a24} />
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: '350px', marginRight: '5px' }}>
                            <div><img className=" lazyloaded" data-src={a11} alt=""
                                src={a25} />
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: '350px', marginRight: '5px' }}>
                            <div><img className=" lazyloaded" data-src={a11} alt=""
                                src={a26} />
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: '350px', marginRight: '5px' }}>
                            <div><img className=" lazyloaded" data-src={a11} alt=""
                                src={a31} />
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: '350px', marginRight: '5px' }}>
                            <div><img className=" lazyloaded" data-src={a11} alt=""
                                src={a32} />
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: '350px', marginRight: '5px' }}>
                            <div><img className=" lazyloaded" data-src={a11} alt=""
                                src={a33} />
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: '350px', marginRight: '5px' }}>
                            <div><img className=" lazyloaded" data-src={a11} alt=""
                                src={a34} />
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: '350px', marginRight: '5px' }}>
                            <div><img className=" lazyloaded" data-src={a11} alt=""
                                src={a35} />
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: '350px', marginRight: '5px' }}>
                            <div><img className=" lazyloaded" data-src={a11} alt=""
                                src={a36} />
                            </div>
                        </div>                 
                    </div>
                </div>
                <div className="owl-nav">
                    <button type="button" role="presentation" className="owl-prev disabled">
                        <span aria-label="Previous">‹</span>
                    </button>
                    <button type="button" role="presentation" className="owl-next">
                        <span aria-label="Next">›</span>
                    </button>
                </div>
                <div className="owl-dots disabled" />
            </div>
        </div>

    );
}

export default Ex05;