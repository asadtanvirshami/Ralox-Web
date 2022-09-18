import Image from 'next/image'
import React from "react";
import { Button, Container } from "react-bootstrap";
import arrow from "../../../public/arrow.png";
import img1 from "../../../public/YT.png";
import img2 from "../../../public/service1.jpg";
import img3 from "../../../public/website.png";
import img4 from "../../../public/app.png";
import img5 from "../../../public/seo.png";

export const ServicesSection = () => {
  return (
    <Container>
      <div className="services-main-div mt-5 ">
        <h1 className="text-center service-heading mb-5">Our Services</h1>
        <div className="justify-content-center row p-2">
          <div className="service-card col-md-3 mx-3">
            <Image src={img1} />
            <h4 className="text-center service-card-heading">
              YOUTUBE ADS MANAGEMENT
            </h4>
            <p className="service-text">
              YouTube has over 1.3 billion users and is the second-largest
              search engine in the world. The era of video is here, and YouTube
              is presenting a great opportunity for businesses to engage with
              potential customers. So having the right people beside you is
              vital. They would let you know how you can get a maximum bang for
              your buck. It is a fact that people could love or despise your ads
              within the first two seconds.
            </p>
            <div className="learnmore-div mt-5">
              <Button className="learnmore-btn px-2 pt-2">
                About us
                <span style={{ float: "right", marginTop: 2 }}>
                  <Image
                    height={25}
                    width={24}
                    src={arrow}
                    className="img-fluid"
                  />
                </span>
              </Button>
            </div>
          </div>
          <div className="service-card col-md-3 mx-3">
            <div className="mt-5">
              <Image src={img2} className="" />
            </div>
            <h4
              className="text-center service-heading"
              style={{ marginTop: 60 }}
            >
              FACEBOOK ADS MANAGEMENT
            </h4>
            <p className="service-text">
              Facebook is a must-use advertising channel for companies, with its
              massive audience and advanced targeting options. As more
              marketers’ flock to Facebook marketing, you need the best
              prodigies by your side. We run a CPA-focused approach to manage
              your campaign and bring the highest returns on your ad spend. Tell
              us all your Facebook media confusions and let our Ninjas handle
              the tough cookies!
            </p>
            <div className="learnmore-div mt-5">
              <Button className="learnmore-btn px-2 pt-2">
                About us
                <span style={{ float: "right", marginTop: 2 }}>
                  <Image
                    height={25}
                    width={24}
                    src={arrow}
                    className="img-fluid"
                  />
                </span>
              </Button>
            </div>
          </div>
          <div className="service-card col-md-3 mx-3">
            <div className="mt-5">
              <Image src={img3} className="" />
            </div>
            <h4
              className="text-center service-heading"
              style={{ marginTop: 64 }}
            >
              WEB DEVELOPMENT
            </h4>
            <p className="service-text">
              Website basically has become a symbol of trust nowadays which
              makes it a basic need of a business no matter big or small, and
              when it comes to basic needs, they need to be cheap and easy to
              get without any hassle. We bring you the best solution for your
              website needs no matter the requirements you have we provide you
              with the the best work that you need for your business growth.
            </p>
            <div className="learnmore-div" style={{marginTop:97}}>
              <Button className="learnmore-btn px-2 pt-2">
                About us
                <span style={{ float: "right", marginTop: 2 }}>
                  <Image
                    height={25}
                    width={24}
                    src={arrow}
                    className="img-fluid"
                  />
                </span>
              </Button>
            </div>
          </div>
          <div className="service-card col-md-3 mx-3">
            <div className="mt-5 px-5">
              <Image src={img4} height={200} width={200} className="" />
            </div>
            <h4
              className="text-center service-heading"
              style={{ marginTop: 61 }}
            >
              APP DEVELOPMENT
            </h4>
            <p className="service-text">
              Daily usage of mobile phone is increasing with each passing day.
              Which makes mobile applications a must, for which we bring you
              high performance cross-platform mobile apps (IOS and Android),
              which are functionally excellent and carry immersive user
              experience and popular design trends.
            </p>
            <div className="learnmore-div mt-5">
              <Button className="learnmore-btn px-2 pt-2" style={{marginTop:90}}>
                About us
                <span style={{ float: "right", marginTop: 2 }}>
                  <Image
                    height={25}
                    width={24}
                    src={arrow}
                    className="img-fluid"
                  />
                </span>
              </Button>
            </div>
          </div>
          <div className="service-card col-md-3 mx-3">
            <div className="mt-5">
              <Image src={img5} className="" />
            </div>
            <h4
              className="text-center service-heading"
              style={{ marginTop: 41 }}
            >
              SEO SERVICE
            </h4>
            <p className="service-text">
              SEO Service are highly targeted lately and can be set to bring
              your website on top and grab customers by their click. Benefiting
              you through building a presence on top of google page and raise
              your sales sky high with our on-page and off-page SEO. In other
              words you can say we tell google what to say.
            </p>
            <div className="learnmore-div" style={{marginTop:137}}>
              <Button className="learnmore-btn px-2 pt-2">
                About us
                <span style={{ float: "right", marginTop: 2 }}>
                  <Image
                    height={25}
                    width={24}
                    src={arrow}
                    className="img-fluid"
                  />
                </span>
              </Button>
            </div>
          </div>
          <div className="service-card col-md-3 mx-3">
            <div className="mt-5">
              <Image src={img3} className="" />
            </div>
            <h4
              className="text-center service-heading"
              style={{ marginTop: 61 }}
            >
              MACHINE LEARNING
            </h4>
            <p className="service-text">
              Machine Learning or automatic learning is a scientific field, and
              more specifically a subcategory of artificial intelligence. It
              consists of letting algorithms discover “patterns”, namely
              recurring patterns, in data sets. This data can be numbers, words,
              images, statistics. Anything that can be stored digitally can
              serve as data for Machine Learning. By detecting patterns in this
              data, algorithms learn and improve their performance in performing
              a specific task.
            </p>
            <div className="learnmore-div mt-5" style={{marginTop:147}}>
              <Button className="learnmore-btn px-2 pt-2">
                About us
                <span style={{ float: "right", marginTop: 2 }}>
                  <Image
                    height={25}
                    width={24}
                    src={arrow}
                    className="img-fluid"
                  />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default ServicesSection;
