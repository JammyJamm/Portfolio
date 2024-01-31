import heroimg from "../assert/home.svg";
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
            <button className="btn">Get Start Now</button>
            <button className="btn">Watch Video</button>
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
