import { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/Global/Footer/Footer";
import { Header } from "../components/Global/Header/Header";
import { Home } from "../pages/Home";
import { ModalDetails } from "../components/Global/Details/ModalDetails";

export const AppRouter = () => {
  const videoRef = useRef();
  useEffect(() => {
    videoRef.current.playbackRate = .7;
  }, [])
  
  return (
    <div className="app-container">
      {/* <BrowserRouter basename="/dist"> */}
      <ModalDetails />
      <video src="https://res.cloudinary.com/dz9smi3nc/video/upload/v1670206465/Challenger-IngerTec/back_video_ya8p28.mp4" autoPlay loop muted  ref={videoRef}/>
      
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
