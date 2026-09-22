import "./style.scss";

const NoPage = () => {
  return (
    <div className="ui-nopage">
      <div className="nopage-content">
        <div className="nopage-code">404</div>

        <h1>Page Not Found</h1>

        <p>
          Sorry, the page you're looking for doesn't exist or may have been
          moved.
        </p>
        <div className="btn-group">
          <button onClick={() => (window.location.href = "/")}>
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoPage;
