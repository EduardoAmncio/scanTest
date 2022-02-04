import React from "react";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import {
  Box,
  FormControlLabel,
  Radio,
  Typography,
  RadioGroup,
} from "@material-ui/core";
import { AppBar } from "components/AppBar";
import { PageContainer } from "components/PageContainer";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { Button } from "components/Button";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { useStyles } from "./AddressConfirmation.style";
import { useHistory } from "react-router";
import { AccountRoutes } from "features/account/constants/routes";
import { CardRoutes } from "features/card/constants/routes";

export const AddressConfirmation: React.FC = () => {
  const history = useHistory();
  const styles = useStyles();
  var address = "Rua das Cerejeiras, nª 222 - Centro";
  var city = "Cidade-ES";
  const [value, setValue] = React.useState("yes");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const onNextButtonClick = () => {
    value === "yes"
      ? history.push(CardRoutes.reissueDetails)
      : history.push(CardRoutes.updateAddress);
  };
  const onCancelButtonClick = () => {
    history.push(CardRoutes.cardOption);
  };

  return (
    <PageContainer>
      <ProcessPageLayout
        appBar={
          <AppBar
            homeRoute={AccountRoutes.home}
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
            title="Segunda via do cartão"
            subtitle="Confirme o endereço"
            description="Verifique se o endereço para envio do cartão está correto."
          />
        }
        main={
          <Box className={styles.container}>
            <Typography className={styles.addressDescription}>
              {address}
              <br />
              {city}
            </Typography>
            <Typography className={styles.questionIsCorrect}>
              {"Endereço está correto?"}
            </Typography>
            <RadioGroup
              className={styles.radioGroup}
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                className={styles.formLabel}
                value="yes"
                control={<Radio className={styles.radio} />}
                label="Sim"
                labelPlacement="start"
              />
              <FormControlLabel
                className={styles.formLabel}
                value="no"
                control={<Radio className={styles.radio} />}
                label="Não"
                labelPlacement="start"
              />
            </RadioGroup>
          </Box>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                palette="primary"
                endIcon={<KeyboardArrowRight color="secondary" />}
                onClick={onNextButtonClick}
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
