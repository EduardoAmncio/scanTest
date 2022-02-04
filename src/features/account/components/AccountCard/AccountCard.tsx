import React from "react";
import { Card, Grid, Typography } from "@material-ui/core";
import { useStyle } from "./AccountCard.style";
import { Account } from "features/account/redux/models/account";
import image from "_assets/img/imageUserMas.svg";
import asset from "_assets/img/imageStateFirst.svg";
import { DetailsButton } from "features/account/components/DetailsButton";
import { AccountCardDetails } from "features/account/components/AccountCardDetails";

interface AccountCardProps {
  account: Account;
  endIcon?: string | React.ReactNode;
  onClick?: VoidFunction;
  className?: string;
}

export const AccountCard: React.FC<AccountCardProps> = ({
  account,
  endIcon,
  onClick,
  className,
}) => {
  const styles = useStyle();
  const effectiveCardClassName = `${styles.accountCard} ${className ?? ""}`;

  const [bottom, setBottom] = React.useState(false);

  const toggleDrawer = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setBottom(!bottom);
  };

  return (
    <React.Fragment>
      <Card className={effectiveCardClassName} elevation={0} onClick={onClick}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <img src={image} alt="accountImage" />
          </Grid>
          <Grid item className={styles.accountData}>
            <Grid container direction="column">
              <Typography variant="body2">
                <strong>{account!.name}</strong> <br />
                {account!.spbBankBranch && (
                  <text className={styles.description}>
                    {" "}
                    <strong> Agência: {account!.spbBankBranch} </strong>{" "}
                  </text>
                )}
                {account!.spbBankAccount && account!.spbBankAccountDigit && (
                  <text className={styles.description}>
                    <strong>
                      Conta: {account!.spbBankAccount}-
                      {account!.spbBankAccountDigit}{" "}
                    </strong>{" "}
                  </text>
                )}{" "}
                <br />
                {account!.spbBank && (
                  <text className={styles.description}>
                    <strong> Banco: {account!.spbBank} - Fitbank</strong>
                  </text>
                )}
              </Typography>
            </Grid>
          </Grid>
          {endIcon && (
            <Grid item className={styles.endIcon}>
              <img src={asset} alt="accountState" />
            </Grid>
          )}
        </Grid>
        {<DetailsButton title="Detalhes" onClick={toggleDrawer} />}
      </Card>
      {bottom && (
        <AccountCardDetails
          account={account}
          open={bottom}
          onClose={toggleDrawer}
        />
      )}
    </React.Fragment>
  );
};
