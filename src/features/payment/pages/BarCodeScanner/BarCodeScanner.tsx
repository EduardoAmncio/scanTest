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
            licenseKey={"ATUhtzCjEV+mKPbT3hBV3Tc6t886KGobQm8ekL5z0hZFRub3piWDV4ZatCGxPH2qBkK510NvWJDjaFtQUXNZZTFl997rc2zfQRN+04VekKsubLT6oUn4ogVUsOhFaV/szEirvflEeHfCYN8Jnmk3Op9LSxTCe7clKUiRq45tTZ2ve/zzUCNDZsJC8ELIcrr6hW/inVFH7kOGObci/meycA1ZMAcSSiY4jHN72DV3d8afVqP9S0Mfhwln6SscL4kBHHxymPRMIXo6LYZUiXy7KC1jmurafeV9qmwlstpjbc9oWXJ4iVpEklhiRmw6JrqR02rxaIpd6IvNZ6HMTV1Aw6d8ESmFQ+6PrH40NsYVQYE1czULBS8rqGlMuBxgGatDg2LJ+UtjJ7s8ZVGd9nhy/q4t2V8+Q+dKUHGGD3xez+nQdmVZP0UF3V9vOzL9UjA5iEX+X8t30OpuP6c/lFXSzdh+ZOnCYF/ScGiUzcNaOR1wUg0uH3gLJGpNClnNe0iSZQ512mgz+HUAPIHpZiBmGAExkrZOAb9KvRPM2P5OcIXZEhU5NusFniHRavREECITKAKBB1P122d5KSL+/e7mYpZXA5ALRRigAOVW6tQ2vbTYpjVx+3nSf2ZFZb61pvqmK3sMmm/b01TgIHS/xm1/dfgd1O/CTElOX7yv3Mm9LP82Am8rAHM1+49qtiPFEw0AGtPgquvQLJqS6FftwBH87JUPqmRnfJPb0/3dHvk19ehAyr0Wsp3EZ+qS24l9GHcg1EdzF99a4675HWbgndHluXzTiQm8i08/9ffSCJKRAe5kXk+Mihjwb9R7qO3t3Vrw3LlLMf+sCsAJyp4oR1FsUaBoqITobvtkPAjfYALJWtXolsuaZt3X7basE1GQieb1nnvGDTQ2V7c5ji/SfRGoyNZMWw4wyMl8DB9RfVIwcX6J64D2vGDFvwyGplGUJm56Y4XP05IkKuP+NMgp9pZy/0d6zuzKxCrhRzdGKh+Ih7nhwOKajho5aQJZVCOz8c3t/7CiZKj7Umwo8n0o+mLVRWV7qWVUM1s16vOXnl2+uNHGRzvjVUZikH4CuLJeshDSHYTYEVHNu2aOMJu6Ad2bUgmzaIgfaYD9n+xTPtQY9UUFJ5iba9N9HtUWCxjn+JuyuRHll2CfHCsk3FjYHCvn1otzSlDoxuoMq1UMIPuRDvci22eiwrl5f0PcJrUWeYYZ"}
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