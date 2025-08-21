import React from "react";

const PageNotFound = () => {
  return (
    <>
      <div className="padding-global">
        <div className="container">
          <h1 className="margin-b-96 text-center error-heading">
            Page you are looking for is not found.
            <img
              src="../assets/404-line.svg"
              alt="Vector Line"
              className="vector-line"
            />
          </h1>
          <img
            src="../assets/404.svg"
            alt="404 Not Found"
            className="margin-b-128"
          />
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
