import React from "react";
import { AppBar } from "components/AppBar";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { AccountRoutes } from "features/account/constants/routes";
import { useHistory } from "react-router-dom";
import { Button } from "components/Button";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { PageContainer } from "components/PageContainer";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { TextField } from "components/TextField";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { TransferenceRoutes } from "features/transference/constants/routes";
import { useDispatch } from "react-redux";
import { useMask } from "hooks/useMask";
import { maskTransference } from "_utils/masks/transferenceNumber";
import { updateTransferenceData } from "features/transference/redux/actions";
import { Box } from "@material-ui/core";
import { numericOnly } from "_utils/masks/generics";

export const BankBranch: React.FC = () => {
  const [bankBranch, setBankBranch] = useMask(maskTransference);
  const dispatch = useDispatch();
  const history = useHistory();

  const onBankBranchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 4) setBankBranch(event.target.value);
  };

  const onCancelButtonClick = () => {
    dispatch(updateTransferenceData());
    history.go(-6);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (bankBranch.length > 0) {
      dispatch(updateTransferenceData({ bankBranch }));
      history.push(TransferenceRoutes.accountNumber);
    }
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
            title="Transfer??ncia"
            subtitle="Qual o n??mero da ag??ncia?"
            description="Informe o n??mero completo da ag??ncia, incluindo o d??gito."
          />
        }
        main={
          <Box component="form" onSubmit={onSubmit}>
            <TextField
              label="Ag??ncia"
              placeholder="Digite apenas n??meros"
              inputMode="numeric"
              value={bankBranch}
              onChange={onBankBranchChange}
            />
          </Box>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                palette="primary"
                endIcon={<KeyboardArrowRight color="secondary" />}
                disabled={bankBranch.length === 0}
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
