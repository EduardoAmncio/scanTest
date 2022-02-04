import React from "react";
import { Box, CardContent, Grid, Toolbar, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { StoreState } from "redux/state";
import { useHistory } from "react-router";
import { SettingsButton } from "features/account/components/SettingsButton";
import { ShowBalanceButton } from "features/account/components/ShowBalanceButton";
import { AccountBalance } from "features/account/components/AccountBalance";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon";
import { AccountRoutes } from "features/account/constants/routes";
import { useStyle } from "./HomePageHeader.style";
import ArrowRight from "_assets/icons/arrow-right.svg";
import logo from "_assets/img/logo-small.svg";

interface HomePageHeaderProps {
  className?: string;
}

export const HomePageHeader: React.FC<HomePageHeaderProps> = ({
  className,
}) => {
  const [showBalance, setShowBalance] = React.useState(true);
  const accountName = useSelector(
    (store: StoreState) => store.account.account?.name
  );

  const history = useHistory();
  const styles = useStyle();

  const _getClassName = () => {
    let value = styles.mainHeader;
    if (className) value = `${value} ${className}`;
    return value;
  };

  const onShowBalanceButtonClick = () => setShowBalance(!showBalance);

  const onShowBankStatementButtonClick = () =>
    history.push(AccountRoutes.bankStatement);

  return (
    <Box className={_getClassName()}>
      <CardContent>
        <Toolbar className={styles.toolbar}>
          <img src={logo} alt="logo" id="logo" />
          <SettingsButton />
        </Toolbar>
        <Box className={styles.greetingsSection}>
          <Typography>{`Olá ${accountName ?? "---"}`}</Typography>
        </Box>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Grid item>
              <Typography>Seu saldo</Typography>
            </Grid>
            <Grid item>
              <AccountBalance show={showBalance} />
            </Grid>
          </Grid>
          <Grid item>
            <ShowBalanceButton
              showBalance={showBalance}
              onClick={onShowBalanceButtonClick}
            />
          </Grid>
        </Grid>
      </CardContent>
      <Box>
        <Box className={styles.bottomFloatingButton}>
          <ButtonWithFloatingIcon
            icon={ArrowRight}
            onClick={onShowBankStatementButtonClick}
          >
            Ver extrato
          </ButtonWithFloatingIcon>
        </Box>
      </Box>
    </Box>
  );
};
