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
            <section className="main-box">
              <div className="galery">
                <div className="card-container">
                  <div className="card">
                    <div className="info">
                      <div className="info-box">
                        <p>GOD OF WARD RANKROK</p>
                        <div className="img-wrap">
                          <img
                            src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1669868102/Challenger-IngerTec/icons/arrow_qadku1.png"
                            alt="arrow"
                          />
                        </div>
                      </div>
                      <div className="info-box">
                        <p>
                          <strong>GENRE</strong> : Adventure, Indie, Simulation
                        </p>
                        <p>
                          <strong>DEVELOPER</strong>: Redbeet Interactive
                        </p>
                        <p>PUBLISHER : Axolot GamesALL</p>
                        <p>REVIEWS : Very Positive (203,393)</p>
                        <p>RELEASE DATE : 20 Jun, 2022</p>
                      </div>
                      <div className="info-box">
                        <strong>100</strong>
                        <div className="img-wrap">
                          <img
                            src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1669871073/Challenger-IngerTec/icons/eyes_ivhrcd.png"
                            alt="eye"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
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
              </div>
            </section>
            <section className="main-box">
              <div className="info-text">
                <button className="switch-info">
                  <div className="img-wrap">
                    <img
                      src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1669864672/Challenger-IngerTec/icons/dialogue_cvkwmi.png"
                      alt="switch dialogue"
                    />
                  </div>
                </button>
                <p>
                  The British Academy Games Awards are an annual British awards
                  ceremony honoring "outstanding creative achievement" in the
                  video game industry. First presented in 2004 following the
                  restructuring of the BAFTA Interactive Entertainment Awards,
                  the awards are presented by the British Academy of Film and
                  Television Arts (BAFTA), and are thus commonly referred to as
                  the BAFTA Games .
                </p>
              </div>
            </section>
          </main>

          <footer>
            <p>2022 IngerTec, ARG © All Rigths Reserved.</p>
          </footer>
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
