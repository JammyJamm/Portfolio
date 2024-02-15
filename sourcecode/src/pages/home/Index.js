import heroimg from "../assert/home.svg";
import arrowImg from "../assert/arrow.svg";
const HomePage = () => {
  return (
    <div className="container-fluid ui-homepage green">
      <div className="col hori_center">
        <div className="col-6">
          <h1>I have a Creative Idea to grow up your business</h1>
          <p>
            Wherther you hvae already have a website or you are geting started.
            Learn to build from me.
          </p>
          <div className="btn-group">
            <button className="primary-btn-icon">
              Get Start Now
              <img src={heroimg} />
            </button>
            <button className="secondary-btn">
              Watch Video
              <img src={arrowImg} />
            </button>
          </div>
          <div className="btn-group">
            <label>Follow Me: </label>
            <a href="#">
              <svg
                width="16"
                height="11"
                viewBox="0 0 16 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="null"
                class="svg replaced-svg"
              >
                <path
                  d="M10.4465 0.966662H14.439V1.931H10.4465V0.966662ZM6.44603 4.78216C7.32858 4.36176 7.79087 3.72219 7.79087 2.73395C7.79087 0.779374 6.32996 0.305176 4.6429 0.305176H0V10.1159H4.77298C6.5621 10.1159 8.24115 9.25915 8.24115 7.26672C8.24115 6.0354 7.65679 5.12486 6.44603 4.78216ZM2.16535 1.97882H4.19662C4.97911 1.97882 5.68155 2.19599 5.68155 3.10055C5.68155 3.93339 5.13521 4.26812 4.36073 4.26812H2.16535V1.97882ZM4.4768 8.45022H2.16335V5.74849H4.52283C5.47542 5.74849 6.0778 6.14498 6.0778 7.14917C6.0778 8.13741 5.35935 8.45022 4.4768 8.45022ZM16 6.667C16 4.56499 14.7652 2.81364 12.5318 2.81364C10.3605 2.81364 8.88355 4.44146 8.88355 6.57535C8.88355 8.78695 10.2824 10.3052 12.5318 10.3052C14.2349 10.3052 15.3376 9.54208 15.8679 7.91426H14.1408C13.9527 8.52195 13.1882 8.84074 12.5939 8.84074C11.4452 8.84074 10.8448 8.17128 10.8448 7.03361H15.986C15.992 6.91605 16 6.79252 16 6.667ZM10.8448 5.80229C10.9068 4.86784 11.5332 4.28406 12.4698 4.28406C13.4544 4.28406 13.9467 4.85987 14.0328 5.80229H10.8448Z"
                  fill="#12141D"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={heroimg} alt="homepage" />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
