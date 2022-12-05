import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PoPupDetails } from "../pages/PoPupDetails";
import { AppRouter } from "./AppRouter";

export const AppMain = () => {
  return (
    // <BrowserRouter basename="/challenger">
          <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppRouter />} />
        <Route path="/popup_wallpaper/:id" element={<PoPupDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
