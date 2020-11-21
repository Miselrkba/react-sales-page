import React from "react";

function Homepage() {
  return (
    <div>
      <div className="purple navbar">
        <h1>Title</h1>
      </div>
      <div className='question-container'>
      <div className="purple question-box">question1</div>
      <div className="purple question-box">question2</div>
      <div className="purple question-box">question3</div>
      </div>
      <div className='feature-container'>
        <div className="purple feature">Feature1</div>
        <div className="purple feature">Feature2</div>
        <div className="purple feature">Feature3</div>
      </div>
      <div className='feature-heading-container'>
        <h1 className="feature-header">Feature1</h1>
        <h1 className="feature-header">Feature2</h1>
        <h1 className="feature-header">Feature3</h1>
      </div>
      <div className="purple footer">question bottom</div>
      <button className='btn'>Contact Us</button>
    </div>
  );
}

export default Homepage;
