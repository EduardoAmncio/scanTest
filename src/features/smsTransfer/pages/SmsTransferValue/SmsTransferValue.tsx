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
import { maskMoney } from "_utils/masks/money";

export const SmsTransferValue: React.FC = () => {
  const [valueInput, setValueInput] = useMask(maskMoney);
  const history = useHistory();

  const onTransferValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValueInput(event.target.value);
  };

  const onCancelButtonClick = () => {
    history.replace(AccountRoutes.home);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    history.push(SmsTransferRoutes.smsTransferDescription);
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
            subtitle="Quanto deseja transferir?"
            description="Digite o valor."
          />
        }
        main={
          <Box component="form" onSubmit={onSubmit}>
            <TextField
              label="Valor"
              placeholder="R$ 0,00"
              value={valueInput}
              inputMode={"numeric"}
              onChange={onTransferValueChange}
            />
          </Box>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                palette="primary"
                endIcon={<KeyboardArrowRight color="secondary" />}
                disabled={valueInput.length < 1}
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
