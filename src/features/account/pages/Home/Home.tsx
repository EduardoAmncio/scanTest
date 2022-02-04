import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "redux/state";
import { Alert } from "components/Alert";
import { Loader } from "components/Loader";
import { PageContainer } from "components/PageContainer";
import { HomePageHeader } from "features/account/components/HomePageHeader";
import {
  closeAlert,
  getAccountDashboard,
} from "features/account/redux/actions";
import { BadgeChangeAccountButton } from "features/account/components/BadgeChangeAccountButton";
import { AccountSheet } from "features/account/components/AccountSheet/AccountSheet";
import { useStyles } from "./Home.style";
import swapImage from "_assets/icons/iconChageAccount.svg";
import LegoBlocks from "_assets/img/icon-lego-home.svg";
import { FeaturesList } from "features/account/components/FeaturesList";

const legoBlocksImageSize = 128;

interface HomeProps {
  showBalance: boolean;
}

export const Home: React.FC<HomeProps> = () => {
  const { accountState, account } = useSelector((state: StoreState) => ({
    authState: state.auth,
    accountState: state.account,
    account: state.account.account,
  }));
  const { loading, errorMessage } = accountState;
  const dispatch = useDispatch();
  const styles = useStyles();

  const [bottom, setBottom] = React.useState(false);

  const toggleDrawer = () => {
    setBottom(!bottom);
  };

  React.useEffect(() => {
    dispatch(getAccountDashboard(accountState.account?.accountId));
  }, [accountState.account?.accountId, dispatch]);

  const onAlertClose = () => {
    dispatch(closeAlert());
  };

  return (
    <PageContainer className={styles.pageContainer}>
      <HomePageHeader className={styles.header} />
      <Box component="main">
        <FeaturesList className={styles.buttonsRow} />
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item>
            <img
              src={LegoBlocks}
              alt="Construção"
              height={legoBlocksImageSize}
              width={legoBlocksImageSize}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align="center"
              className={styles.descriptionText}
            >
              <strong>Em breve</strong>
              <br />
              Novas funcionalidades serão implementadas
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {errorMessage && (
        <Alert
          title="Erro"
          message={errorMessage}
          severity={"error"}
          onClose={onAlertClose}
        />
      )}
      <Loader open={loading} />
      <Box className={styles.formFooterHome}>
        <React.Fragment>
          <BadgeChangeAccountButton icon={swapImage} onClick={toggleDrawer}>
            Trocar conta
          </BadgeChangeAccountButton>
          {bottom && (
            <AccountSheet
              account={account}
              open={bottom}
              onClose={toggleDrawer}
            />
          )}
        </React.Fragment>
      </Box>
    </PageContainer>
  );
};
