const Mouse = (prop) => {
  console.log(prop.epic);
  return (
    <div className="ui-mouse col hori_center verti_center">
      <div className="year">
        <div className="line"></div>
        <div className="col hori_center verti_center">
          {prop.epic.map((list) => {
            return (
              <div className="list" style={{ width: "25%" }}>
                <label>{list.organization}</label>
                <p>
                  {list.startYear} - {list.endYear}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="block">
        <div className="wheel"></div>
        <p>Scroll down</p>
      </div>
    </div>
  );
};
export default Mouse;
