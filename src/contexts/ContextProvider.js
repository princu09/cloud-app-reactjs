import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [setting, setSetting] = useState(false);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const closeMenu = () => setNav(!nav);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        setting,
        setSetting,
        nav,
        setNav,
        handleClick,
        closeMenu,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
