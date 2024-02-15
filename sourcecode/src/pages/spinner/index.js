import "./style.scss";

const Spinner = () => {
  return (
    <div className="ui-spinner">
      <div className="ui-line">
        <div className="line"></div>
      </div>
      <div className="planFirst"></div>
      <div className="planSecond"></div>
    </div>
  );
};
export default Spinner;
