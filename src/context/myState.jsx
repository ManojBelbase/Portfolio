import React, { useState } from "react";
import myContext from "./myContext";
const MyState = ({ children }) => {
  const [loading, setLoading] = useState(false);
  return (
    <myContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export default MyState;
