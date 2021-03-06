import React from "react";
import Decoration from "../../assets/Decoration.svg";

export default function Fundation({ onHandle1, onHandle2, onHandle3 }) {
  return (
    <div className="container">
      <div className="col-12 row column">
        <h2>Komu pomagamy?</h2>
        <img src={Decoration}></img>
        <div className="row organization">
          <p className="border" onClick={onHandle1}>
            Fundacjom
          </p>
          <p onClick={onHandle2} className="border-white">
            Organizacjom pozarządowym
          </p>
          <p onClick={onHandle3} className="border-white">
            Lokalnym zbiórkom
          </p>
        </div>
        <p className="col-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
}
