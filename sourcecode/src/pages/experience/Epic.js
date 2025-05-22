const Epic = (prop) => {
  return (
    <div className="epic">
      <div className="listBlock">
        {prop.epic.map((list) => {
          return (
            <>
              {/* <div className="list" style={{ width: "25%" }}> */}
              <div className="list">
                <label>{list.organization}</label>
                <p>
                  {list.startYear} - {list.endYear}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Epic;
