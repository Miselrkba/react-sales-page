import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <div className="purple navbar">
        <h1>Amazing Product</h1>
      </div>
      <div className="question-container">
        <div className="purple question-box">Are you ... ? </div>
        <div className="purple question-box">Do you ...?</div>
        <div className="purple question-box">Have you ever?</div>
      </div>
      <div className="feature-container">
        <Link to="/feature1">
          <div className="purple feature"></div>
        </Link>
        <Link to="/feature2">
          <div className="purple feature"></div>
        </Link>
        <Link to="/feature3">
          <div className="purple feature"></div>
        </Link>
      </div>
      <div className="feature-heading-container">
        <h1 className="feature-header">Feature1</h1>
        <h1 className="feature-header">Feature2</h1>
        <h1 className="feature-header">Feature3</h1>
      </div>
      <div className="purple footer">
        Are you ready ...? Send us a message below
      </div>
      <button className="btn">Contact Us</button>
      <Link to="/signup">
        <button className="btn">Sign up</button>
      </Link>
    </div>
  );
}

export default Homepage;
