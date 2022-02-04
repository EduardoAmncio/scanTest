import React from "react";
import { Box } from "@material-ui/core";
import { AppBar } from "components/AppBar";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { TransferenceRoutes } from "../../constants/routes";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { PageContainer } from "components/PageContainer";
import { AccountRoutes } from "features/account/constants/routes";
import { useStyles } from "./Transference.style";
import { SelectionCard } from "components/SelectionCard";
import { useHistory } from "react-router-dom";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import MoneyTransfer from "_assets/icons/money-transfer.svg";

export const Transference: React.FC = () => {
  const history = useHistory();
  const styles = useStyles();

  const _onBankTransferClick = () => {
    history.push(TransferenceRoutes.favoredIdentification);
  };

  return (
    <PageContainer>
      <ProcessPageLayout
        appBar={<AppBar homeRoute={AccountRoutes.home} />}
        header={
          <ProcessDescriptionHeader
            title="Transferência"
            subtitle="Como deseja realizar a transferência?"
            description="Pode ser para uma conta bancária ou por mensagem de texto no celular, mesmo que o beneficiário não tenha conta bancária."
          />
        }
        main={
          <Box className={styles.content}>
            <SelectionCard
              title="Transferir para conta bancária"
              subtitle="Identifique por CPF ou busque em seus contatos"
              endIcon={MoneyTransfer}
              onClick={_onBankTransferClick}
            />
          </Box>
        }
        footer={<ProcessPageFooter />}
      />
    </PageContainer>
  );
};
