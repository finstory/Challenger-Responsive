import { ReduxContext, useRedux } from "./useRedux";


export const PortalWindowContextProvider = ({ children }) => {
  const { redux, setRedux } = useRedux();
  return (
    <ReduxContext.Provider value={{ redux, setRedux }}>
      {children}
    </ReduxContext.Provider>
  );
};
