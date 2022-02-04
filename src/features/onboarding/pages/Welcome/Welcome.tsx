import React from "react";
import { useHistory } from "react-router";
import { Grid } from "@material-ui/core";
import { OnboardingTitle } from "features/onboarding/components/texts/OnboardingTitle";
import { WelcomePageButton } from "features/onboarding/components/buttons/WelcomePageButton";
import { AuthenticationRoutes } from "features/authentication/constants/routes";
import { AccountRoutes } from "features/account/constants/routes";
import { useToken } from "hooks/useToken";
import { PageContainer } from "components/PageContainer";
import { OnboardingRoutes } from "features/onboarding/constants/routes";
import { useOnboardingStyles } from "./Welcome.style";
import logo from "_assets/img/logo.svg";

export const Welcome: React.FC = () => {
  const styles = useOnboardingStyles();
  const history = useHistory();
  const token = useToken();

  React.useEffect(() => {
    if (token) history.replace(AccountRoutes.home);
  }, [history, token]);

  return (
    <PageContainer className={styles.container}>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={styles.content}
      >
        <Grid item className={styles.logo}>
          <img src={logo} alt="logo" />
        </Grid>
        <Grid item className={styles.title}>
          <OnboardingTitle />
        </Grid>
        <Grid
          item
          container
          direction="column"
          spacing={2}
          className={styles.buttonsSection}
        >
          <Grid item className={styles.onboardingButtonWrapper}>
            <WelcomePageButton
              size="large"
              route={AuthenticationRoutes.signIn}
              palette="primary"
              borderWidth={2}
            >
              Entrar na minha conta
            </WelcomePageButton>
          </Grid>
          {/* <Grid item className={styles.signInButtonWrapper}>
            <WelcomePageButton
              palette="white"
              size="large"
              borderWidth={2}
              route={AuthenticationRoutes.signIn}
              palette="secondary"
            >
              Entrar na minha conta
            </WelcomePageButton>
          </Grid> */}
        </Grid>
      </Grid>
    </PageContainer>
  );
};
