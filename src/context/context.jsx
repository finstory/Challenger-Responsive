import { GlobalContext, useGlobal } from "./useGlobal";

export const PortalWindowContextProvider = ({ children }) => {
  const { global, setGlobal } = useGlobal();
  return (
    <GlobalContext.Provider value={{ global, setGlobal }}>
      {children}
    </GlobalContext.Provider>
  );
};
