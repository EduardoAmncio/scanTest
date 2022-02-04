import React from "react";
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { PageContainer } from "components/PageContainer";
import { useStyles } from "./LandingPage.style";

import logo from "_assets/img/logo.svg";
import appStore from "_assets/img/appStore.svg";
import googlePlay from "_assets/img/googlePlay.svg";
import { ConfigContext } from "_config";

export const LandingPage: React.FC = () => {
  const { company } = React.useContext(ConfigContext);
  const styles = useStyles();

  return (
    <PageContainer className={styles.totalContainer}>
      <Box className={styles.header}>
        <img src={logo} alt="logo" />
      </Box>
      <Box className={styles.transferBox}>
        <Box className={styles.transferContainer}>
          <Typography className={styles.title}>
            Você recebeu uma <br />
            transferência
          </Typography>
          <Typography className={styles.description}>
            Instale o aplicativo de acordo <br />
            com o sistema operacional do <br />
            seu aparelho.
          </Typography>
          <Box className={styles.containerButtons}>
            <a href={company.playStoreUrl}>
              <img src={googlePlay} alt="google play" />
            </a>
            <Box marginBottom="8px">
              <Typography className={styles.description}>ou</Typography>
            </Box>
            <a href={company.playStoreUrl}>
              <img src={appStore} alt="app store" />
            </a>
          </Box>
        </Box>
        <hr />
        <Box>
          <Typography className={styles.footerText}>
            Em caso de dúvidas entre em <br />
            contato conosco
          </Typography>
          <Typography className={styles.footerLink}>
            <a href={company.website}>{company.website}</a>
          </Typography>
        </Box>
      </Box>
    </PageContainer>
  );
};
