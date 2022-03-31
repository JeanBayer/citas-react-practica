import React from "react";

const Error = ({children}) => {
  return (
    <div className="bg-red-800 p-1 text-white rounded-md mb-3 text-center">
      <p>{children}</p>
    </div>
  );
};

export default Error;
