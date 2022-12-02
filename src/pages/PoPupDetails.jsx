import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import itemsFromDB from "../database/items.json";
import "../assets/popup.css";

export const PoPupDetails = () => {
  const param = useParams();
  const idParam = parseInt(param.id) || 0;

  const [item, setItem] = useState({});

  useEffect(() => {
    setItem(itemsFromDB.find((item) => item.id === idParam));
  }, []);

  console.log(item.full_image);
  if (item)
    return (
      <div className="popup-container anim-opacity">
        {item && (
          <>
          <div className="title">ELDEN RING</div>
            <div className="btn-group">
              <button className="ok">OK</button>
              <button className="cerrar">CERRAR</button>
            </div>
            <img src={item.full_image} alt="image_full_size" />
          </>
        )}
      </div>
    );
};
