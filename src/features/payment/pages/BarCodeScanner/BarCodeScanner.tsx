import React from "react";
import { PageContainer } from "components/PageContainer";
import { LandscapeContainner } from "features/payment/components/LandscapeContainer";
import { BarcodeInfors } from "features/payment/components/BarcodeInfors";
import { Box } from "@material-ui/core";
import { useStyles } from "./BarCodeScanner.style";
import { BarcodePicker } from "scandit-sdk/build/main/lib/barcodePicker/barcodePicker";
import { Barcode } from "scandit-sdk/build/main/lib/barcode";
import { ScanSettings } from "scandit-sdk/build/main/lib/scanSettings";
//@ts-ignore
import ScanditBarcodeScanner from "scandit-sdk-react";
//import { Barcode, BarcodePicker, ScanSettings } from "scandit-sdk";
import "./Style.scss"


export const BarCodeScanner: React.FC = () => {
  const styles = useStyles();

  return (
    <PageContainer>
      <LandscapeContainner>
        <BarcodeInfors />
        <Box className={styles.scanner}>
          <ScanditBarcodeScanner
            licenseKey={"AaUhdBGjMBDlF+VGegzhnXgTOLvlOWULI2XPNhh3pGyIaove0zim3W5DrKX3GCqb0RrKu4x6aw9ffihvP1adzxh+36MyQuXKZEFNi+NaCZipPqmIyCmYFIkkCSWoBXic1cSZ33wZqyt1PN5BR1Id8DoPnGpkc2WASrdrCyY9Tz2MRyqe0yDV/SxQECtHYmfn5jPe2oemfxc51kFobIab8CyT6JHGACzy9QhLkJzMxG3E9oBh4Yxva1Ut2DOc7zCMhg6LOGVZoCqfxixMlX2CuYlwLE8zdOV3w3XTCBV3j5y73a+xI8SS7E+1AbMyOoYjZZVP4mDonytqYCaKYSMj6rOHbo3DT18on+4SbX35wqsZhRxftV90AH3H8lBKwfrqRMK01kKXNq5s+hxI/j15xg0AaRm8rB1eeKz9iqy+TR4Y7gVJximk4/LONKafJoHpK45i/w2VdqyMLrPhFsc8zNk8nS5BmIgv7Hgz3pGn8ZZGomaSF6I6Vgu0vyALMwJVGMgfduU6tBbkk2AqUi2YspCPlfyNZeSQnjmJlUhjzryNPOXEjWuCNnChlKtev2G+Q6ixOM/k4SQtS0qtpadb0TfyiMp6zv4jn8Kwiy7XSjuwyev6ffDLgRIYOknrmOBsRz9Jzy2GvoxFomFleC97JOUWLLJ/9liJW25HW3LktQaLbmO2CK9AsHwyg3y4ut0XZ2yUshcEv82feIr/kupZ/EiHuHwdEmBPDWB27wJzWVy9ICF0Afz8a02JWxutXg5gcSX3T5/fKZFn125qFJvDJz531+9N14k/01HCx9Sk2Q=="}
            laserArea={{ x: 0, y: 0, width: 1, height: 1 }}
            vibrateOnScan={false}
            guiStyle={BarcodePicker.GuiStyle.NONE}
            videoFit={BarcodePicker.ObjectFit.COVER}
            scanSettings={
              new ScanSettings({
                enabledSymbologies: [
                  Barcode.Symbology.INTERLEAVED_2_OF_5,
                  Barcode.Symbology.IATA_2_OF_5,
                  Barcode.Symbology.CODE128,
                  Barcode.Symbology.DOTCODE,
                  Barcode.Symbology.EAN8
                ]
              })
            }
            playSoundOnScan={true}
            engineLocation="https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build"
            onScan={(scanResult: any) => {
              alert(scanResult.barcodes[0].data)
              // console.log("Código: ", scanResult.barcodes[0].data)
            }}
          />
        </Box>
      </LandscapeContainner>
    </PageContainer>
  );
};