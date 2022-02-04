import React from "react";
import QrReader from "react-qr-reader";
import {
  closeAlert,
  readQrCode,
  setError,
} from "features/qrCodeTransfer/redux/actions";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "redux/state";
import { Alert } from "components/Alert";
import { Loader } from "components/Loader";
import {
  LoadingQrCodeTransferState,
  SuccessQrCodeTransferState,
} from "features/qrCodeTransfer/redux/state";

interface QrCodeReaderProps {
  nextRoute?: string;
}

export const QrCodeReader: React.FC<QrCodeReaderProps> = ({ nextRoute }) => {
  const history = useHistory();
  const qrCodeState = useSelector((state: StoreState) => state.qrCodeTransfer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (qrCodeState instanceof SuccessQrCodeTransferState && nextRoute) {
      history.replace(nextRoute);
    }
  }, [qrCodeState, history, nextRoute]);

  const handleScan = (e: string | null) => {
    if (e) {
      dispatch(readQrCode(e));
    }
  };

  const handleError = (e: any) => {
    dispatch(setError("Não foi possível realizar a leitura."));
  };

  const onAlertClose = () => {
    dispatch(closeAlert());
  };

  return (
    <React.Fragment>
      {qrCodeState.errorMessage && (
        <Alert
          title="Erro"
          message={qrCodeState.errorMessage}
          severity={"error"}
          onClose={onAlertClose}
        />
      )}
      <QrReader delay={1000} onScan={handleScan} onError={handleError} />
      <Loader open={qrCodeState instanceof LoadingQrCodeTransferState} />
    </React.Fragment>
  );
};
