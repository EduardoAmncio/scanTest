import React from "react";
import { AppBar } from "components/AppBar";
import { PageContainer } from "components/PageContainer";
import { closeLabel } from "constants/buttons/labels";
import { useHistory } from "react-router-dom";
import { Close } from "@material-ui/icons";
import { Button } from "components/Button";
import Conclude from "_assets/icons/Conclude.svg";
import { Box, Grid, Typography } from "@material-ui/core";
import { AccountRoutes } from "features/account/constants/routes";
import { useStyles } from "./ConcludeTopUp.styles";

export const ConcludeTopUp: React.FC = () => {
  const history = useHistory();
  const styles = useStyles();

  const onCloseButtonClick = () => {
    history.replace(AccountRoutes.home);
  };

  return (
    <PageContainer className={styles.container}>
      <AppBar
        homeRoute={AccountRoutes.home}
        action={
          <Button
            palette="secondary"
            size="small"
            startIcon={<Close color="primary" />}
            onClick={onCloseButtonClick}
          >
            {closeLabel}
          </Button>
        }
      />

      <Box component="main">
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          spacing={2}
        >
          <Grid item>
            <img src={Conclude} alt="Conclude" className={styles.image} />
          </Grid>
          <Grid item>
            <Typography align="center" variant="h5">
              Concluído
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};
