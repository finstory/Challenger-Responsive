import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/Global/Footer/Footer";
import { Header } from "../components/Global/Header/Header";
import { Home } from "../pages/Home";
import background from "../assets/back_video.mp4";
import { ModalDetails } from "../components/Global/Details/ModalDetails";

export const AppRouter = () => {
  return (
    <div className="app-container">
      {/* <BrowserRouter basename="/dist"> */}
      <ModalDetails />
      <video src={background} autoPlay loop muted />
      
      <div className="app">
        
        <div className="app-wrap">
          
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
};
