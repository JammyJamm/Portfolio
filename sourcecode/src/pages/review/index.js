import "./style.scss";
import { ReactComponent as Waymo } from "../assert/waymo.svg";
import { useEffect, useState } from "react";
const Review = () => {
  const [isActive, setIsActive] = useState("Arun Praveen");

  const reviewData = [
    {
      name: "Arun Praveen",
      rating: 5,
      review: `“Awesome website! Easy to use and edit, it has a lot of options
                to design whatever you need, it is professional and fun. I was
                very successful creating my profile using designer which gave me
                unbelievable reach & appreciation.”`,
      company: "Creative Synergies Group",
      imageURL:
        "https://github.com/JammyJamm/Portfolio/blob/main/sourcecode/src/pages/assert/senthamil.jpg?raw=true",
    },
    {
      name: "Dinesh Pandian",
      rating: 5,
      review: `“Awesome website! Easy to use and edit, it has a lot of options
              to design whatever you need, it is professional and fun. I was
              very successful creating my profile using designer which gave me
              unbelievable reach & appreciation.”`,
      company: "Creative Synergies Group",
      imageURL:
        "https://github.com/JammyJamm/Portfolio/blob/main/sourcecode/src/pages/assert/senthamil.jpg?raw=true",
    },
  ];
  // Carosel Code
  // useEffect(() => {
  //   let timmer = 0;
  //   setInterval(() => {
  //     console.log(reviewData[timmer].name);
  //     if (timmer != reviewData.length - 1) timmer++;
  //     else timmer = 0;
  //     setIsActive(reviewData[timmer].name);
  //   }, 6000);
  // }, []);
  return (
    <div className="ui-review ">
      <div className="container-fluid ">
        <div
          className="col"
          style={{ flexDirection: "column", justifyContent: "center" }}
        >
          <div className="box col-6 text">
            <h1>Valuable feedback from my Managers</h1>
          </div>

          {reviewData.map((data) => {
            return (
              <div
                key={data.name}
                className={
                  isActive == data.name
                    ? "col hori_center active"
                    : "col hori_center"
                }
                style={{ flexDirection: "row", height: "auto" }}
              >
                <div className="col-4 experience">
                  <div className="box text">
                    <img src={data.imageURL} alt="" />
                  </div>
                </div>
                <div className="col-8 text">
                  {/* <h3>Waymo</h3>*/}
                  <p>{data.review}</p>
                  <label>-- {data.name}</label>
                  <br></br>
                  <span>{data.company}</span>
                </div>
              </div>
            );
          })}
          <div className="year">
            <Waymo />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Review;
