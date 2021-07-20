import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import {
  Container,
  Text,
  Button,
  Spacer,
  Icon,
  MobileView,
  DesktopView,
} from "../../components";
import {
  LandingIcon1,
  LandingIcon2,
  LandingIcon3,
  LandingIcon4,
} from "../../assets/images";
import * as colors from "../../assets/theme/colors";

const useStyles = makeStyles({
  root: {
    background: colors.primary,
    minHeight: "100vh",
    paddingTop: 150,
    paddingBottom: 20,
  },

  animation: {
    position: "relative",
    left: 0,
  },

  buttonGroup: {
    paddingTop: 50,
    paddingBottom: 50,
  },

  buttomGroupMobile: {
    paddingTop: 50,
    paddingBottom: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  landingIcon: {
    width: "52px",
    height: "52px",
    marginRight: "20px",
  },

  itemWithIcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  divider: {
    width: "2px",
    height: "100%",
    backgroundColor: colors.white,
  },

  desktopViewLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "100%",
  },

  desktopViewCenter: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
  },

  desktopViewRight: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "100%",
  },

  bottomContainerLinkGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

const ItemsWithIcon: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <Icon source={LandingIcon1} size={3} />
        </Grid>

        <Grid item xs={10} className={classes.itemWithIcon}>
          <Text variant="body1" color={colors.white}>
            Verified, tracked carbon offsets as NFTs
          </Text>
        </Grid>
      </Grid>

      <Spacer height={10} />

      <Grid container>
        <Grid item xs={2}>
          <Icon source={LandingIcon2} size={3} />
        </Grid>

        <Grid item xs={10} className={classes.itemWithIcon}>
          <Text variant="body1" color={colors.white}>
            Asset-backed, forever green coins: gBTC, gETH, gBNB and more
          </Text>
        </Grid>
      </Grid>

      <Spacer height={10} />

      <Grid container>
        <Grid item xs={2}>
          <Icon source={LandingIcon3} size={3} />
        </Grid>

        <Grid item xs={10} className={classes.itemWithIcon}>
          <Text variant="body1" color={colors.white}>
            A vault with auto-swaps between green coins and underlying crypto
          </Text>
        </Grid>
      </Grid>

      <Spacer height={10} />

      <Grid container>
        <Grid item xs={2}>
          <Icon source={LandingIcon4} size={3} />
        </Grid>

        <Grid item xs={10} className={classes.itemWithIcon}>
          <Text variant="body1" color={colors.white}>
            Oracles for carbon price, emissions and carbon sink asset data
          </Text>
        </Grid>
      </Grid>
    </>
  );
};

interface ILandingPageProps {}

const Landing: React.FC<ILandingPageProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={5}>
            <DesktopView>
              <div className="animate__animated animate__backInLeft animate__slow">
                <Text variant="h4" color={colors.white} display="inline" bold>
                  Your defi solution for
                </Text>
                <Text variant="h4" color={colors.green} display="inline" bold>
                  {` green `}
                </Text>
                <Text variant="h4" color={colors.white} display="inline" bold>
                  and sustainable crypto
                </Text>
              </div>
            </DesktopView>

            <MobileView>
              <Text variant="h6" color={colors.white} display="inline" bold>
                Your defi solution for
              </Text>
              <Text variant="h6" color={colors.green} display="inline" bold>
                {` green `}
              </Text>
              <Text variant="h6" color={colors.white} display="inline" bold>
                and sustainable crypto
              </Text>
            </MobileView>

            <Spacer height={20} />

            <div className="animate__animated animate__backInLeft animate__slow animate__delay-1s">
              <Text variant="body1" color={colors.white} paragraph>
                A community initiative to bring instant impact and
                sustainability to the crypto industry
              </Text>

              <Text variant="body1" color={colors.white}>
                Tweets from industry and opinion leaders are helpful creating
                awareness, but action is better
              </Text>
            </div>
          </Grid>
        </Grid>

        <Spacer height={50} />

        <DesktopView>
          <div className="animate__animated animate__backInRight animate__slow animate__delay-2s">
            <Text variant="h4" color={colors.white} align="center" bold>
              ... so we’re launching a solution
            </Text>
          </div>

          <div className="animate__animated animate__backInRight animate__slow animate__delay-3s">
            <Grid container className={classes.buttonGroup}>
              <Grid item xs className={classes.desktopViewLeft}>
                <Button sizeFixed>Get on our waitlist</Button>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs>
                <Button sizeFixed>Become a contributor</Button>
              </Grid>
            </Grid>
          </div>

          <div className="animate__animated animate__backInRight animate__slow animate__delay-4s">
            <Grid container>
              <Grid item md={5}>
                <div className={classes.desktopViewLeft}>
                  <Text variant="h4" color={colors.white} display="block" bold>
                    Earn yield
                  </Text>

                  <Spacer height={20} />

                  <div>
                    <Text
                      variant="h4"
                      color={colors.white}
                      display="inline"
                      bold
                    >
                      Get
                    </Text>
                    <Text
                      variant="h4"
                      color={colors.green}
                      display="inline"
                      bold
                    >
                      {` green `}
                    </Text>
                    <Text
                      variant="h4"
                      color={colors.white}
                      display="inline"
                      bold
                    >
                      interest
                    </Text>
                  </div>

                  <Spacer height={20} />

                  <Text variant="h4" color={colors.white} display="block" bold>
                    Vote
                  </Text>
                </div>
              </Grid>

              <Grid item md={2}>
                <div className={classes.desktopViewCenter}>
                  <div className={classes.divider}></div>
                </div>
              </Grid>

              <Grid item md={5} justify="flex-start">
                <ItemsWithIcon />
              </Grid>
            </Grid>
          </div>
        </DesktopView>

        <MobileView>
          <Text
            variant="h6"
            color={colors.white}
            display="block"
            align="right"
            bold
          >
            ... so we’re launching a solution
          </Text>

          <Spacer height={40} />

          <ItemsWithIcon />

          <Spacer height={50} />

          <div className={classes.bottomContainerLinkGroup}>
            <Text variant="body1" color={colors.white}>
              Earn yield
            </Text>
            <Spacer width={10} />
            <Text variant="body1" color={colors.white}>
              |
            </Text>
            <Spacer width={10} />
            <Text variant="body1" color={colors.white}>
              Get
            </Text>
            <Text variant="body1" color={colors.green}>
              &nbsp;green&nbsp;
            </Text>
            <Text variant="body1" color={colors.white}>
              interest
            </Text>
            <Spacer width={10} />
            <Text variant="body1" color={colors.white}>
              |
            </Text>
            <Spacer width={10} />
            <Text variant="body1" color={colors.white}>
              Vote
            </Text>
          </div>

          <div className={classes.buttomGroupMobile}>
            <Button sizeFixed>Get on our waitlist</Button>
            <Spacer height={40} />
            <Button sizeFixed>Become a contributor</Button>
          </div>
        </MobileView>
      </Container>
    </div>
  );
};

export default Landing;
