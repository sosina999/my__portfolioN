import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    DESIGN: "E-COMMERCE",
    BRAND: "MEDIA",
    PHOTOS: "WEB-CONFRENCING",
  };

  const projectsData = [
    {
      title: "Apple_react",
      projectInfo:
        "This Apple Page project combines React hooks, states, and routes, along with Bootstrap and jQuery, to deliver a dynamic and visually stunning user experience. Explore the power of seamless state management, effortless navigation, and responsive design in this engaging project.",
      technologies: "React.js, HTML5, CSS3, MY-SQL, JavaScript",
      date: "July 16, 2022",
      url: {
        name: "www.apple-clone.com",
        link: "https://apple-page-using-react-app.netlify.app/iphone",
      },
    
      thumbImage: "/images/projects/apple-react.jpeg",
      // sliderImages: [
      //   "images/projects/project-1.jpg",
      //   "images/projects/project-5.jpg",
      // ],
      categories: [filters.DESIGN],
    },
    {
      title: "Netflix clone",
      projectInfo:
        "This Netflix project combines React hooks, states, and routes, along with Bootstrap and jQuery, to deliver a dynamic and visually stunning user experience.",
      client: "",
      technologies: "React, HTML5, CSS3, Axios, Javascript",
      date: "April 16, 2021",
      url: {
        name: "www.netflix-clone.com",
        link: "https://netflix-clone-f0c27.firebaseapp.com/",
      },
     
      thumbImage: "images/projects/netflix.jpeg",
      // sliderImages: [
      //   "images/projects/project-2.jpg",
      //   "images/projects/project-5.jpg",
      // ],
      categories: [filters.BRAND],
    },
    {
      title: "Amazone clone",
      projectInfo:
        "",
      technologies: "React, HTML5, CSS3, JavaScript",
      date: "July 16, 2019",
      url: {
        name: "www.amazon-clone.com",
        link: "https://clone-10387.web.app/",
      },
      thumbImage: "images/projects/amazon.jpeg",
      // sliderImages: [
      //   "images/projects/project-3.jpg",
      //   "images/projects/project-5.jpg",
      // ],
      categories: [filters.DESIGN],
    },
    {
      title: "Evangadi Forum",
      projectInfo:
        "This is one of my final projects I did during my 6+ month boot camp at Evangadi as MERN stack web developer.",
    
      technologies: "React, HTML5, CSS3, Axios, JavaScript",
      date: "feb 20, 2023",
      url: {
        name: "www.evangadiForum.com",
        link: "https://95d4a41c.evangadi-forum-frontend-67r.pages.dev/login",
      },
   
      thumbImage: "images/projects/evangadiForum.png",
      // sliderImages: [
      //   "images/projects/project-1.jpg",
      //   "images/projects/project-4.jpg",
      // ],
      categories: [filters.BRAND],
    },
    {
      title: "Gritch_Restaurant",
      projectInfo:
        "",
      client: "Ling Mach",
      technologies: " HTML5, CSS3, JavaScript",
      date: "July 16, 2019",
      url: {
        name: "www.Gritch_restaurant.com",
        link: "https://gritchrestaurant.netlify.app/",
      },
   
      thumbImage: "images/projects/restaurant.jpeg",
      // sliderImages: [
      //   "images/projects/project-1.jpg",
      //   "images/projects/project-5.jpg",
      // ],
      categories: [filters.PHOTOS],
    },
  
    {
      title: "apple-bootstrap",
      projectInfo:
        "",
      technologies: "Bootstrap, HTML5, CSS3, JavaScript",
      date: "Jan 1, 2020",
      // url: {
      //   name: "www.apple_bootstrap.com",
      //   link: "https://646411c510ff603104f48880--transcendent-florentine-e26a9f.netlify.app/",
      // },
    
      thumbImage: "images/projects/apple-bootstrap.jpeg",
      sliderImages: [
        "images/projects/project-1.jpg",
        "images/projects/project-5.jpg",
      ],
      categories: [filters.DESIGN],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
      >
        <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2
              className={
                "text-24  text-uppercase fw-600 w-100 mb-0 " +
                (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
              }
            >
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">Category</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
