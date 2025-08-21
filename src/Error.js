import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const errorMessage = useRouteError();
  console.log(errorMessage);

  return (
    <div>
      <h1>Ooppss!!</h1>
      <h2>
        {errorMessage.status}: {errorMessage.statusText}
      </h2>
    </div>
  );
};

export default Error;
