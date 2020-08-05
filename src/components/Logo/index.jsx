import React from "react";
import PropTypes from "prop-types";
import LogoPng from "../../assets/img/Logo.png";
import { WrapperImage, Image } from "./styles";

function Logo({ title }) {
  return (
    <WrapperImage to="/" title="Work In Progress">
      <Image className="Logo" src={LogoPng} alt={title} title={title} />
    </WrapperImage>
  );
}

export default Logo;
