import React, { useMemo, useState } from "react";
import interviewData from "./interviewData.json";
import "./style.scss";

const Interview = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openQuestionId, setOpenQuestionId] = useState(
    interviewData[0] ? interviewData[0].id : null,
  );

  const categories = useMemo(
    () => ["All", ...new Set(interviewData.map(({ category }) => category))],
    [],
  );

  const visibleQuestions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return interviewData.filter(({ answer, category, question }) => {
      const matchesCategory =
        activeCategory === "All" || category === activeCategory;
      const matchesQuery =
        !query ||
        `${question} ${answer} ${category}`.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  const expandedQuestionId = visibleQuestions.some(
    ({ id }) => id === openQuestionId,
  )
    ? openQuestionId
    : null;

  return (
    <main className="ui-interview">
      <div className="container-fluid">
        <div className="interview-content">
          <header className="interview-header">
            <span className="interview-eyebrow">A little about my work</span>
            <h1>Interview Q&amp;A</h1>
            <p>
              A quick overview of my experience, approach, and the way I work.
            </p>
          </header>

          <div className="interview-tools">
            <label className="interview-search">
              <span className="interview-search-icon" aria-hidden="true">
              </span>
              <span className="visually-hidden">Search questions and answers</span>
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search questions..."
              />
            </label>

            <div
              className="interview-categories"
              role="group"
              aria-label="Filter by topic"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`interview-category${activeCategory === category ? " is-active" : ""}`}
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <section className="interview-list" aria-label="Interview questions">
            <div className="interview-result-count" aria-live="polite">
              {visibleQuestions.length}{" "}
              {visibleQuestions.length === 1 ? "question" : "questions"}
            </div>

            {visibleQuestions.length > 0 ? (
              visibleQuestions.map(({ answer, category, id, question }, index) => {
                const isOpen = id === expandedQuestionId;
                const answerId = `interview-answer-${id}`;

                return (
                  <article
                    className={`interview-item${isOpen ? " is-open" : ""}`}
                    key={id}
                  >
                    <button
                      type="button"
                      className="interview-question"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() =>
                        setOpenQuestionId(isOpen ? null : id)
                      }
                    >
                      <span className="interview-question-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="interview-question-copy">
                        <span className="interview-question-category">
                          {category}
                        </span>
                        <span className="interview-question-title">
                          {question}
                        </span>
                      </span>
                      <span className="interview-toggle" aria-hidden="true">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        className="interview-answer"
                        id={answerId}
                        role="region"
                        aria-label={`Answer: ${question}`}
                      >
                        <p>{answer}</p>
                      </div>
                    )}
                  </article>
                );
              })
            ) : (
              <p className="interview-empty">
                No questions found. Try a different search or topic.
              </p>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default Interview;
