import React from "react";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import { TextField } from "components/TextField";
import { useMask } from "hooks/useMask";
import { OnboardingRoutes } from "features/onboarding/constants/routes";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { maskTaxPayer } from "_utils/masks/taxPayer";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { PageContainer } from "components/PageContainer";
import { updateSmsForm } from "features/onboarding/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "redux/state";

export const EnterTaxPayer: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [taxId, setTaxId] = useMask(maskTaxPayer);

  const allowToContinue = taxId.length === 14 || taxId.length === 18;

  const onboardingSms = useSelector(
    (state: StoreState) => state.onboarding.smsForm
  );

  const onTaxIdChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTaxId(event.target.value);

  const onCancelButtonClick = () => {
    history.go(-5);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (allowToContinue) {
      dispatch(
        updateSmsForm({
          taxId,
        })
      );
      history.push(OnboardingRoutes.birthDateForSMS);
    }
  };

  return (
    <PageContainer>
      <ProcessPageLayout
        appBar={
          <AppBar
            homeRoute={OnboardingRoutes.welcome}
            action={
              <Button
                palette="secondary"
                size="small"
                startIcon={<Close color="primary" />}
                onClick={onCancelButtonClick}
              >
                {cancelLabel}
              </Button>
            }
          />
        }
        header={
          <ProcessDescriptionHeader
            title="Ative sua Conta"
            subtitle={`Olá, ${onboardingSms?.name}`}
            description="Agora precisamos confirmar seu CPF"
          />
        }
        main={
          <React.Fragment>
            <Grid container direction="column">
              <Grid item component="form" onSubmit={onSubmit}>
                <TextField
                  label="CPF"
                  value={taxId}
                  placeholder="Digite apenas números"
                  onChange={onTaxIdChange}
                  maxValue={16}
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="column"
              alignItems="baseline"
              justifyContent="center"
            ></Grid>
          </React.Fragment>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                disabled={!allowToContinue}
                endIcon={<KeyboardArrowRight color="secondary" />}
                onClick={onSubmit}
              >
                {nextLabel}
              </Button>
            }
          />
        }
      />
    </PageContainer>
  );
};
