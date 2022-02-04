import React from "react";
import { Card, Typography } from "@material-ui/core";
import { useStyle } from "./AccountListPopUp.style";
import { Account } from "features/account/redux/models/account";

interface AccountListPopUpProps {
  account: Account;
  pathImage: string;
  stateImage?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const AccountListPopUp: React.FC<AccountListPopUpProps> = ({
  account,
  pathImage,
  stateImage,
  onClick,
}: AccountListPopUpProps) => {
  const style = useStyle();

  return (
    <Card className={style.allAccountCard} variant="outlined" onClick={onClick}>
      <div>
        <img src={pathImage} alt="Fechar" />
      </div>
      <div>
        <Typography variant="caption" display="block" gutterBottom>
          <div className={style.infoAllAccounts}>
            <div className={style.nameAccount}>
              <strong>{account!.name}</strong>
            </div>
            <div className={style.accountInformations}>
              {account!.spbBankBranch && (
                <span>
                  Conta {account!.spbBankAccount}-{account!.spbBankAccountDigit}{" "}
                </span>
              )}
              <br />
              {account!.spbBank && <span>Banco {account!.spbBank} </span>}
            </div>
          </div>
        </Typography>
      </div>
      <div className={style.imageAccunt}>
        <img src={stateImage} alt="" />
      </div>
    </Card>
  );
};
