import React, { useState } from "react";
import Fundation from "./Pages/Fundation";
import NonGovernment from "./Pages/NonGovernment";
import Local from "./Pages/Local";
import data from "../data/data";
import OrganizationsList from "./OrganizationsList";

console.log(data.fundations);

export default function Pagination() {
  const [page, setPage] = useState("NonGovernment");

  const handleFundation = () => {
    setPage("Fundation");
  };
  const handleNonGovernment = () => {
    setPage("NonGovernment");
  };
  const handleLocal = () => {
    setPage("Local");
  };

  if (page === "Fundation") {
    return (
      <>
        <Fundation
          onHandle1={handleFundation}
          onHandle2={handleNonGovernment}
          onHandle3={handleLocal}
        ></Fundation>

        <OrganizationsList data={data.fundations} />
      </>
    );
  } else if (page === "NonGovernment") {
    return (
      <>
        <NonGovernment
          onHandle1={handleFundation}
          onHandle2={handleNonGovernment}
          onHandle3={handleLocal}
        ></NonGovernment>
        <OrganizationsList data={data.nonGovernment} />
      </>
    );
  } else if (page === "Local") {
    return (
      <>
        <Local
          onHandle1={handleFundation}
          onHandle2={handleNonGovernment}
          onHandle3={handleLocal}
        ></Local>
        <OrganizationsList data={data.local} />
      </>
    );
  }
}
