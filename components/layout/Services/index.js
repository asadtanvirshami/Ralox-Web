import React from "react";
import { Col, Row } from "react-bootstrap";
import ContactForm from "../../shared/ContactForm";
const index = () => {
  return (
    <div className="services-page-main">
      <div>
        <section className="servicespage-section-main">
          <div
            className="servicespage-content-div container"
            style={{ marginTop: 100, marginBottom:100 }}
          >
            <h1>End-to-end Digital Services</h1>
            <div className="col-md-7">
              <p>
                Whether it be an aesthetic web design, unique logo design,
                branding, digital marketing, video animation, or mobile
                application development, we’ve got you covered with a wide range
                of digital services. We pride ourselves on being up with the
                latest tool and technology. Our logo design services will give
                your brand a unique identity. We are not only a digital
                marketing nerd but also have expertise in creating, developing,
                and designing exquisite website designs at affordable prices.
              </p>
            </div>
          </div>
        </section>
        <section className="servicespage-section-2">
          <Row className="container">
            <Col md={6}>
              <div>
                <h3>Logo Design Brand Strategy</h3>
                <h5>Take Control of your Brand with Confidence</h5>
              </div>
              <div>
                <p>
                  Ralox Soft offers top-notch branding services that
                  are targeted, high-performing, and completely maintainable. We
                  aim to give your brand a unique identity by designing
                  exceptional logo designs. A combination of texts, colors,
                  graphics, and much more is included that shows the real
                  meaning of your brand effectively. We follow a complete brand
                  strategy that comprises:
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div>
                <h3>Website Development</h3>
                <h5>
                  Let the design and development experts take care of your
                  digital needs
                </h5>
              </div>
              <div>
                <p>
                  Do you want to create a customized, user-friendly, and highly
                  functional website for your business? Then connect with Ralox Soft!
                   Our team of artistic designers and
                  developers creates responsive and robust websites that grab
                  the attention of every kind of audience. We are highly skilled
                  in creating corporate, e-commerce, Shopify, B2B websites &
                  portal development. So, elevate your business in a short time
                  with our following top-rated website designs that includes:
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div>
                <h3>Mobile App Development</h3>
                <h5>We build amazing mobile apps for different platforms</h5>
              </div>
              <div>
                <p>
                  With the rise of mobile users, mobile compatibility is
                  everything. It’s extremely important that your app runs on
                  mobile devices as smoothly and efficiently as possible. Having
                  our own mobile app is something that can provide immeasurable
                  growth opportunities for your business. Our tech-savvy team
                  will deliver customized functionality, optimized
                  cross-platform compatibility and other useful features, all
                  integrated into your very own application.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div>
                <h3>Video Animation</h3>
                <h5>Bespoke Video Animations to explain complex idea!</h5>
              </div>
              <div>
                <p>
                  Simplified, short, and engaging animated videos are the key to
                  a solid explainer video. Ralox Soft offers video
                  animation services that give your viewers a clear
                  understanding of your brand. Our explainer video conveys the
                  right information to your targeted audience that also helps in
                  elevating your brand presence. Our talented animators,
                  storyboard creators, and renowned voice actors are experts in
                  writing, directing, and creating fresh animated videos.
                  Whether it be a 2D or 3D animation, storyboard or theme
                  designing, video production, or scriptwriting, we bring out
                  each service with uniqueness and fantasy.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div>
                <h3>Digital Marketing</h3>
                <h5>
                  Growing your business through the power of the Digital
                  Marketing
                </h5>
              </div>
              <div>
                <p>
                  Make an impactful online presence for your business with our
                  outstanding digital marketing services. We work by utilizing
                  the latest marketing tools and strategies that help in making
                  your brand top-rated among your competitors. Our digital
                  marketing services guarantee more leads and traffic to your
                  website, while our tech-savvy team works on promoting your
                  brand globally.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div>
                <h3>ERP/CRM Software</h3>
                <h5>Building custom web applications with high tech</h5>
              </div>
              <div>
                <p>
                  ERP is a type of business management software that allows a
                  company to manage and automate various functions such as
                  accounting, inventory management, human resources, and
                  customer service. CRM, on the other hand, is a type of
                  software that helps businesses manage their interactions with
                  customer.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div>
                <h3>Copy and Content Writing</h3>
                <h5>Writing with the attraction</h5>
              </div>
              <div>
                <p>
                  Content writing is the process of creating written material,
                  typically for digital media, such as websites, blogs, social
                  media, and other online platforms. The goal of content writing
                  is to engage and inform the target audience by providing
                  valuable and relevant information. Sales copywriting is a type
                  of writing that is used to persuade an audience to take a
                  specific action, such as making a purchase or signing up for a
                  service. It is typically used in advertising, direct mail, and
                  other forms of marketing.
                </p>
              </div>
            </Col>
          </Row>
          <div style={{marginTop:100}}>
          <ContactForm/>
          </div>
        </section>
      </div>
    </div>
  );
};

export default index;
