import React, { useEffect, useState } from "react";
import { useReduxContext } from "../../../context/useRedux";

import itemsFromDB from "../../../database/items.json";
import { useHomeServices } from "../../../services/useHomeServices";

export const Galery = () => {
  const { addViewItem, getViewItem, openDetails, resolution4k } =
    useHomeServices();
  const {
    redux: { listViews },
  } = useReduxContext();

  const [styleFullInfo, setStyleFullInfo] = useState([]);

  const [listenPopup, setListenPopup] = useState({});
  const [isTriggerInfo, setIsTriggerInfo] = useState(false);

  const switchInfo = (idFocus, cond) => {
    setStyleFullInfo(
      styleFullInfo.map((item) => {
        if (item.id === idFocus) return { ...item, active: cond };
        else return { ...item, active: false };
      })
    );
  };

  useEffect(() => {
    setStyleFullInfo(
      itemsFromDB.map((item) => {
        return { id: item.id, active: false };
      })
    );
    window.addEventListener("message", (e) => {
      window.popup && e.data.active && setListenPopup(e.data);
    });
  }, []);

  useEffect(() => {
    listenPopup && listenPopup.active && addViewItem(listenPopup.id);
  }, [listenPopup]);

  if (listViews);
  return (
    <section className="main-box">
      <div className="galery">
        {styleFullInfo.length &&
          itemsFromDB.map((item, i) => {
            // * to selection card.
            const isTrigger = styleFullInfo.find(
              (obj) => obj.id === item.id
            ).active;

            return (
              <div
                key={item.id}
                className="card-container anim-cards"
                style={{ animationDuration: ".7s" }}
              >
                <div
                  className={`card ${isTrigger && "hover"}`}
                  onMouseEnter={() => switchInfo(item.id, true)}
                  onMouseLeave={() => switchInfo(item.id, false)}
                  onClick={() => {
                    openDetails(item, i, isTriggerInfo);
                  }}
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div
                    className={`info ${isTrigger && "hover"}`}
                    onPointerUp={() => {
                      switchInfo(item.id, !isTrigger);
                      setIsTriggerInfo(false);
                    }}
                    onPointerLeave={() => {
                      setIsTriggerInfo(true);
                    }}
                  >
                    <div className="info-box">
                      <p>{item.title.toUpperCase()}</p>
                      <div className={`img-wrap ${isTrigger && "hover"}`}>
                        <img
                          src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1669868102/Challenger-IngerTec/icons/arrow_qadku1.png"
                          alt="arrow"
                        />
                      </div>
                    </div>
                    <div
                      className={`info-box ${
                        isTrigger ? "anim-opacity" : "anim-opacity-reverse"
                      }`}
                    >
                      <p>
                        <strong>GENRE</strong> : {item.genre}
                      </p>
                      <p>
                        <strong>DEVELOPER</strong> : {item.developer}
                      </p>
                      <p>
                        <strong>PUBLISHER</strong> : {item.publisher}
                      </p>
                      <p>
                        <strong>REVIEWS</strong> : {item.reviews}
                      </p>
                      <p>
                        <strong>RELEASE DATE</strong> : {item.release_data}
                      </p>
                    </div>
                  </div>

                  <div className="view-total">
                    <div className={`wrap ${isTrigger && "hover"}`}>
                      <strong>{getViewItem(item.id)}</strong>
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
            );
          })}

        {/* ESTO DE ABAJO SOLO SE REPITE PARA PROBAR DEFINICIONES MAS DE 2K Y QUE NO QUEDEN ESPACIOS VACIÓS. */}

        {resolution4k &&
          styleFullInfo.length &&
          itemsFromDB.map((item, i) => {
            // * to selection card.
            const isTrigger = styleFullInfo.find(
              (obj) => obj.id === item.id
            ).active;

            return (
              <div
                key={item.id}
                className="card-container anim-cards"
                style={{ animationDuration: ".7s" }}
              >
                <div
                  className={`card ${isTrigger && "hover"}`}
                  onMouseEnter={() => switchInfo(item.id, true)}
                  onMouseLeave={() => switchInfo(item.id, false)}
                  onClick={() => {
                    openDetails(item, i, isTriggerInfo);
                  }}
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div
                    className={`info ${isTrigger && "hover"}`}
                    onPointerUp={() => {
                      switchInfo(item.id, !isTrigger);
                      setIsTriggerInfo(false);
                    }}
                    onPointerLeave={() => {
                      setIsTriggerInfo(true);
                    }}
                  >
                    <div className="info-box">
                      <p>{item.title.toUpperCase()}</p>
                      <div className={`img-wrap ${isTrigger && "hover"}`}>
                        <img
                          src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1669868102/Challenger-IngerTec/icons/arrow_qadku1.png"
                          alt="arrow"
                        />
                      </div>
                    </div>
                    <div
                      className={`info-box ${
                        isTrigger ? "anim-opacity" : "anim-opacity-reverse"
                      }`}
                    >
                      <p>
                        <strong>GENRE</strong> : {item.genre}
                      </p>
                      <p>
                        <strong>DEVELOPER</strong> : {item.developer}
                      </p>
                      <p>
                        <strong>PUBLISHER</strong> : {item.publisher}
                      </p>
                      <p>
                        <strong>REVIEWS</strong> : {item.reviews}
                      </p>
                      <p>
                        <strong>RELEASE DATE</strong> : {item.release_data}
                      </p>
                    </div>
                  </div>

                  <div className="view-total">
                    <div className={`wrap ${isTrigger && "hover"}`}>
                      <strong>{getViewItem(item.id)}</strong>
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
            );
          })}
      </div>
    </section>
  );
};
