import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as colors from "../../assets/theme/colors";
import { Icon, Text, Spacer } from "../../components";
import { Logo, Discord, Telegram, Bar } from "../../assets/images";

const useStyles = makeStyles({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.primary,
    paddingLeft: 10,
    paddingRight: 10,
    height:'100px',
    position: "fixed",
    width: "100%",
    zIndex: 100,
  },

  logo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  headerRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <Icon size={3} source={Logo} />
        <Spacer width={10}/>
        <Text variant="body2" color={colors.white}>
          Kuul.finance
        </Text>
      </div>

      <div className={classes.headerRight}>
        <Icon size={1.5} source={Discord} />
        <Spacer width={10}/>
        <Icon size={1.5} source={Telegram} />
        <Spacer width={10}/>
        <Icon size={3} source={Bar} />
        <Spacer width={20}/>
      </div>
    </div>
  );
};

export default Header;
