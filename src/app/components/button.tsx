import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button as MuiButton } from "@material-ui/core";
import * as colors from "../assets/theme/colors";

const useStyles = makeStyles({
  button: {
    background: colors.white,
    textTransform: "none",
    color: colors.primary,
    fontWeight: "bolder",
    boxShadow: "2px 4px 4px 0px #00000073",
    fontFamily: "SansationBold",
    display: "block",
    width: (props: IButtonProps) => (props.sizeFixed ? 200 : "auto"),
  },
});

interface IButtonProps {
  backgroundColor?: string;
  captionColor?: string;
  sizeFixed?: boolean;
}

const Button: React.FC<IButtonProps> = (props) => {
  const classes = useStyles(props);
  const { children } = props;
  return (
    <MuiButton className={classes.button} variant="contained">
      {children}
    </MuiButton>
  );
};

export default Button;
