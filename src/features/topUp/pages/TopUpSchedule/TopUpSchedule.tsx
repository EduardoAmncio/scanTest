import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Box } from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";
import { PageContainer } from "components/PageContainer";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { AppBar } from "components/AppBar";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { Button } from "components/Button";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon";
import { SwitchIOS } from "components/SwitchIOS";
import { ContentBalance } from "features/topUp/components/ContentBalance";
import { TopUpRoutes } from "features/topUp/constants/routes";
import { AccountRoutes } from "features/account/constants/routes";
import { useStyle } from "./TopUpSchedule.style";
import simCardLogo from "_assets/icons/TimIcon.svg";
import { useSelector } from "react-redux";
import { StoreState } from "redux/state";
import { nextLabel } from "constants/buttons/labels";
import { useDispatch } from "react-redux";

export const TopUpSchedule: React.FC = () => {
  const { scheduleTopUp, days } = useSelector(
    (state: StoreState) => state.topUp
  );
  const [visibilityRepeatDays, setVisibilityRepeatDays] =
    React.useState("none");
  const [isSwitchChecked, setIsSwitchChecked] = React.useState(scheduleTopUp);

  useEffect(() => {
    isSwitchChecked
      ? setVisibilityRepeatDays("block")
      : setVisibilityRepeatDays("none");
  }, [isSwitchChecked]);

  const styles = useStyle({ visibilityRepeatDays });
  const history = useHistory();
  const dispatch = useDispatch();

  const userCellNumber = "99 99999999";
  const ammountDays = days;
  const balance = "1.702,00";
  const creditValue = "10,00";

  const onNextButtonClick = () => {
    history.push(TopUpRoutes.completeTopUp);
  };

  const handleSwitchInput = () => {
    if (scheduleTopUp) {
      setIsSwitchChecked(false);
    } else {
      history.push(TopUpRoutes.periodicRepetition);
      setIsSwitchChecked(!isSwitchChecked);
    }
  };

  return (
    <React.Fragment>
      <PageContainer>
        <ProcessPageLayout
          appBar={<AppBar homeRoute={AccountRoutes.home} />}
          header={
            <Box className={styles.headerStyle}>
              <ProcessDescriptionHeader
                title={"Recargas"}
                subtitle={"Celular pré-pago"}
                description={`Recarregar meu número ${userCellNumber}`}
              />
            </Box>
          }
          main={
            <React.Fragment>
              <Box className={styles.contentBalanceContainerReference}>
                <Box className="contentBalanceContainer">
                  <ContentBalance balance={balance} />
                </Box>
              </Box>
              <Box className={styles.creditRequestContainer}>
                <img src={simCardLogo} alt="Operadora Telefônica" />
                <Box className="wrapper">
                  <p>R$ {creditValue}</p>
                  <span>Válido por 30 dias</span>
                </Box>
              </Box>
              <Box className={styles.dateInputContainer}>
                <label htmlFor="dateInput">Quando?</label>
                <input
                  type="text"
                  className={styles.dateInput}
                  disabled
                  id="dateInput"
                  value="Hoje"
                />
              </Box>
              <Box className={styles.scheduleButtonContainer}>
                <ButtonWithFloatingIcon>
                  <span>Agendar</span>
                </ButtonWithFloatingIcon>
              </Box>
              <Box className={styles.switchContainer}>
                <span className="switchContainerLabel">
                  Repetir essa recarga
                </span>
                <SwitchIOS
                  onClick={handleSwitchInput}
                  checked={isSwitchChecked}
                />
              </Box>
              <Box className={styles.repeatDaysContainerReference}>
                <span className="repeatDaysMensage">{`Repetir a cada ${ammountDays} dias`}</span>
              </Box>
            </React.Fragment>
          }
          footer={
            <Box>
              <ProcessPageFooter
                primaryButton={
                  <Button
                    onClick={onNextButtonClick}
                    endIcon={<KeyboardArrowRight color="secondary" />}
                  >
                    {nextLabel}
                  </Button>
                }
              />
            </Box>
          }
        />
      </PageContainer>
    </React.Fragment>
  );
};
