import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../../context/useGlobal";
import itemsFromDB from "../../../database/items.json";

export const Galery = () => {
  const [styleFullInfo, setStyleFullInfo] = useState([]);

  const { global, setGlobal } = useGlobalContext();

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
  }, []);

  const openPopup = (idItem) => {
    const configWindows =
      "toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=600,height=800";

    const popup = window.open(
      `/popup_wallpaper/${idItem}`,
      "targetWindow",
      "Pagina_CNN",
      configWindows
    );
  };

  // Llamamos a la función

  // useEffect(() => {
  //   global.poPupDetails.active && openPopup();
  // }, [global.poPupDetails.active]);

  return (
    <section className="main-box">
      <div className="galery">
        {styleFullInfo.length &&
          itemsFromDB.map((item, i) => {
            const isTrigger = styleFullInfo.find(
              (obj) => obj.id === item.id
            ).active;
            return (
              <div className="card-container" key={item.id}>
                <div
                  className="card"
                  onMouseEnter={() => switchInfo(item.id, true)}
                  onMouseLeave={() => switchInfo(item.id, false)}
                  onClick={() => {
                    if (i % 2 === 0) {
                      setGlobal({ modalDetails: { active: true, item } });
                    } else {
                      setGlobal({ poPupDetails: { item } });
                      openPopup(item.id);
                    }
                  }}
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="info">
                    <div className="info-box">
                      <p>{item.title.toUpperCase()}</p>
                      <div className="img-wrap">
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
                    <div className="wrap">
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
            );
          })}
      </div>
    </section>
  );
};
