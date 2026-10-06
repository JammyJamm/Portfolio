import React, { useEffect, useState, useRef } from "react";
import "./style.scss";

const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartXRef = useRef(null);

  const reviewData = [
    {
      name: "Mr. Arun Praveen",
      rating: 5,
      review:
        "Strong real-time experience in IoT solutions with an excellent understanding of user experience. Demonstrates the ability to design intuitive, practical, and user-friendly interfaces for complex IoT and industrial applications. His UX approach and attention to usability contribute significantly to delivering effective digital experiences.",
      project: "Waymo Automation | WENZEL | Wiggins Lift",
      company: "Creative Synergies Group",
    },
    {
      name: "Mr. Dinesh Pandian",
      rating: 5,
      review:
        "Strong experience in e-commerce and SAP Hybris website development, with a focus on responsive design, usability, and consistent UI experiences. Demonstrates good understanding of modern web development practices and the ability to deliver responsive, scalable, and user-friendly e-commerce solutions.",
      project:
        "Heatcraft Refrigeration – Middle East | Heatcraft – intelliGen | Heatcraft – Brazil",
      company: "Lennox India Technology Centre Private Limited",
    },
    {
      name: "Mrs. Jaya Lakshmi",
      rating: 5,
      review:
        "Strong experience in designing company websites and connected IoT device experiences. Demonstrates a good understanding of UX design, responsive interfaces, usability, and user-centered design principles. Contributes effectively to creating intuitive digital experiences across web and connected-device platforms.",
      project:
        "Lennox India – Company Website | Lennox India – S40 & E30 Smart Thermostat",
      company: "Randstad India Private Limited",
    },
    {
      name: "Mr. Azeem",
      rating: 5,
      review:
        "Strong experience in e-commerce website development with a focus on responsive, user-friendly, and visually consistent interfaces. Demonstrates good understanding of modern UI development practices, responsive design, and delivering scalable digital experiences for business applications.",
      project: "HYFRA | Kysor Warren",
      company: "Infoville Solutions India Private Limited",
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
    }, 7000);

    return () => clearInterval(timer);
  }, [reviewData.length]);

  const handleTouchStart = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartXRef.current - touchEndX;
    touchStartXRef.current = null;

    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const activeReview = reviewData[currentSlide];

  return (
    <div className="ui-review">
      <div className="container-fluid review-fluid-wrap">
        <div className="review-main-col">
          {/* Section Heading */}
          <div className="review-heading-wrap text">
            <h2>Valuable Feedback from My Managers</h2>
          </div>

          {/* Active Review Card */}
          <div
            className="review-card-wrap"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="review-card">
              <div
                className="rating-stars"
                aria-label={`Rating: ${activeReview.rating} out of 5 stars`}
              >
                {"★".repeat(activeReview.rating)}
              </div>

              <blockquote className="review-quote">
                "{activeReview.review}"
              </blockquote>

              <div className="review-author-meta">
                <span className="author-name">{activeReview.name}</span>
                <span className="author-company">{activeReview.company}</span>
                {activeReview.project && (
                  <span className="author-projects">
                    {activeReview.project}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="carousel-controls">
            <button
              type="button"
              className="carousel-btn"
              onClick={prevSlide}
              aria-label="Previous review"
            >
              ‹
            </button>

            <div className="carousel-dots" role="tablist">
              {reviewData.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`dot ${currentSlide === index ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to review ${index + 1}`}
                  role="tab"
                  aria-selected={currentSlide === index}
                />
              ))}
            </div>

            <button
              type="button"
              className="carousel-btn"
              onClick={nextSlide}
              aria-label="Next review"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
