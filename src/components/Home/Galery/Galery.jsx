import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../../context/useGlobal";
import itemsFromDB from "../../../database/items.json";

export const Galery = () => {
  const { setGlobal } = useGlobalContext();
  const getListViews = JSON.parse(window.localStorage.getItem("listViews"));
  const [listViews, setListViews] = useState([]);
  const [styleFullInfo, setStyleFullInfo] = useState([]);
  const [isTriggerInfo, setIsTriggerInfo] = useState(false);

  const isMobilActive = window.screen.width < 1024 ? false : true;

  const switchInfo = (idFocus, cond) => {
    setStyleFullInfo(
      styleFullInfo.map((item) => {
        if (item.id === idFocus) return { ...item, active: cond };
        else return { ...item, active: false };
      })
    );
  };

  const openPopup = (idItem, title) => {
    window.popup = window.open(
      `/popup_wallpaper/${idItem}?from=${window.location.href}`,
      "popUpWindow",
      "height=600,width=800,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes,title=hola"
    );
    setTimeout(() => {
      window.popup.document.title = title;
    }, 500);
  };

  const openDetails = (item, i) => {
    if (i % 2 !== 0) {
      if (isMobilActive || isTriggerInfo) {
        setGlobal({ modalDetails: { active: true, item } });
        addViewItem(item.id);
      }
    } else {
      if (isMobilActive || isTriggerInfo) {
        setGlobal({ poPupDetails: { item } });
        openPopup(item.id, item.title);
      }
    }
  };

  const getViewItem = (idItem) => {
    const itemGet = listViews.find((item) => item.id === idItem);
    return itemGet.views;
  };

  const addViewItem = (idItem) => {
    console.log("sdsd");
    const itemSet = listViews.map((item) => {
      if (item.id === idItem) return { ...item, views: ++item.views };
      else return item;
    });
    setListViews(itemSet);
  };

  useEffect(() => {
    setListViews(itemsFromDB.map((item) => ({ id: item.id, views: 0 })));

    setStyleFullInfo(
      itemsFromDB.map((item) => {
        return { id: item.id, active: false };
      })
    );

    window.addEventListener("message", (e) => {
      e.data.active && addViewItem(e.data.id);
    });

    if (getListViews) setListViews(getListViews);
  }, []);

  useEffect(() => {
    listViews.length && window.localStorage.setItem("listViews", JSON.stringify(listViews));
  }, [listViews]);

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
              <div className="card-container" key={item.id}>
                <div
                  className={`card ${isTrigger && "hover"}`}
                  onMouseEnter={() => switchInfo(item.id, true)}
                  onMouseLeave={() => switchInfo(item.id, false)}
                  onClick={() => {
                    openDetails(item, i);
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
