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
import { lettersOnly } from "_utils/masks/generics";
import { useMask } from "hooks/useMask";

export const SmsTransferName: React.FC = () => {
  const [smsName, setSmsName] = useMask(lettersOnly);
  const history = useHistory();

  const onSmsNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSmsName(event.target.value);
  };

  const onCancelButtonClick = () => {
    history.replace(AccountRoutes.home);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    history.push(SmsTransferRoutes.smsTransferValue);
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
            subtitle="Qual o nome de quem receberá sua transferência?"
            description="Esse nome lhe ajudará a identificar a operação em seu extrato. Não se preocupe, se não sabe do nome completo do seu beneficiário, ele poderá ajustar quando for resgatar o valor."
          />
        }
        main={
          <Box component="form" onSubmit={onSubmit}>
            <TextField
              label="Nome completo"
              placeholder="Digite aqui"
              value={smsName}
              inputMode={"text"}
              onChange={onSmsNameChange}
            />
          </Box>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                palette="primary"
                endIcon={<KeyboardArrowRight color="secondary" />}
                disabled={smsName.length < 5}
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
