import React, { useState, useEffect } from "react";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { AppBar } from "components/AppBar";
import { AccountRoutes } from "features/account/constants/routes";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { InputNumber } from "features/topUp/components/InputNumber";
import { nextLabel } from "constants/buttons/labels";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { KeyboardArrowRight } from "@material-ui/icons";
import { Button } from "components/Button";
import { useHistory } from "react-router-dom";
import { TopUpRoutes } from "features/topUp/constants/routes";
import { Box } from "@material-ui/core";
import { InputText } from "features/topUp/components/InputText";
import { useStyle } from "./TopUpNumber.style";
import { Typography } from "@material-ui/core";
import { SwitchIOS } from "components/SwitchIOS";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "redux/state";
import { SuccessTopUpState } from "features/topUp/redux/state";
import { closeAlert, getTopUpProductListByPhoneNumber, updateTopUpData } from "features/topUp/redux/actions";
import { Loader } from "components/Loader";
import { Alert } from "components/Alert";
import { PageContainer } from "components/PageContainer";
import { Validator } from "components/Validator/Validator";


export const TopUpNumber: React.FC = () => {

  const numberPhone = useSelector(
    (state: StoreState) => state.topUp.topUp?.phoneNumber
  );

  const topUp = useSelector((state: StoreState) => state.topUp);
  const [submitted, setSubmitted] = React.useState(false);

  const dispatch = useDispatch();

  const style = useStyle();
  const history = useHistory();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPhoneNumber, setConfirmPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [favoriteInput, setFavoriteInput] = React.useState(false);
  const [displayState, setDisplayState] = React.useState("none");

  let isValueNumber = numberPhone;

  const { loading, errorMessage } = topUp;

  React.useEffect(() => {
    dispatch(updateTopUpData());
  }, []);

  React.useEffect(() => {
    if (submitted && topUp instanceof SuccessTopUpState) {
      history.push(TopUpRoutes.checkDataTopUp);

      dispatch(
        updateTopUpData({
          phoneNumber: phoneNumber
        })
      );
    }
  }, [
    submitted,
    dispatch,
    history,
    topUp,
  ]);

  React.useEffect(() => {
    phoneNumber.length === 16 && confirmPhoneNumber.length === 16 && phoneNumber === confirmPhoneNumber ? setIsValid(true) : setIsValid(false);
  }, [
    phoneNumber,
    confirmPhoneNumber
  ]);

  let number = !phoneNumber ? isValueNumber : phoneNumber;

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (number === confirmPhoneNumber) {
      dispatch(getTopUpProductListByPhoneNumber(phoneNumber));
      setSubmitted(true);
    }
  };

  const onAlertClose = () => {
    dispatch(closeAlert());
  };

  const onFavoriteSwitch = () => {
    setFavoriteInput(!favoriteInput);
    !favoriteInput ? setDisplayState("block") : setDisplayState("none");
  };

  return (
    <PageContainer>

      <ProcessPageLayout
        appBar={<AppBar homeRoute={AccountRoutes.home} />}
        header={
          <ProcessDescriptionHeader
            title="Recargas"
            subtitle="Celular pr??-pago"
            description="Novo n??mero"
          />
        }
        main={
          <Box className={style.mainContent}>
            <Box className={style.inputNumberContent}>
              <InputNumber
                description="Celular com DDD"
                placeholder="(   )    -"
                setValuePhone={setPhoneNumber}
                valueNumberPhone={isValueNumber}
              />
            </Box>
            <Box>
              <InputNumber
                description="Confirme o celular com DDD"
                placeholder="(   )    -"
                setValuePhone={setConfirmPhoneNumber}
              />
            </Box>

            <Validator
              value={confirmPhoneNumber}
              description={isValid ? "Os n??meros correspondem!" : "Os n??meros n??o correspondem!"}
              isValid={isValid}
              validation={() => { }}
              onValidate={() => { }}
              strictValidation={true}
            />

            {/* <Box className={style.switchContent}>
              <Typography className={style.labelStyle}>
                <label>Adicionar aos favoritos</label>
              </Typography>
              <SwitchIOS onClick={onFavoriteSwitch} checked={favoriteInput} />
            </Box>
            <InputText
              description="Apelido para o n??mero (opcional)"
              placeholder="Celular do escrit??rio"
              isVisible={displayState}
            /> */}
          </Box>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                endIcon={<KeyboardArrowRight color="secondary" />}
                disabled={!isValid}
                onClick={onSubmit}
              >
                {nextLabel}
              </Button>
            }
          />
        }
      />

      {errorMessage && (
        <Alert
          title="Erro"
          message={errorMessage}
          severity={"error"}
          onClose={onAlertClose}
        />
      )}
      <Loader open={loading} />
    </PageContainer>

  );
};