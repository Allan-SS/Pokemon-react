import React from "react";
import { useNavigate } from "react-router-dom";
import IconDex from "../../assets/smartphone.png";
import "./ButtonDex.scss";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const ButtonDex = ({ path, message }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  const renderTooltip = (props) => (
    <Tooltip className="alert-btn" id="button-tooltip" {...props}>
      {message}
    </Tooltip>
  );

  return (
    <div className="container-btn">
      <OverlayTrigger
        placement="top"
        delay={{ show: 100, hide: 250 }}
        overlay={renderTooltip}
      >
        <button onClick={() => handleClick()}>
          <img src={IconDex} alt="IconButton" />
        </button>
      </OverlayTrigger>
    </div>
  );
};

export default ButtonDex;
