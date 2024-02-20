import PropTypes from "prop-types";
import { Typography } from "@mui/material";

import { text } from "./ButtonMain.utils";
import { ButtonMainBase } from "./ButtonMain.styled";

const ButtonMain = ({ children, variant, color, onClick, ...props }) => {
  return (
    <ButtonMainBase
      bgcolor={color}
      variant={variant}
      onClick={onClick}
      {...props}
    >
      <Typography color={text[color]} fontSize="15px" fontWeight="600">
        {children}
      </Typography>
    </ButtonMainBase>
  );
};

ButtonMain.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  color: PropTypes.oneOf(["blue", "grey"]),
};

ButtonMain.defaultProps = {
  variant: "contained",
  color: "blue",
};

ButtonMain.displayName = "ButtonMain";

export default ButtonMain;
