import Image from "next/image";
import React from "react";
import { Button, Container } from "react-bootstrap";
import arrow from "../../../public/arrow.png";
import img1 from "../../../public/YT.png";
import img2 from "../../../public/facebook.png";
import img3 from "../../../public/web.png";
import img4 from "../../../public/app.png";
import img5 from "../../../public/seo.png";
import img6 from "../../../public/machine.png";

export const ServicesSection = () => {
  return (
    <Container>
      <div className="services-main-div mt-5 ">
        <h1 className="text-center service-heading mb-5">Our Services</h1>
        <div className="justify-content-center row p-2">
          <div
            className="service-card col-md-3 mx-3"
            data-aos="flip-left"
            style={{}}
          >
            <div style={{}} className="image-div">
              <Image className="img-fluid" src={img1} height={480} width={500} />
            </div>
            <div style={{}}>
              <h4 className="text-center service-card-heading">
                YOUTUBE ADS MANAGEMENT
              </h4>
              <p className="service-text">
                YouTube ads is the best way to express your growing business to
                the audience since it allows you to engage using a video. So
                having the right people beside you is vital. They would let you
                know how you can get a maximum bang for your buck.
              </p>
            </div>
            <div
              className="learnmore-div "
              style={{}}
            >
              <Button className="learnmore-btn px-2 pt-2">
                Learn more
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
          <div
            className="service-card col-md-3 mx-3"
            data-aos="flip-left"
            style={{}}
          >
            <div style={{}} className="image-div">
              <Image src={img2} height={380} width={450} />
            </div>
            <div>
              <h4 className="text-center service-card-heading">
                FACEBOOK ADS MANAGEMENT
              </h4>
              <p className="service-text">
                Facebook is a must-use advertising channel for companies, with
                its massive audience and advanced targeting options. We run the
                best funnel approach to manage your campaign and bring the
                highest returns on your ad spending.
              </p>
            </div>
            <div
              className="learnmore-div "
              style={{}}
            >
              <Button className="learnmore-btn px-2 pt-2">
                Learn more
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
          <div
            className="service-card col-md-3 mx-3"
            data-aos="flip-left"
            style={{}}
          >
            <div style={{}} className="image-div">
              <Image src={img3} />
            </div>
            <div style={{}}>
              <h4 className="text-center service-card-heading">
                WEB DEVELOPMENT
              </h4>
              <p className="service-text">
                Website is a symbol of trust nowadays which makes it a basic
                need of a business no matter big or small. We bring you the best
                solution for your website needs no matter the requirements you
                have we provide you with the best work. A web application (web
                app) is accessed through a network.
              </p>
            </div>
            <div
              className="learnmore-div "
              style={{}}
            >
              <Button className="learnmore-btn px-2 pt-2">
                Learn more
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
          <div
            className="service-card col-md-3 mx-3"
            data-aos="flip-left"
            style={{}}
          >
            <div style={{}} className="image-div">
              <Image src={img4} height={250}  width={250}  />
            </div>
            <div style={{}}>
              <h4 className="text-center service-card-heading">
                APP DEVELOPMENT
              </h4>
              <p className="service-text">
                Android and iOS, Mobile applications a must, for which we bring
                you high performance cross-platform mobile apps (IOS and
                Android), which are functionally excellent and carry immersive
                user experience and popular design trends.
              </p>
            </div>
            <div
              className="learnmore-div "
              style={{}}
            >
              <Button className="learnmore-btn px-2 pt-2">
                Learn more
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
          <div
            className="service-card col-md-3 mx-3"
            data-aos="flip-left"
            style={{}}
          >
            <div style={{}} className="image-div">
              <Image src={img5} height={250} width={250} />
            </div>
            <div style={{}}>
              <h4 className="text-center service-card-heading">SEO SERVICE</h4>
              <p className="service-text">
                SEO Service are highly targeted lately and can be set to bring
                your website on top and grab customers by their click.
                Benefiting you through building a presence on top of google page
                and raise your sales sky high with our on-page and off-page SEO.
              </p>
            </div>
            <div
              className="learnmore-div "
              style={{}}
            >
              <Button className="learnmore-btn px-2 pt-2">
                Learn more
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
          <div
            className="service-card col-md-3 mx-3"
            data-aos="flip-left"
            style={{}}
          >
            <div style={{}} className="image-div">
              <Image src={img6} className="img-fluid" height={1650}/>
            </div>
            <div style={{}}>
              <h4 className="text-center service-card-heading">
                MACHINE LEARNING
              </h4>
              <p className="service-text">
                The Future is here, machine learning is taking the world by
                storm with its advancements, so we help you through it giving
                you the best solution relating data science, machine learning,
                artificial neural network and etc.
              </p>
            </div>
            <div
              className="learnmore-div "
              style={{}}
            >
              <Button className="learnmore-btn px-2 pt-2">
                Learn more
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
