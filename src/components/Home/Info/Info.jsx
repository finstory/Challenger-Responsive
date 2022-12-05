import React, { useEffect, useRef } from "react";
import { useForm } from "../../../hooks/useForm";
import textAreaDB from "../../../database/text_area.json";
import { useReduxContext } from "../../../context/useRedux";
export const Info = () => {
  const textAreaRef = useRef();
  const [values, handleInputChange, reset] = useForm({ info: "" });
  useEffect(() => {
    console.log(values.info);
  }, [values]);

  const onClickLoadText = () => {
    textAreaRef.current.value = textAreaDB.texto.toUpperCase();
  };
  // const activeTextArea = true;
  const {
    redux: { activeTextArea },
    setRedux,
  } = useReduxContext();

  const switchInfo = () => {
  setTimeout(() => {
    window.scrollTo(0, 10000);
  }, 0);
    setRedux({ activeTextArea: !activeTextArea });
  };
  return (
    <section className="main-box">
      <div
        className={`info-text ${!activeTextArea ? "down-1024px" : ""}`}
        style={{ alignItems: activeTextArea ? "flex-start" : "center" }}
      >
        {activeTextArea && (
          <div className="text-area-close anim-opacity" onClick={switchInfo}>
            -
          </div>
        )}
        {!activeTextArea && (
          <>
            <button className="switch-info anim-opacity">
              <div className="img-wrap anim-opacity" onClick={switchInfo}>
                <img
                  src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1669864672/Challenger-IngerTec/icons/dialogue_cvkwmi.png"
                  alt="switch dialogue"
                />
              </div>
            </button>
            <p className="anim-opacity">
              The British Academy Games Awards are an annual British awards
              ceremony honoring "outstanding creative achievement" in the video
              game industry. First presented in 2004 following the restructuring
              of the BAFTA Interactive Entertainment Awards, the awards are
              presented by the British Academy of Film and Television Arts
              (BAFTA), and are thus commonly referred to as the BAFTA Games .
            </p>
          </>
        )}
        {activeTextArea && (
          <>
            <div className="btn-gruop anim-opacity">
              <button className="load-text" onClick={onClickLoadText}>
                Load Text
              </button>
              <button className="load-text" onClick={reset}>
                <img
                  src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1670152072/Challenger-IngerTec/icons/erase_n6ttfg.png"
                  alt="erase"
                />
              </button>
            </div>
            <div className="text-area-container anim-opacity">
              <textarea
                name="info"
                onChange={handleInputChange}
                value={values.info}
                ref={textAreaRef}
              ></textarea>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
