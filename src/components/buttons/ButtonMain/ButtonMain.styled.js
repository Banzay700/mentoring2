import styled from "@emotion/styled";
import { Button } from "@mui/material";

const getBtnColorVariant = (theme) => ({
  blue: {
    ":hover": {
      backgroundColor: theme.palette.primary[500],
    },
  },
  grey: {
    backgroundColor: theme.palette.background.greyHover,
    ":hover": {
      backgroundColor: theme.palette.background.darkGreyHover,
    },
  },
});

export const ButtonMainBase = styled(Button)(({ bgcolor, theme }) => ({
  boxShadow: "none",
  borderRadius: "5px",
  ...getBtnColorVariant(theme)[bgcolor],
}));
