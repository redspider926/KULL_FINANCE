import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  icon: {
    width: (props: IIconProps) => props.size * 12,
    height: '100%',
    backgroundPosition:'center'
  },
});

interface IIconProps {
  size: number;
  source: string;
}

const Icon: React.FC<IIconProps> = (props) => {
  const classes = useStyles(props);
  return <img className={classes.icon} src={props.source} alt="icon" />;
};

export default Icon;
