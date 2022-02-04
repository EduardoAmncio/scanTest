import React from "react";
import { PageContainer } from "components/PageContainer";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { AppBar } from "components/AppBar";
import { AccountRoutes } from "features/account/constants/routes";
import { Button } from "components/Button";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { useHistory } from "react-router-dom";
import { TextField } from "components/TextField";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { SmsTransferRoutes } from "features/smsTransfer/constants/routes";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { Box } from "@material-ui/core";
import { useMask } from "hooks/useMask";
import { maskPhone } from "_utils/masks/phone";

export const SmsTransferNumber: React.FC = () => {
  const [numberInput, setNumberInput] = useMask(maskPhone);
  const history = useHistory();

  const onSmsNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberInput(event.target.value);
  };

  const onCancelButtonClick = () => {
    history.replace(AccountRoutes.home);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    history.push(SmsTransferRoutes.smsTransferName);
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
            title="Transferência pelo celular"
            subtitle="O primeiro passo é identificar o celular que receberá a transferência"
            description="Certifique-se que o número está correto, seu beneficiário receberá um código por SMS para ter acesso ao valor."
          />
        }
        main={
          <Box component="form" onSubmit={onSubmit}>
            <TextField
              label="Celular com DDD"
              placeholder="(XX) XXXX.XXXX"
              value={numberInput}
              inputMode={"numeric"}
              onChange={onSmsNumberChange}
            />
          </Box>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                palette="primary"
                endIcon={<KeyboardArrowRight color="secondary" />}
                disabled={numberInput.length < 16}
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
