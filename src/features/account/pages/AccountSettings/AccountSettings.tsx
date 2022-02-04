import React from "react";
import { PageContainer } from "components/PageContainer";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { AccountCard } from "features/account/components/AccountCard";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { useStyles } from "./AccountSettings.style";
import { useHistory } from "react-router-dom";
import { AccountRoutes } from "features/account/constants/routes";
import { Box } from "@material-ui/core";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon";
import { ActionList } from "components/ActionList";
import { ActionListItem } from "components/ActionListItem";
import { ConfirmSignoutDialog } from "features/authentication/components/ConfirmSignoutDialog";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "components/Button";
import { KeyboardArrowLeft } from "@material-ui/icons";
import { StoreState } from "redux/state";
import Check from "_assets/icons/Check.svg";
import { UserRoutes } from "features/user/constants/routes";
import { CardRoutes } from "features/card/constants/routes";
import { Divider } from "components/Divider";
import { changeAccount } from "features/account/redux/actions";
import { Account } from "features/account/redux/models/account";

export const AccountSettings: React.FC = () => {
  const { dashboard } = useSelector((state: StoreState) => ({
    dashboard: state.account,
  }));

  const { accounts } = dashboard.dashboard!;

  const accountIn = dashboard.account?.accountId;

  const [openConfirmSignoutDialog, setOpenConfirmSignoutDialog] =
    React.useState(false);
  const history = useHistory();
  const styles = useStyles();
  const dispatch = useDispatch();

  const onSeeAllButtonClick = () => {
    history.push(AccountRoutes.allAccounts);
  };

  const onAccountClick = (account: Account) => {
    dispatch(changeAccount(account));
  };

  const onBackToHome = () => history.push(AccountRoutes.home);

  const onPersonalInformationClick = () => {
    history.push(UserRoutes.home);
  };

  const onHelpClick = () => {
    history.push(AccountRoutes.help);
  };

  const onCardManagementClick = () => {
    history.push(CardRoutes.cardManagement);
  };

  const onSignOutClick = () => {
    setOpenConfirmSignoutDialog(true);
  };

  const onConfirmSignoutClose = () => {
    setOpenConfirmSignoutDialog(false);
  };

  return (
    <PageContainer>
      <ProcessPageLayout
        header={
          <React.Fragment>
            <ProcessDescriptionHeader title="Configurações" />
            {accounts.map((accountItem, index) => {
              const accountComponent = (
                <AccountCard
                  className={styles.cardBackground}
                  key={accountItem.accountId}
                  account={accountItem}
                  endIcon={
                    accountItem.accountId === accountIn ? Check : undefined
                  }
                  onClick={() => onAccountClick(accountItem)}
                />
              );
              if (index < accounts.length - 1)
                return (
                  <React.Fragment>
                    {accountComponent}
                    <Divider spacing={1} />
                  </React.Fragment>
                );

              return accountComponent;
            })}
          </React.Fragment>
        }
        main={
          <React.Fragment>
            <Box
              display="flex"
              justifyContent="center"
              className={styles.seeAllButton}
            >
              <ButtonWithFloatingIcon onClick={onSeeAllButtonClick}>
                Ver Todas
              </ButtonWithFloatingIcon>
            </Box>
            <ActionList>
              <ActionListItem
                key="Informações pessoais"
                onClick={onPersonalInformationClick}
              >
                Informações pessoais
              </ActionListItem>
              <ActionListItem
                key="Gerenciar Cartões"
                onClick={onCardManagementClick}
              >
                Gerenciar Cartões
              </ActionListItem>
              <ActionListItem key="Informações pessoais" onClick={onHelpClick}>
                Ajuda
              </ActionListItem>
              <ActionListItem key="Sair" onClick={onSignOutClick}>
                Sair
              </ActionListItem>
            </ActionList>
          </React.Fragment>
        }
        footer={
          <ProcessPageFooter
            secondaryButton={
              <Button
                palette="secondary"
                startIcon={<KeyboardArrowLeft color="secondary" />}
                onClick={onBackToHome}
              >
                Voltar
              </Button>
            }
          />
        }
      />
      <ConfirmSignoutDialog
        open={openConfirmSignoutDialog}
        onClose={onConfirmSignoutClose}
      />
    </PageContainer>
  );
};
