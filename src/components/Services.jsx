import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Web Development",
      desc: "I transform ideas into reality using a diverse range of programming languages like HTML, CSS, JavaScript, and React, creating websites with efficient, clean code for optimal performance.",
      icon: "fas fa-palette",
    },
    {
      name: "fully responsive",
      desc: "With my expertise in HTML, CSS, JavaScript, and React, I can build flexible and adaptable interfaces that can be customized and updated easily.",
      icon: "fas fa-desktop",
    },
    {
      name: "Web Hosting",
      desc: "I provide end-to-end web hosting solutions, managing domain names, server space, and ensuring secure and reliable hosting, so your website is easily accessible to users.",
      icon: "fas fa-chart-area",
    },
    {
      name: "SEO Optimization",
      desc: "I enhance your website's search engine visibility and attract targeted traffic through effective SEO techniques, boosting your rankings and reaching potential customers.",
      icon: "fas fa-bullhorn",
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Services
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What I Do?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
