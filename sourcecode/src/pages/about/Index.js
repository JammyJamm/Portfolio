import "./style.scss";
const About = () => {
  return (
    <div className="ui-about ">
      <div className="container-fluid ">
        <div className="col hori_center">
          <div className="col-6">
            <div className="box">
              <b>10</b>
              <label>Label</label>
              <p>Name</p>
            </div>
          </div>
          <div className="col-6">
            <h1>Title</h1>
            <p>Best way to expore, helping others</p>
            <button className="btn-secondary">Contact me</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
