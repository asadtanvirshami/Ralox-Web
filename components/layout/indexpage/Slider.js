import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: false,
      nextArrow: false,
      arrows: false,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            slidesToScroll:1
          }
        }
      ]

    };
    return (
      <div className="text-center" >
        <div className="div-slider" style={{alignSelf:'center', justifyContent:'center'}}>
        <Slider ref={slider => (this.slider = slider)} {...settings} style={{alignSelf:'center', justifyContent:'center'}}>
          <div className="sc">
            <img src={"sp.png"}  className='img-fluid'/>
          </div>
          <div className="sc">
          <img src={"word.png"}  className='img-fluid'/>
          </div>
          <div className="sc">
          <img src={"op.png"}  className='img-fluid'/>
          </div>
          <div className="sc">
          <img src={"react.png"}  className='img-fluid'/>
          </div>
          <div className="sc">
          <img src={"py.png"}  className='img-fluid'/>
          </div>
          <div className="sc">
          <img src={"node.png"}  className='img-fluid'/>
          </div>
          <div className="sc">
          <img src={"dr.png"}  className='img-fluid'/>
          </div>
          <div className="sc">
          <img src={"mgdb.png"}  className='img-fluid'/>
          </div>
          <div className="sc">
          <img src={"sql.png"} />
          </div>
        </Slider>
        </div>
      </div>
    );
  }
}