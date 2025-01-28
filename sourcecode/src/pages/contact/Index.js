const Contact = () => {
  return (
    <div className="ui-contact">
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
            <form>
              <div className="form-element">
                <label>Name </label>
                <input type="text" placeholder="Enter your name..." />
              </div>
              <div className="form-element">
                <label>Mobile Number </label>
                <input type="text" placeholder="Enter your Mobile Number..." />
              </div>
              <div className="form-element">
                <label>Email ID </label>
                <input type="text" placeholder="Enter your Email ID..." />
              </div>
            </form>
            <button className="btn-secondary">Contact me</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
