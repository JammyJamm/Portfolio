import React, { useEffect, useState, useRef } from "react";
import "./style.scss";

import { ReactComponent as AboutLanch } from "../assert/aboutLaunch.svg";
import { ReactComponent as Signature } from "../assert/signature.svg";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartXRef = useRef(null);

  const slides = [
    {
      title: "Gen AI Development",
      content: (
        <>
          Hands-on experience with Generative AI and AI-Assisted Development,
          applying Prompt Engineering, LLM Applications, Function Calling and
          Tool Use, Structured Outputs, AI Agents and Agentic Workflows, and
          AI-Assisted Documentation. Experienced in using AI to support software
          development, technical documentation, code understanding, workflow
          automation, and engineering productivity.
        </>
      ),
    },
    {
      title: "ReactJS",
      content: (
        <>
          4+ years of hands-on experience in developing modern, responsive, and
          scalable frontend applications using ReactJS, JavaScript, and
          TypeScript. Experienced in reusable components, component-based
          architecture, responsive layouts, state management, REST API
          integration, dynamic data rendering, form handling, routing, UI
          libraries, performance optimization, debugging, and maintainable
          frontend development. Collaborated with UX/UI designers, backend
          developers, QA engineers, and business stakeholders to deliver
          high-quality React-based applications.
        </>
      ),
    },
    {
      title: "UI Development",
      content: (
        <>
          9+ years of experience in translating UX designs and business
          requirements into production-ready interfaces. Skilled in HTML5, CSS3,
          JavaScript, TypeScript, Material UI, Bootstrap, responsive web
          development, reusable components, component-based architecture,
          accessibility, cross-browser compatibility, frontend performance, REST
          API integration, and maintainable UI development.
        </>
      ),
    },
    {
      title: "UX Design",
      content: (
        <>
          9+ years of experience in UX Design, creating user-centered,
          responsive, accessible, and scalable digital experiences. Skilled in
          UX research, user flows, information architecture, wireframing,
          hand-drawn sketches, mockups, prototypes, usability testing, design
          systems, visual design, interaction design, content strategy, and
          responsive layouts.
        </>
      ),
    },
    {
      title: "Industrial Activities",
      content: (
        <>
          Active participation in Agile/Scrum environments, technical training,
          knowledge-sharing sessions, workshops, design reviews, code reviews,
          and team collaboration. Experienced in working with Product Owners,
          Business Analysts, UX/UI Designers, Architects, Developers, and QA
          Engineers. Familiar with Azure DevOps, Git/GitHub, Jira, CI/CD,
          cloud-based development, testing, debugging, documentation, and
          production support.
        </>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

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

  return (
    <div className="ui-about">
      <div className="container-fluid">
        <div className="col hori_center about-layout-row">
          {/* Experience Year Box */}
          <div className="col-6 experience">
            <div className="box experience-years-box">
              <b>9</b>
              <label>Years of Experience</label>

              <AboutLanch
                className="about-launch-icon"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* About Me Content */}
          <div className="col-6 text about-text-col">
            <h1>About Me</h1>

            <div
              className="about-carousel"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="carousel-track"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {slides.map((slide, index) => (
                  <div className="carousel-slide" key={index}>
                    <h3>{slide.title}</h3>
                    <p>{slide.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="carousel-controls">
              <button
                type="button"
                className="carousel-btn"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                ‹
              </button>

              <div className="carousel-dots">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`dot ${currentSlide === index ? "active" : ""}`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                className="carousel-btn"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                ›
              </button>
            </div>

            {/* Contact & Signature */}
            <div className="btn-group signature about-signature-group">
              <button
                type="button"
                className="secondary-btn"
                onClick={() => (window.location.href = "tel:+917010314568")}
                aria-label="Contact by phone"
              >
                Contact me
              </button>

              <Signature className="signature-svg" aria-label="Senthamil Signature" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
