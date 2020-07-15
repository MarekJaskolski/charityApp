import React from "react";

export default function OrganizationList({ item }) {
  return (
    <div className="container">
      <div className="row line">
        <div className="col-9">
          <h2>Organizacja: {item.name}</h2>
          <p>Cel i misja: {item.aim}</p>
        </div>
        <div className="col-3">
          <p>{item.basket.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
