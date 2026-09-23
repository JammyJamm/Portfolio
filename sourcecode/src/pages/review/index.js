import "./style.scss";

import { ReactComponent as Waymo } from "../assert/waymo.svg";
import { useEffect, useState } from "react";

const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviewData = [
    {
      name: "Mr. Arun Praveen",
      rating: 5,
      review:
        "Strong real-time experience in IoT solutions with an excellent understanding of user experience. Demonstrates the ability to design intuitive, practical, and user-friendly interfaces for complex IoT and industrial applications. His UX approach and attention to usability contribute significantly to delivering effective digital experiences.",
      project: "Waymo Automation | WENZEL | Wiggins Lift",
      company: "Creative Synergies Group",
      imageURL:
        "https://github.com/JammyJamm/Portfolio/blob/main/sourcecode/src/pages/assert/senthamil.jpg?raw=true",
    },

    {
      name: "Mr. Dinesh Pandian",
      rating: 5,
      review:
        "Strong experience in e-commerce and SAP Hybris website development, with a focus on responsive design, usability, and consistent UI experiences. Demonstrates good understanding of modern web development practices and the ability to deliver responsive, scalable, and user-friendly e-commerce solutions.",
      project:
        "Heatcraft Refrigeration – Middle East | Heatcraft – intelliGen | Heatcraft – Brazil",
      company: "Lennox India Technology Centre Private Limited",
      imageURL:
        "https://github.com/JammyJamm/Portfolio/blob/main/sourcecode/src/pages/assert/senthamil.jpg?raw=true",
    },

    {
      name: "Mrs. Jaya Lakshmi",
      rating: 5,
      review:
        "Strong experience in designing company websites and connected IoT device experiences. Demonstrates a good understanding of UX design, responsive interfaces, usability, and user-centered design principles. Contributes effectively to creating intuitive digital experiences across web and connected-device platforms.",
      project:
        "Lennox India – Company Website | Lennox India – S40 & E30 Smart Thermostat",
      company: "Randstad India Private Limited",
      imageURL:
        "https://github.com/JammyJamm/Portfolio/blob/main/sourcecode/src/pages/assert/senthamil.jpg?raw=true",
    },

    {
      name: "Mr.Azeem",
      rating: 5,
      review:
        "Strong experience in e-commerce website development with a focus on responsive, user-friendly, and visually consistent interfaces. Demonstrates good understanding of modern UI development practices, responsive design, and delivering scalable digital experiences for business applications.",
      project: "HYFRA | Kysor Warren",
      company: "Infoville Solutions India Private Limited",
      imageURL:
        "https://github.com/JammyJamm/Portfolio/blob/main/sourcecode/src/pages/assert/senthamil.jpg?raw=true",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviewData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + reviewData.length) % reviewData.length,
    );
  };

  // Automatic carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviewData.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [reviewData.length]);

  const activeReview = reviewData[currentSlide];

  return (
    <div className="ui-review">
      <div className="container-fluid">
        <div
          className="col"
          style={{
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Heading */}
          <div className="box col-6 text">
            <h1>Valuable feedback from my Managers</h1>
          </div>

          {/* Review */}
          <div
            className="col hori_center review-slide"
            style={{
              flexDirection: "row",
              height: "auto",
            }}
          >
            {/* Image */}
            {/* <div className="col-4 experience">
               <div className="box text">
                <img src={activeReview.imageURL} alt={activeReview.name} />
              </div> 
            </div> */}

            {/* Review Content */}
            <div className="col-8 text">
              <div className="rating">{"★".repeat(activeReview.rating)}</div>

              <p>{activeReview.review}</p>

              <label>-- {activeReview.name}</label>
              <br />
              <span>{activeReview.company}</span>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="carousel-controls">
            {/* <button
              className="carousel-btn"
              onClick={prevSlide}
              aria-label="Previous review"
            >
              ‹
            </button> */}

            <div className="carousel-dots">
              {reviewData.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${currentSlide === index ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            {/* <span>
              {currentSlide + 1} / {reviewData.length}
            </span> */}

            {/* <button
              className="carousel-btn"
              onClick={nextSlide}
              aria-label="Next review"
            >
              ›
            </button> */}
          </div>

          {/* Logo */}
          {/* <div className="year">
            <Waymo />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Review;
