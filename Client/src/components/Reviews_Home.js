import React, { Fragment } from "react";
import "../css/reviews_home.css";
import wedding from "../ReviewsImg/wedding.jpg";
import rocks from "../ReviewsImg/rocks.jpg";
import falls2 from "../ReviewsImg/falls2.jpg";
import paris from "../ReviewsImg/paris.jpg";
import nature from "../ReviewsImg/nature.jpg";
import mist from "../ReviewsImg/mist.jpg";
import underwater from "../ReviewsImg/underwater.jpg";
import ocean from "../ReviewsImg/ocean.jpg";
import mountainskies from "../ReviewsImg/mountainskies.jpg";

const Reviews_Home = () => {
  const mystyle1 = {
    textTransform: "uppercase",
    paddingTop: "16px",
    fontWeight: "400",
  };

  return (
    <Fragment>
      <center>
        <h3 className="box-title" style={mystyle1}>
          Reviews
        </h3>
      </center>
      <div className="review-size">
        <div class="row">
          <div class="column">
            <img src={wedding} />
            {/* <img src={rocks} /> */}
            {/* <img src={falls2} /> */}
            {/* <img src={paris} /> */}
            <img src={nature} />
            {/* <img src={mist} /> */}
            <img src={paris} />
          </div>
          <div class="column">
            {/* <img src={underwater} /> */}
            <img src={ocean} />
            {/* <img src={wedding} /> */}
            <img src={mountainskies} />
            {/* <img src={rocks} /> */}
            <img src={underwater} />
          </div>
          <div class="column">
            {/* <img src={wedding} /> */}
            {/* <img src={rocks} /> */}
            <img src={falls2} />
            {/* <img src={paris} /> */}
            <img src={nature} />
            {/* <img src={mist} /> */}
            <img src={paris} />
          </div>
          <div class="column">
            {/* <img src={underwater} /> */}
            <img src={ocean} />
            {/* <img src={wedding} /> */}
            <img src={mountainskies} />
            {/* <img src={rocks} /> */}
            <img src={underwater} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Reviews_Home;
