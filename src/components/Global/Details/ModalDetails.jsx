import React, { useEffect, useState } from "react";
import { useReduxContext } from "../../../context/useRedux";
import { CardDetails } from "./CardDetails";

export const ModalDetails = () => {
  const {
    redux: { modalDetails },
  } = useReduxContext();

  useEffect(() => {
    setTimeout(() => {
      modalDetails.active
        ? setStyleOpacityActive(true)
        : setStyleOpacityActive(false);
    }, 100);
  }, [modalDetails.active]);

  const [styleOpacityActive, setStyleOpacityActive] = useState(false);

  if (styleOpacityActive)
    return (
      <div
        className={`details-container ${
          modalDetails.active ? "anim-opacity" : "anim-opacity-reverse"
        }`}
        style={{ animationDuration: ".2s" }}
      >
        <CardDetails />
      </div>
    );
};
