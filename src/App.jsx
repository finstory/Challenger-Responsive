import { useState } from "react";
import background from "./assets/back_video.mp4";
import "./assets/app.css";
import "./assets/normalize.css";
function App() {
  return (
    <div className="app-container">
      <video src={background} autoPlay loop muted />
      <div className="app">
        <div className="app-wrap">
      <a href="https://id.twitch.tv/oauth2/authorize?client_id=jmm5tsna2qnd5gfyzxebgq3hxby8bh&redirect_uri=https://127.0.0.1:5173&response_type=token">Connect with Twitch</a>
          <nav>
            <div className="header_box">
              <div className="img-wrap">
                <img
                  src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1669768523/Challenger-IngerTec/icons/logo_jpm8f6.png"
                  alt="logo"
                />
              </div>
            </div>
            <div className="header_box">
              <p>GAME OF THE YEAR</p>
            </div>
            <div className="header_box">
              <div className="img-wrap">
                <img
                  src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1669767946/Challenger-IngerTec/icons/github_csdaxu.png"
                  alt="logo-github"
                />
              </div>
            </div>
          </nav>
          <main>
            <div className="main-box">
              <section className="galery">
                <div className="card-container">
                  <div className="card"></div>
                </div>
                <div className="card-container">
                  <div className="card"></div>
                </div>
                <div className="card-container">
                  <div className="card"></div>
                </div>
                <div className="card-container">
                  <div className="card"></div>
                </div>
                <div className="card-container">
                  <div className="card"></div>
                </div>
                
              </section>
            </div>
            <div className="main-box">
              <section className="info-text">MAIN</section>
            </div>
          </main>

          <footer className="footer-contianer">FOOTER</footer>
        </div>
      </div>
      {/* <ReactPlayer
        width="100vw"
        height="100vh"
        url="https://www.youtube.com/watch?v=C26gRAurlRQ"
      /> */}
    </div>
  );
}

export default App;
