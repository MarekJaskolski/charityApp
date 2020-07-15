import React from "react";
import Decoration from "../assets/Decoration.svg";
import Signature from "../assets/Signature.svg";

export default function AboutUs() {
  return (
    <div className="container" id="about-us">
      <div className="row about-us-section">
        <div className="col-6 about-us-section-left">
          <h2>O nas</h2>
          <img src={Decoration}></img>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="col-12">
            <img src={Signature}></img>
          </div>
        </div>
        <div className="col-6 picture-about"></div>
      </div>
    </div>
  );
}
