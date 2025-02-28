import "./style.scss";
import Review1 from "../assert/senthamil.jpg";
import Review2 from "../assert/senthamil.jpg";
const Review = () => {
  const reviewData = [
    {
      name: "Arun Praveen",
      rating: 5,
      review: `“Awesome website! Easy to use and edit, it has a lot of options
                to design whatever you need, it is professional and fun. I was
                very successful creating my profile using designer which gave me
                unbelievable reach & appreciation.”`,
      company: "Creative Synergies Group",
      imageURL: { Review1 },
    },
    {
      name: "Dinesh Pandian",
      rating: 5,
      review: `“Awesome website! Easy to use and edit, it has a lot of options
              to design whatever you need, it is professional and fun. I was
              very successful creating my profile using designer which gave me
              unbelievable reach & appreciation.”`,
      company: "Creative Synergies Group",
      imageURL: { Review2 },
    },
  ];

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
            {
              console.log(data.imageURL.Review1);
            }
            return (
              <div
                key={data.name}
                className="col hori_center"
                style={{ flexDirection: "row", height: "auto" }}
              >
                <div className="col-4 experience">
                  <div className="box text">
                    <img src={Review1} alt="" />
                  </div>
                </div>
                <div className="col-8 text">
                  {/* <h3>Waymo</h3>*/}
                  <p>{data.review.Review1}</p>
                  <label>-- {data.name}</label>
                  <br></br>
                  <span>{data.company}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Review;
