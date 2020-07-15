import React, { useState } from "react";
import Fundation from "./Pages/Fundation";
import NonGovernment from "./Pages/NonGovernment";
import Local from "./Pages/Local";
import data from "../data/data";
import OrganizationsList from "./OrganizationsList";

console.log(data.fundations);

export default function Pagination() {
  const [page, setPage] = useState("NonGovernment");
  const chandleFundation = () => {
    setPage("Fundation");
  };
  const chandleNonGovernment = () => {
    setPage("NonGovernment");
  };
  const chandleLocal = () => {
    setPage("Local");
  };

  if (page === "Fundation") {
    return (
      <>
        <Fundation
          onHandle1={chandleFundation}
          onHandle2={chandleNonGovernment}
          onHandle3={chandleLocal}
        ></Fundation>
        {data.fundations.map((item, index) => (
          <OrganizationsList key={index} item={item} />
        ))}
      </>
    );
  } else if (page === "NonGovernment") {
    return (
      <>
        <NonGovernment
          onHandle1={chandleFundation}
          onHandle2={chandleNonGovernment}
          onHandle3={chandleLocal}
        ></NonGovernment>
        {data.nonGovernment.map((item, index) => (
          <OrganizationsList key={index} item={item} />
        ))}
      </>
    );
  } else if (page === "Local") {
    return (
      <>
        <Local
          onHandle1={chandleFundation}
          onHandle2={chandleNonGovernment}
          onHandle3={chandleLocal}
        ></Local>
        {data.local.map((item, index) => (
          <OrganizationsList key={index} item={item} />
        ))}
      </>
    );
  }
}
