import React from "react";
import { PageContainer } from "components/PageContainer";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { AppBar } from "components/AppBar";
import { AccountRoutes } from "features/account/constants/routes";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { useStyles } from "./CheckDataTopUp.style";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { ContentBalance } from "features/topUp/components/ContentBalance";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { KeyboardArrowRight } from "@material-ui/icons";
import { nextLabel } from "constants/buttons/labels";
import { Button } from "components/Button";
import { TopUpRoutes } from "features/topUp/constants/routes";
import { useHistory } from "react-router-dom";
import TimIcon from "_assets/icons/TimIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "redux/state";
import { updateTopUpData } from "features/topUp/redux/actions";
import { CurrencyFormatter } from "_translate";

export const CheckDataTopUp: React.FC = () => {
  const style = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const topUpState = useSelector((store: StoreState) => store.topUp);
  const balance: number = useSelector(
    (store: StoreState) => store.account.dashboard?.balance!
  );

  const { topUpPhoneNumberList, topUp } = topUpState;
  const product =
    topUp?.topUpProduct ?? topUpPhoneNumberList?.topUpPhoneNumberList[0];

  React.useEffect(() => {
    dispatch(
      updateTopUpData({
        originNSU: topUpPhoneNumberList?.originNSU,
        topUpProduct: product,
      })
    );
  }, []);

  const onNextButtonClick = () => history.push(TopUpRoutes.completeTopUp);
  const onListCharge = () => history.push(TopUpRoutes.topUpValue);

  return (
    <PageContainer>
      <ProcessPageLayout
        appBar={<AppBar homeRoute={AccountRoutes.home} />}
        header={
          <Box className={style.headerContent}>
            <ProcessDescriptionHeader
              title="Recargas"
              subtitle="Celular pré-pago"
              description={`Recarregar o número ${topUp?.phoneNumber}`}
            />
          </Box>
        }
        main={
          <Box>
            <Box className={style.viewBalance}>
              <ContentBalance balance={CurrencyFormatter.format(balance)} />
            </Box>
            <Box className={style.operatorView}>
              <Typography className={style.txtOperator}>
                {/* Sua operadora */}
              </Typography>
              {/* <img
                src={TimIcon}
                alt="Icone Tim"
                className={style.iconOperator}
              /> */}
              {/* <strong>{product?.description}</strong> */}
            </Box>
            <List className={style.list} disablePadding={true}>
              <Box onClick={onListCharge}>
                <ListItem button className={style.listItem}>
                  <ListItemText
                    primary={
                      <Box>
                        <label className={style.spantext}>Qual o valor?</label>
                        <Typography className={style.valueTopUp}>
                          {CurrencyFormatter.format(product?.productValue!) +
                            " " +
                            product?.description}
                        </Typography>
                      </Box>
                    }
                    // secondary={
                    //   <Box>
                    //     <Typography className={style.validateTopUp}>
                    //       Válido por 30 dias
                    //     </Typography>
                    //   </Box>
                    // }
                  />
                  <ListItemSecondaryAction className={style.selectValue}>
                    <p>
                      Selecionar <span className={style.blocktext}>valor</span>
                    </p>
                  </ListItemSecondaryAction>
                </ListItem>
              </Box>
            </List>
          </Box>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
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
