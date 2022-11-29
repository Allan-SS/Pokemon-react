import React, { useContext } from "react";
import "./CaptureBtn.scss";
import Pokebola from "../../assets/pokebola.png";
import Icon from "../../assets/gotcha.png";
import GlobalStateContext from "../../global/GlobalStateContext";

const CaptureBtn = ({ onClick }) => {
  const { states } = useContext(GlobalStateContext);


  return (
    <div className="capture-btn">
      {states.showTooltip && (
        <div className="capture-btn__tooltip">
          <img src={Icon} alt="Icon" />
        </div>
      )}
      <div className="capture-btn__button">
        <button onClick={onClick}>
          <img src={Pokebola} alt="IconButton" />
        </button>
      </div>
    </div>
  );
};

export default CaptureBtn;
