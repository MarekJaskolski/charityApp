import React, { useState, useEffect } from "react";

export default function OrganizationList({ data }) {
  const [dataInput, setData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [namesPerPage, setNamesPerPage] = useState(3);
  useEffect(() => {
    setData(data);
    setCurrentPage(1);
  }, [data]);
  const indexOfLast = currentPage * namesPerPage;
  const indexOfFirst = indexOfLast - namesPerPage;
  const currentData = dataInput.slice(indexOfFirst, indexOfLast);

  const handleClick = (event, index) => {
    setCurrentPage(index);
  };

  const elements = currentData.map((input, i) => {
    return (
      <div className="row list-box ">
        <div className="col-8">
          <h2>Organizacja: {input.name}</h2>
          <p>
            Cel i misja: <i>{input.aim}</i>
          </p>
        </div>
        <div className="col-4">
          <p>
            <i>{input.basket.join(", ")}</i>
          </p>
        </div>
      </div>
    );
  });

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(dataInput.length / 3); i++) {
    const element = (
      <li
        key={i}
        className={currentPage == i ? "activeLi" : ""}
        onClick={(e) => handleClick(e, i)}
      >
        {i}
      </li>
    );
    pageNumbers.push(element);
  }

  return (
    <>
      <div className="container" id="organizations">
        {elements}
      </div>
      <ul className=" container numbers">{pageNumbers}</ul>
    </>
  );
}
