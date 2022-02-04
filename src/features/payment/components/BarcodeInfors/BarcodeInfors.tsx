import { Box } from "@material-ui/core";
import { BarcodeFooter } from "../BarcodeFooter";
import { BarcodeHeader } from "../BarcodeHeader";
import { OrientationBarIcon } from "../OrientationBarIcon";
import { useStyles } from "./BarcodeInfors.style";

export const BarcodeInfors: React.FC = () => {

  const style = useStyles();

  return (
    <Box className={style.container}>
      <BarcodeFooter/>
      <OrientationBarIcon/>
      <BarcodeHeader/>
    </Box>
  );
}