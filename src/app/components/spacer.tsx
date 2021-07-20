import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  spacer: {
    width: (props: ISpacerProps) => props.width,
    height: (props: ISpacerProps) => props.height,
  },
});

interface ISpacerProps {
  width?: number;
  height?: number;
}

const Spacer: React.FC<ISpacerProps> = (props) => {
  const classes = useStyles(props);
  return <div className={classes.spacer}></div>;
};

export default Spacer;
