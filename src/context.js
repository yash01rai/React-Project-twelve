import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openSidebar = () => {
    setSidebar(true);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        sidebar,
        modalOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
