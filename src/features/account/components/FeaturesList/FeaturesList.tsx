import { Box } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { TransferenceRoutes } from "features/transference/constants/routes";
import { PaymentRoutes } from "features/payment/constants/routes";
import { QrCodeTransferRoutes } from "features/qrCodeTransfer/constants/routes";
import { TopUpRoutes } from "features/topUp/constants/routes";
import { SquareButtonWithIcon } from "components/SquareButtonWithIcon";
import { useStyles } from "./FeaturesList.style";
import QrCodeIcon from "_assets/icons/QrCode.svg";
import TransferIcon from "_assets/icons/Transfer.svg";
import PaymentIcon from "_assets/icons/Payment.svg";
import TopUpIcon from "_assets/icons/TopUp.svg";

interface FeaturesListProps {
  className?: string;
}

export const FeaturesList: React.FC<FeaturesListProps> = ({ className }) => {
  const history = useHistory();
  const styles = useStyles();

  const onTransferButtonClick = () => {
    history.push(TransferenceRoutes.transference);
  };

  const onPaymentButtonClick = () => {
    history.push(PaymentRoutes.barCodePayment);
  };

  const onQrCodeTransferClick = () => {
    history.push(QrCodeTransferRoutes.qrCodeTransfer);
  };

  const onTopUpButtonClick = () => {
    history.push(TopUpRoutes.topUp);
  };

  return (
    <Box
      display="grid"
      gridTemplateColumns="auto auto auto"
      gridAutoColumns="auto"
      gridRowGap="12px"
      gridColumnGap="8px"
      className={className}
    >
      <Box className={styles.featureItem}>
        <SquareButtonWithIcon
          label="Transferência"
          icon={TransferIcon}
          onClick={onTransferButtonClick}
        />
      </Box>
      <Box className={styles.featureItem}>
        <SquareButtonWithIcon
          label="Pagamento"
          icon={PaymentIcon}
          onClick={onPaymentButtonClick}
        />
      </Box>
      <Box className={styles.featureItem}>
        <SquareButtonWithIcon
          label={"QRCode"}
          icon={QrCodeIcon}
          onClick={onQrCodeTransferClick}
        />
      </Box>
      <Box className={styles.featureItem}>
        <SquareButtonWithIcon
          label={"Recarga"}
          icon={TopUpIcon}
          onClick={onTopUpButtonClick}
        />
      </Box>
    </Box>
  );
};
