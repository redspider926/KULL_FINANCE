import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as colors from "../../assets/theme/colors";
import { Icon, Text, Spacer } from "../../components";
import {
  LogoBlue,
  Climate,
  DiscordBlack,
  TelegramBlack,
  MediumBlack,
} from "../../assets/images";

const useStyles = makeStyles({
  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    height: 80,
    paddingLeft: 10,
    paddingRight: 10,
  },

  logo: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },

  climateKuulLogo: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  climateKullLogoView: {
    display: 'flex',
    flexDirection: 'row',
    textShadow: "2px 3px 4px 0px #00000073",
  },

  footerLeft: {
    height: 60,
    display: "flex",
    flexDirection: "row",
  },

  footerRight: {
    display: "flex",
    height: 60,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",
    textAlign: "right",
  },

  footerRightIconView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.footerLeft}>
        <div className={classes.logo}>
          <Icon size={2.5} source={LogoBlue} />
          <Text variant="caption" color={colors.primary} bold>
            Kull.finance
          </Text>
        </div>

        <Spacer width={10} />

        <div className={classes.climateKuulLogo}>
          <Text variant="caption" color={colors.black} bold>
            in partnership with:
          </Text>

          <div className={classes.climateKullLogoView}>
            <Spacer width={15} />
            <Icon size={1.5} source={Climate} />
          </div>
              
          <div className={classes.climateKullLogoView}>
            <Text variant="caption" color={colors.green} display="block" bold>
              Climate
            </Text>
            <Text variant="caption" color={colors.blue} display="block" bold>
              Kuul
            </Text>
          </div>
        </div>
      </div>

      <div className={classes.footerRight}>
        <div className={classes.footerRightIconView}>
          <Icon size={3} source={DiscordBlack} />
          <Icon size={3} source={TelegramBlack} />
          <Icon size={3} source={MediumBlack} />
        </div>

        <Text variant="caption" color={colors.black} bold>
          Copyright © 2021
        </Text>
      </div>
    </div>
  );
};

export default Footer;
