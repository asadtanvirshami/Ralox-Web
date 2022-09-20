import Image from "next/image";
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
          <div className="service-card col-md-3 mx-3" data-aos="flip-left">
            <Image src={img1} />
            <h4 className="text-center service-card-heading">
              YOUTUBE ADS MANAGEMENT
            </h4>
            <p className="service-text">
              YouTube ads is the best way to express your growing business to
              the audience since it allows you to engage using a video. So
              having the right people beside you is vital. They would let you
              know how you can get a maximum bang for your buck.
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
          <div className="service-card col-md-3 mx-3" data-aos="flip-left">
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
              massive audience and advanced targeting options. We run the best
              funnel approach to manage your campaign and bring the highest
              returns on your ad spending.
            </p>
            <div className="learnmore-div">
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
          <div className="service-card col-md-3 mx-3" data-aos="flip-left">
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
              Website is a symbol of trust nowadays which makes it a basic need
              of a business no matter big or small. We bring you the best
              solution for your website needs no matter the requirements you
              have we provide you with the best work.
            </p>
            <div className="learnmore-div">
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
          <div className="service-card col-md-3 mx-3" data-aos="flip-left">
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
              Mobile applications a must, for which we bring you high
              performance cross-platform mobile apps (IOS and Android), which
              are functionally excellent and carry immersive user experience and
              popular design trends.
            </p>
            <div className="learnmore-div">
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
          <div className="service-card col-md-3 mx-3" data-aos="flip-left">
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
              your sales sky high with our on-page and off-page SEO.
            </p>
            <div className="learnmore-div" >
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
          <div className="service-card col-md-3 mx-3" data-aos="flip-left">
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
              The Future is here, machine learning is taking the world by storm
              with its advancements, so we help you through it giving you the
              best solution relating data science, machine learning, artificial
              neural network and etc.
            </p>
            <div className="learnmore-div">
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
