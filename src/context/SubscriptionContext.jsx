import React, { createContext, useState } from "react";

export const dataContext = createContext();

function SubscriptionContext({ children }) {
  const [data, setData] = useState(null);

  return (
    <dataContext.Provider value={{ data, setData }}>
      {children}
    </dataContext.Provider>
  );
}

export default SubscriptionContext;
