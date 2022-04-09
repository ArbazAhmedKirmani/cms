import React, { Fragment, useState, useEffect } from "react";

const Website = () => {
  const [loading, setLoading] = useState(true);
  const [disableMessage, setDisableMessage] = useState(false);

  useEffect(() => {
    if (
      Intl.DateTimeFormat().resolvedOptions().timeZone.split("/")[0] === "Asia"
    )
      setDisableMessage(true);
    let timeoout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timeoout);
    };
  }, []);

  return (
    <div>
      <div>
        {loading ? (
          <div id="preloader" />
        ) : (
          <Fragment>
            {/* ======= Top Bar ======= */}
            {/* <section id="topbar" className="d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope-fill" />
              <a href="mailto:contact@example.com">info@example.com</a>
              <i className="bi bi-phone-fill phone-icon" /> +1 5589 55488 55
            </div>
            <div className="social-links d-none d-md-block">
              <a href="#" className="twitter">
                <i className="bi bi-twitter" />
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </section> */}
            {/* ======= Header ======= */}
            <header
              id="header"
              className="d-flex align-items-center"
              style={{ position: "fixed", zIndex: "9999", width: "100%" }}
            >
              <div className="container d-flex align-items-center justify-content-between">
                <h1 className="logo">
                  <a href="index.html">Eagle Stitches</a>
                </h1>
                {/* Uncomment below if you prefer to use an image logo */}
                {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt=''="" class="img-fluid"></a>*/}
                <nav id="navbar" className="navbar">
                  <ul>
                    <li>
                      <a className="nav-link scrollto" href="#hero">
                        Home
                      </a>
                    </li>
                    <li>
                      <a className="nav-link scrollto" href="#about">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="nav-link scrollto" href="#services">
                        Services
                      </a>
                    </li>
                    <li>
                      <a className="nav-link scrollto " href="#portfolio">
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a className="nav-link scrollto" href="#pricing">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a className="nav-link scrollto" href="#team">
                        Team
                      </a>
                    </li>
                    <li className="dropdown">
                      <a href="#">
                        <span>Drop Down</span>{" "}
                        <i className="bi bi-chevron-down" />
                      </a>
                      <ul>
                        <li>
                          <a href="#">Drop Down 1</a>
                        </li>
                        <li className="dropdown">
                          <a href="#">
                            <span>Deep Drop Down</span>{" "}
                            <i className="bi bi-chevron-right" />
                          </a>
                          <ul>
                            <li>
                              <a href="#">Deep Drop Down 1</a>
                            </li>
                            <li>
                              <a href="#">Deep Drop Down 2</a>
                            </li>
                            <li>
                              <a href="#">Deep Drop Down 3</a>
                            </li>
                            <li>
                              <a href="#">Deep Drop Down 4</a>
                            </li>
                            <li>
                              <a href="#">Deep Drop Down 5</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Drop Down 2</a>
                        </li>
                        <li>
                          <a href="#">Drop Down 3</a>
                        </li>
                        <li>
                          <a href="#">Drop Down 4</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="nav-link scrollto" href="#contact">
                        Contact
                      </a>
                    </li>
                    <li>
                      <button className="button button1">LOGIN</button>
                      {/* <div className="btn-divider"></div> */}
                      <button className="button button2">REGISTER</button>
                    </li>
                  </ul>
                  <i className="bi bi-list mobile-nav-toggle" />
                </nav>
                <div style={{ display: "flex" }}></div>
                {/* .navbar */}
              </div>
            </header>
            {/* End Header */}
            {/* ======= Hero Section ======= */}
            <section id="hero" className="d-flex align-items-center">
              <div
                className="container position-relative"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <h1>Welcome to Eagle Stitches</h1>
                <h2>Designers of your Choice ...</h2>
                <a href="#about" className="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
            </section>
            {/* End Hero */}
            <main id="main">
              {/* ======= About Section ======= */}
              <section id="about" className="about">
                <div className="container">
                  <div className="row">
                    <div
                      className="col-lg-6 order-1 order-lg-2"
                      data-aos="fade-left"
                    >
                      <img
                        src="assets/img/about.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div
                      className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
                      data-aos="fade-right"
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {/* <h3>
                    Eagle Stitches and Printing is providing you the platform to
                    have the best quality designs, Digitizing and Vector Work.
                    Our Business Model revolves around assisting Branded &
                    Promotional Manufacturers from all around the Globe. We
                    developed high quality digitized Embroidery Designs (LOGO),
                    or any design as per the satisfaction of the client. We
                    provide highly guaranteed and efficient digitizing and
                    vector art services. We have been engaged in this field for
                    over 16 years and now looking forward to serve more.
                  </h3> */}
                      <p className="fst-italic">
                        Eagle Stitches and Printing is providing you the
                        platform to have the best quality designs, Digitizing
                        and Vector Work. Our Business Model revolves around
                        assisting Branded & Promotional Manufacturers from all
                        around the Globe. We developed high quality digitized
                        Embroidery Designs (LOGO), or any design as per the
                        satisfaction of the client. We provide highly guaranteed
                        and efficient digitizing and vector art services. We
                        have been engaged in this field for over 16 years and
                        now looking forward to serve more.
                      </p>
                      {/* <ul>
                    <li>
                      <i className="bi bi-check-circle" /> Ullamco laboris nisi
                      ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="bi bi-check-circle" /> Duis aute irure dolor
                      in reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="bi bi-check-circle" /> Ullamco laboris nisi
                      ut aliquip ex ea commodo consequat. Duis aute irure dolor
                      in reprehenderit in voluptate trideta storacalaperda
                      mastiro dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p> */}
                    </div>
                  </div>
                </div>
              </section>
              {/* End About Section */}
              {/* ======= Why Us Section ======= */}
              <section id="why-us" className="why-us">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4" data-aos="fade-up">
                      <div className="box" style={{ height: "100%" }}>
                        <span>01</span>
                        <h4>Vectorizing Services</h4>
                        <p style={{ textAlign: "center" }}>
                          We are offering screen printing services with artists
                          who holds the magic in their hands &amp; can be
                          challenged by any vector artist in this world. We
                          accept non-redraw artwork for vectoring, cleaning up
                          of images, four color process separation, color
                          separation. If you want us to show you some sample of
                          what we’re capable of so please be our guest and have
                          a glimpse of magnificiency. It’s a process of image
                          cleaning where the artist show their skills and make a
                          poor quality image into high resolution one or a live
                          image into a cartoon character. We offer wide range of
                          services in including screen print art. No matter how
                          much complex the design is or how rough the image is
                          you will always find us on the best side. And we
                          always work on customer satisfaction. So, we provide
                          you the artwork with your complete satisfaction.
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 mt-4 mt-lg-0"
                      data-aos="fade-up"
                      data-aos-delay={150}
                    >
                      <div className="box" style={{ height: "100%" }}>
                        <span>02</span>
                        <h4>Digitizing Services</h4>
                        <p style={{ textAlign: "center" }}>
                          Digitizing is an art itself. How the stitches forms an
                          image on the shirt, cap, jacket etc. is a concept and
                          imaginary diagram which the digitizers feel and put
                          their best to design it. We have the designers who has
                          spent almost years of experience in this field and
                          know the depth of the design and detail of the LOGO.
                          Every designing company can give you the different
                          files because, they all see the art in their own way
                          and express it through the stitches. Modern embroidery
                          machines had given many color options to the designers
                          which enables them to digitize in multicolor with
                          ease. Usage of finer thread and high no. of stitches
                          can provide the finest quality with detailed
                          designing, but can also increase the cost of logo.
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 mt-4 mt-lg-0"
                      data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      <div className="box" style={{ height: "100%" }}>
                        <span>03</span>
                        <h4>Patch Services</h4>
                        <p style={{ textAlign: "center" }}>
                          Eagle Stitches is proud to introduce you to a
                          competitive and exceptional Embroidery Patch Service.
                          You will receive quality patches, speedy service,
                          transparency throughout the entire order process,
                          dedicated account support, and so much more. With the
                          tools and service features to assist you at every
                          stage of the decoration process, we provide a service
                          that assists our clients to grow their business and
                          retain their customers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Why Us Section */}
              {/* ======= Clients Section ======= */}
              <section id="clients" className="clients">
                <div className="container" data-aos="zoom-in">
                  <div className="row d-flex align-items-center">
                    <div className="col-lg-2 col-md-4 col-6">
                      <img
                        src="assets/img/clients/client-1.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                      <img
                        src="assets/img/clients/client-2.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                      <img
                        src="assets/img/clients/client-3.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                      <img
                        src="assets/img/clients/client-4.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                      <img
                        src="assets/img/clients/client-5.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                      <img
                        src="assets/img/clients/client-6.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </section>
              {/* End Clients Section */}
              {/* ======= Services Section ======= */}
              <section id="services" className="services">
                <div className="container">
                  <div className="section-title">
                    <span>Services</span>
                    <h2>Services</h2>
                    <p>
                      Sit sint consectetur velit quisquam cupiditate impedit
                      suscipit alias
                    </p>
                  </div>
                  <div className="row">
                    <div
                      className="col-lg-4 col-md-6 d-flex align-items-stretch"
                      data-aos="fade-up"
                    >
                      <div className="icon-box">
                        <div className="icon">
                          <i className="bx bxl-dribbble" />
                        </div>
                        <h4>
                          <a>Hat Digitizing</a>
                        </h4>
                        <p>
                          Our immensely skilled and artistically profound group
                          of digitizers can turn any and every of your designs
                          into extremely elegant customized cap embroidery
                          digitized designs, with complete accordance to the
                          details and specifications provided by the customer
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                      data-aos="fade-up"
                      data-aos-delay={150}
                    >
                      <div className="icon-box">
                        <div className="icon">
                          <i className="bx bx-file" />
                        </div>
                        <h4>
                          <a>Simple LOGO Digitizing</a>
                        </h4>
                        <p>
                          Digitizing a logo for embroidery is the process of
                          converting existing artwork like a company logo or
                          team emblem into a stitch file that an embroidery
                          machine can sew on a garment. Before any design can be
                          embroidered, it must be digitized. Digitizing is a
                          complex process that is both art and science
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                      data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      <div className="icon-box">
                        <div className="icon">
                          <i className="bx bx-tachometer" />
                        </div>
                        <h4>
                          <a>Puff Digitizing</a>
                        </h4>
                        <p>
                          In order to be familiar with what is puff digitizing,
                          one primary needs to recognize what embroidery really
                          is. The appropriate meaning of embroidery is the fine
                          art of needle effort. This is the fine art which is
                          completed by by means of the needle along with the
                          thread. 3D digitizing is also known as Puff Digitizing
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                      data-aos="fade-up"
                      data-aos-delay={450}
                    >
                      <div className="icon-box">
                        <div className="icon">
                          <i className="bx bx-world" />
                        </div>
                        <h4>
                          <a>Towel Digitizing</a>
                        </h4>
                        <p>
                          Towel Embroidery is a popular art in stitching
                          creative designs and puffs on towels
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                      data-aos="fade-up"
                      data-aos-delay={600}
                    >
                      <div className="icon-box">
                        <div className="icon">
                          <i className="bx bx-slideshow" />
                        </div>
                        <h4>
                          <a>Sleeves Digitizing</a>
                        </h4>
                        <p>
                          Now you can have amazingly well-crafted sleeves
                          designing services with a touch of professionalism
                          only
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                      data-aos="fade-up"
                      data-aos-delay={750}
                    >
                      <div className="icon-box">
                        <div className="icon">
                          <i className="bx bx-arch" />
                        </div>
                        <h4>
                          <a>Patch Digitizing</a>
                        </h4>
                        <p>
                          We are experts in making patches. You can visit our
                          gallery or give us a try, you will never ever gonna
                          regret this decision
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Services Section */}
              {/* ======= Cta Section ======= */}
              <section id="cta" className="cta">
                <div className="container" data-aos="zoom-in">
                  <div className="text-center">
                    <h3>Sign Up Now</h3>
                    <p>
                      We strive every day to make your business thrive. Sign Up
                      now and our Customer Service Team will contact you and
                      assist on your project.
                    </p>
                    <a className="cta-btn" href="#">
                      Sign Up Now
                    </a>
                  </div>
                </div>
              </section>
              {/* End Cta Section */}
              {/* ======= Portfolio Section ======= */}
              <section id="portfolio" className="portfolio">
                <div className="container">
                  <div className="section-title">
                    <span>Portfolio</span>
                    <h2>Portfolio</h2>
                    <p>With this have a look at our portfolio.</p>
                  </div>
                  <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 d-flex justify-content-center">
                      <ul id="portfolio-flters">
                        <li data-filter="*" className="filter-active">
                          All
                        </li>
                        <li data-filter=".filter-app">App</li>
                        <li data-filter=".filter-card">Card</li>
                        <li data-filter=".filter-web">Web</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="row portfolio-container"
                    data-aos="fade-up"
                    data-aos-delay={150}
                  >
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                      <img
                        src="assets/img/portfolio/portfolio-1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>App 1</h4>
                        <p>App</p>
                        <a
                          href="assets/img/portfolio/portfolio-1.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox preview-link"
                          title="App 1"
                        >
                          <i className="bx bx-plus" />
                        </a>
                        <a
                          href="portfolio-details.html"
                          className="details-link"
                          title="More Details"
                        >
                          <i className="bx bx-link" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                      <img
                        src="assets/img/portfolio/portfolio-2.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>Web 3</h4>
                        <p>Web</p>
                        <a
                          href="assets/img/portfolio/portfolio-2.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox preview-link"
                          title="Web 3"
                        >
                          <i className="bx bx-plus" />
                        </a>
                        <a
                          href="portfolio-details.html"
                          className="details-link"
                          title="More Details"
                        >
                          <i className="bx bx-link" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                      <img
                        src="assets/img/portfolio/portfolio-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>App 2</h4>
                        <p>App</p>
                        <a
                          href="assets/img/portfolio/portfolio-3.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox preview-link"
                          title="App 2"
                        >
                          <i className="bx bx-plus" />
                        </a>
                        <a
                          href="portfolio-details.html"
                          className="details-link"
                          title="More Details"
                        >
                          <i className="bx bx-link" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                      <img
                        src="assets/img/portfolio/portfolio-4.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>Card 2</h4>
                        <p>Card</p>
                        <a
                          href="assets/img/portfolio/portfolio-4.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox preview-link"
                          title="Card 2"
                        >
                          <i className="bx bx-plus" />
                        </a>
                        <a
                          href="portfolio-details.html"
                          className="details-link"
                          title="More Details"
                        >
                          <i className="bx bx-link" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                      <img
                        src="assets/img/portfolio/portfolio-5.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>Web 2</h4>
                        <p>Web</p>
                        <a
                          href="assets/img/portfolio/portfolio-5.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox preview-link"
                          title="Web 2"
                        >
                          <i className="bx bx-plus" />
                        </a>
                        <a
                          href="portfolio-details.html"
                          className="details-link"
                          title="More Details"
                        >
                          <i className="bx bx-link" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                      <img
                        src="assets/img/portfolio/portfolio-6.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>App 3</h4>
                        <p>App</p>
                        <a
                          href="assets/img/portfolio/portfolio-6.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox preview-link"
                          title="App 3"
                        >
                          <i className="bx bx-plus" />
                        </a>
                        <a
                          href="portfolio-details.html"
                          className="details-link"
                          title="More Details"
                        >
                          <i className="bx bx-link" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                      <img
                        src="assets/img/portfolio/portfolio-7.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>Card 1</h4>
                        <p>Card</p>
                        <a
                          href="assets/img/portfolio/portfolio-7.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox preview-link"
                          title="Card 1"
                        >
                          <i className="bx bx-plus" />
                        </a>
                        <a
                          href="portfolio-details.html"
                          className="details-link"
                          title="More Details"
                        >
                          <i className="bx bx-link" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                      <img
                        src="assets/img/portfolio/portfolio-8.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>Card 3</h4>
                        <p>Card</p>
                        <a
                          href="assets/img/portfolio/portfolio-8.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox preview-link"
                          title="Card 3"
                        >
                          <i className="bx bx-plus" />
                        </a>
                        <a
                          href="portfolio-details.html"
                          className="details-link"
                          title="More Details"
                        >
                          <i className="bx bx-link" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                      <img
                        src="assets/img/portfolio/portfolio-9.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>Web 3</h4>
                        <p>Web</p>
                        <a
                          href="assets/img/portfolio/portfolio-9.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox preview-link"
                          title="Web 3"
                        >
                          <i className="bx bx-plus" />
                        </a>
                        <a
                          href="portfolio-details.html"
                          className="details-link"
                          title="More Details"
                        >
                          <i className="bx bx-link" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Portfolio Section */}
              {/* ======= Pricing Section ======= */}
              <section id="pricing" className="pricing">
                <div className="container">
                  <div className="section-title">
                    <span>Pricing</span>
                    <h2>Pricing</h2>
                    <p>
                      Sit sint consectetur velit quisquam cupiditate impedit
                      suscipit alias
                    </p>
                  </div>
                  <div className="row">
                    <div
                      className="col-lg-4 col-md-6"
                      data-aos="zoom-in"
                      data-aos-delay={150}
                    >
                      <div
                        className="box"
                        style={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <h3>Chest / Caps Logo</h3>
                          <h4>
                            10-25 <sup>$</sup>
                            <span> / logo</span>
                          </h4>
                        </div>
                        <ul>
                          <li>UNLIMITED Stitches</li>
                          <li>Free Edits</li>
                          <li>Free Color Changes</li>
                          {/* <li className="na">Pharetra massa</li>
                      <li className="na">Massa ultricies mi</li> */}
                        </ul>
                        <div className="btn-wrap">
                          <a href="#" className="btn-buy">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 mt-4 mt-md-0"
                      data-aos="zoom-in"
                    >
                      <div className="box featured" style={{ height: "100%" }}>
                        <h3>Jacket Back</h3>
                        <h4>
                          30-75 <sup>$</sup>
                          {/* <span> / logo</span> */}
                        </h4>
                        <ul>
                          <li>Free Edits</li>
                          <li>Free Color Changes</li>
                          {/* <li>Nulla at volutpat dola</li>
                      <li>Pharetra massa</li>
                      <li className="na">Massa ultricies mi</li> */}
                        </ul>
                        <div className="btn-wrap">
                          <a href="#" className="btn-buy">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 mt-4 mt-lg-0"
                      data-aos="zoom-in"
                      data-aos-delay={150}
                    >
                      <div
                        className="box"
                        style={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <h3>Vector</h3>
                          <h4>
                            12-65 <sup>$</sup>
                            {/* <span> / logo</span> */}
                          </h4>
                        </div>
                        <ul>
                          <li>Depends upon the complexity of the artwork</li>
                          {/* <li>Nec feugiat nisl</li>
                      <li>Nulla at volutpat dola</li>
                      <li>Pharetra massa</li>
                      <li>Massa ultricies mi</li> */}
                        </ul>
                        <div className="btn-wrap">
                          <a href="#" className="btn-buy">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Pricing Section */}
              {/* ======= Team Section ======= */}
              <section id="team" className="team">
                <div className="container">
                  <div className="section-title">
                    <span>Team</span>
                    <h2>Team</h2>
                    <p>
                      Sit sint consectetur velit quisquam cupiditate impedit
                      suscipit alias
                    </p>
                  </div>
                  <div className="row">
                    <div
                      className="col-lg-4 col-md-6 d-flex align-items-stretch"
                      data-aos="zoom-in"
                    >
                      <div className="member">
                        <img src="assets/img/team/team-1.jpg" alt="" />
                        <h4>Walter White</h4>
                        <span>Chief Executive Officer</span>
                        <p>
                          Magni qui quod omnis unde et eos fuga et
                          exercitationem. Odio veritatis perspiciatis quaerat
                          qui aut aut aut
                        </p>
                        <div className="social">
                          <a>
                            <i className="bi bi-twitter" />
                          </a>
                          <a>
                            <i className="bi bi-facebook" />
                          </a>
                          <a>
                            <i className="bi bi-instagram" />
                          </a>
                          <a>
                            <i className="bi bi-linkedin" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 d-flex align-items-stretch"
                      data-aos="zoom-in"
                    >
                      <div className="member">
                        <img src="assets/img/team/team-2.jpg" alt="" />
                        <h4>Sarah Jhinson</h4>
                        <span>Product Manager</span>
                        <p>
                          Repellat fugiat adipisci nemo illum nesciunt voluptas
                          repellendus. In architecto rerum rerum temporibus
                        </p>
                        <div className="social">
                          <a>
                            <i className="bi bi-twitter" />
                          </a>
                          <a>
                            <i className="bi bi-facebook" />
                          </a>
                          <a>
                            <i className="bi bi-instagram" />
                          </a>
                          <a>
                            <i className="bi bi-linkedin" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 d-flex align-items-stretch"
                      data-aos="zoom-in"
                    >
                      <div className="member">
                        <img src="assets/img/team/team-3.jpg" alt="" />
                        <h4>William Anderson</h4>
                        <span>CTO</span>
                        <p>
                          Voluptas necessitatibus occaecati quia. Earum totam
                          consequuntur qui porro et laborum toro des clara
                        </p>
                        <div className="social">
                          <a>
                            <i className="bi bi-twitter" />
                          </a>
                          <a>
                            <i className="bi bi-facebook" />
                          </a>
                          <a>
                            <i className="bi bi-instagram" />
                          </a>
                          <a>
                            <i className="bi bi-linkedin" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Team Section */}
              {/* ======= Contact Section ======= */}
              <section id="contact" className="contact">
                <div className="container">
                  <div className="section-title">
                    <span>Contact</span>
                    <h2>Contact</h2>
                    <p>
                      Sit sint consectetur velit quisquam cupiditate impedit
                      suscipit alias
                    </p>
                  </div>
                  <div className="row" data-aos="fade-up">
                    <div className="col-lg-6">
                      <div className="info-box mb-4">
                        <i className="bx bx-map" />
                        <h3>Our Address</h3>
                        <p>A108 Adam Street, New York, NY 535022</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="info-box  mb-4">
                        <i className="bx bx-envelope" />
                        <h3>Email Us</h3>
                        <p>contact@example.com</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="info-box  mb-4">
                        <i className="bx bx-phone-call" />
                        <h3>Call Us</h3>
                        <p>+1 5589 55488 55</p>
                      </div>
                    </div>
                  </div>
                  <div className="row" data-aos="fade-up">
                    <div className="col-lg-6 ">
                      <iframe
                        className="mb-4 mb-lg-0"
                        src="https://www.google.com/maps/place/Millennium+Mall,+118+F-1+Main,+Rashid+Minhas+Rd,+Gulshan-e-Iqbal,+Karachi,+75300,+Pakistan/@24.901187,67.1155004,17z/data=!4m2!3m1!1s0x3eb33922488f3725:0x3bfde63eb356ebc0?hl=en-US&gl=BG"
                        // src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                        frameBorder={0}
                        style={{ border: 0, width: "100%", height: 384 }}
                        allowFullScreen
                      />
                    </div>
                    <div className="col-lg-6">
                      <form
                        action="forms/contact.php"
                        method="post"
                        role="form"
                        className="php-email-form"
                      >
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              id="name"
                              placeholder="Your Name"
                              required
                            />
                          </div>
                          <div className="col-md-6 form-group mt-3 mt-md-0">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder="Your Email"
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group mt-3">
                          <input
                            type="text"
                            className="form-control"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                            required
                          />
                        </div>
                        <div className="form-group mt-3">
                          <textarea
                            className="form-control"
                            name="message"
                            rows={5}
                            placeholder="Message"
                            required
                            defaultValue={""}
                          />
                        </div>
                        <div className="my-3">
                          <div className="loading">Loading</div>
                          <div className="error-message" />
                          <div className="sent-message">
                            Your message has been sent. Thank you!
                          </div>
                        </div>
                        <div className="text-center">
                          {!disableMessage ? (
                            <button type="submit">Send Message</button>
                          ) : (
                            <h5>Sorry! you can't send us Messages</h5>
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Contact Section */}
            </main>
            {/* End #main */}
            {/* ======= Footer ======= */}
            <footer id="footer">
              <div className="footer-top">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="footer-info">
                        <h3>Eagle Stitches</h3>
                        <p>
                          A108 Adam Street <br />
                          NY 535022, USA
                          <br />
                          <br />
                          <strong>Phone:</strong> +1 5589 55488 55
                          <br />
                          <strong>Email:</strong> info@example.com
                          <br />
                        </p>
                        <div className="social-links mt-3">
                          <a href="#" className="twitter">
                            <i className="bx bxl-twitter" />
                          </a>
                          <a href="#" className="facebook">
                            <i className="bx bxl-facebook" />
                          </a>
                          <a href="#" className="instagram">
                            <i className="bx bxl-instagram" />
                          </a>
                          <a href="#" className="google-plus">
                            <i className="bx bxl-skype" />
                          </a>
                          <a href="#" className="linkedin">
                            <i className="bx bxl-linkedin" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-6 footer-links">
                      <h4>Useful Links</h4>
                      <ul>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">Home</a>
                        </li>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">About us</a>
                        </li>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">Services</a>
                        </li>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">Terms of service</a>
                        </li>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">Privacy policy</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 footer-links">
                      <h4>Our Services</h4>
                      <ul>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">Web Design</a>
                        </li>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">Web Development</a>
                        </li>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">Product Management</a>
                        </li>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">Marketing</a>
                        </li>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">Graphic Design</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 footer-newsletter">
                      <h4>Our Newsletter</h4>
                      <p>
                        Tamen quem nulla quae legam multos aute sint culpa legam
                        noster magna
                      </p>
                      <form method="post">
                        <input type="email" name="email" />
                        <input type="submit" defaultValue="Subscribe" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="copyright">
                  © Copyright
                  <strong>
                    <span> Eagle Stitches</span>
                  </strong>
                  . All Rights Reserved
                </div>
                <div className="credits">
                  {/* All the links in the footer should remain intact. */}
                  {/* You can delete the links only if you purchased the pro version. */}
                  {/* Licensing information: https://bootstrapmade.com/license/ */}
                  {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/day-multipurpose-html-template-for-free/ */}
                  Designed by <a href="https://bootstrapmade.com/">YGen</a>
                </div>
              </div>
            </footer>
            {/* End Footer */}
            <a
              href="#"
              className="back-to-top d-flex align-items-center justify-content-center"
            >
              <i className="bi bi-arrow-up-short" />
            </a>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Website;
