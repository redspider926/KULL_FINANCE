import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

interface ITextProps {
  align?: "inherit" | "left" | "center" | "right" | "justify";
  paragraph?: boolean;
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "srOnly"
    | "inherit";
  display?: "block" | "inline" | "initial";
  color?: string;
  bold?: boolean;
}

const useStyles = makeStyles({
  typography: {
    color: (props: ITextProps) => props.color,
    fontFamily: (props:ITextProps)=>props.bold?'SansationBold':'SansationLight',
  },
});

const Text: React.FC<ITextProps> = (props) => {
  const classes = useStyles(props);
  const {
    variant,
    paragraph,
    align = "inherit",
    display,
    children,
  } = props;

  return (
    <Typography
      className={classes.typography}
      variant={variant}
      paragraph={paragraph}
      align={align}
      display={display}
    >
      {children}
    </Typography>
  );
};

export default Text;
