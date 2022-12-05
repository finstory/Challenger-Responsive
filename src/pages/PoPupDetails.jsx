import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import itemsFromDB from "../database/items.json";
import "../assets/popup.css";


export const PoPupDetails = () => {
  const param = useParams();
  const location = useLocation();
  const idParam = parseInt(param.id) || 0;

  const [item, setItem] = useState({});
  const title = item.title ? item.title.toUpperCase() : "";

  useEffect(() => {
    setItem(itemsFromDB.find((item) => item.id === idParam));
  }, []);

  const handleClick = () => {
    const urlToSend = location.search ? location.search.split("from=")[1] : "";
    if (window.opener)
      window.opener.postMessage({ active: true, id: idParam }, urlToSend);
  };

  if (item)
    return (
      <div className="popup-container anim-opacity">
        {item && (
          <>
            <div className="title">{title}</div>
            <div className="btn-group">
              <button className="ok" onClick={handleClick}>
                OK
              </button>
              <button className="cerrar" onClick={() => window.close()}>
                CERRAR
              </button>
            </div>
            <img src={item.full_image} alt="image_full_size" />
          </>
        )}
      </div>
    );
};
