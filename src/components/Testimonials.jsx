import React from "react";
import Slider from "react-slick";

const Testimonials = ({ classicHeader, darkTheme }) => {
  const reviews = [
    {
      name: "Maria zack",
      // position: "User from USA",
      src: "images/testimonial/client-sm-3.jpg",
      desc: "I am incredibly impressed with the work Sosina did on my website.she's not only delivered a visually appealing design but also ensured that it was user-friendly and responsive across all devices.",
      rating: 5,
    },
    {
      name: "Muluken Melese",   
      src: "images/testimonial/client-sm-1.jpg",
      desc: "I highly recommend Sosina for anyone in need of a website.She was able to transform my outdated site into a modern and sleek platform that has significantly improved my online presence.",
      rating: 5,
    },
    {
      name: "Patrick Cary",  
      src: "images/testimonial/client-sm-2.jpg",
      desc: "I am extremely grateful for the exceptional work Sosina did on my e-commerce website. She seamlessly integrated a secure payment gateway, implemented an intuitive user interface, and optimized the site for search engines. Thanks to their expertise, my online sales have skyrocketed!",
      rating: 5,
    },
    {
      name: "Chris Tom",   
      src: "images/testimonial/client-sm-4.jpg",
      desc: "I am extremely grateful for the exceptional work Sosina did on my e-commerce website. She seamlessly integrated a secure payment gateway, implemented an intuitive user interface, and optimized the site for search engines. Thanks to their expertise, my online sales have skyrocketed!",
      rating: 5,
    },
  ];

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section
      id="testimonial"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5 ">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Testimonial
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Client Speak
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}

        <Slider {...settings}>
          {reviews.length > 0 &&
            reviews.map((value, index) => (
              <div className="item" key={index}>
                <div
                  className={
                    " rounded p-5 " + (darkTheme ? "bg-dark" : "bg-light")
                  }
                >
                  <div className="d-flex align-items-center mt-auto mb-4">
                    <img
                      className="img-fluid rounded-circle border d-inline-block w-auto"
                      src={value.src}
                      alt=""
                    />
                    <p className=" mb-0">
                      <strong
                        className={
                          "d-block fw-600 " +
                          (darkTheme ? "text-white" : "text-dark")
                        }
                      >
                        {value.name}
                      </strong>
                      <span className="text-muted fw-500">
                        {" "}
                        {value.position}{" "}
                      </span>
                    </p>
                  </div>
                  <p
                    className={
                      " fw-500 mb-4 " + (darkTheme ? "text-white" : "text-dark")
                    }
                  >
                    “{value.desc}”
                  </p>
                  <span className="text-2">
                    {[...Array(value.rating)].map((value, i) => (
                      <i className="fas fa-star text-warning" key={i} />
                    ))}
                  </span>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
