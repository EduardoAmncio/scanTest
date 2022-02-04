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
            licenseKey={"AUwRxjajF5/yPiJAOjUxxJ0RXTI1JkVRkkYgCCpyhko2VKIq8D0pEJFCeYymFBlVklXbejVay9uUQBjPpUCtr8VpDEKlWZL+I3468BdfLWHCKwKVpRpFN+0pfUwuDz5pLOL2fHeTjHwhb42KJKqktmhmhqkoG8mz1MqTZjeELBgWYmdrUoBh499JxZlbP15eTvpRcF64nqOhGyG+pXJp0Wd398HsWx+JjK3gC+X060S8L/ZAjIMMfJk14v1xSuFZDGRm8WLvD8cTF6V+7CmH/gnqcpDf4DrxtTwjLpaiNxW/H32BIT80aTXk+OOWbSquFpz6pq1Qxkqcme5mXhAJAH2B2PYi38uaJD9lYf/Mg8YLuuG/XX6YgATvesEDyxo/1xhIg2vEhEYezFdtxwo+2OOluDSQrcFYps/WlmjAwLaEfW2POWKyvKH7c2gEMO6PRiBOuGQ5pvtmEMWEblyQuHS5Z9lx0gpjUTsv+NgNUrpGK87FCLFFeoeKCt/NNFn7+hy7q/JEYKPFODXSXgGCbDzbV4ET7Z04n0kBZOxBgJ6V9IwP2PmQjI2JMWV8LVUIk/JxKoGdiBTDdOUBMALBAVt3AJIPUeoKjt78qQOBlkeb+ywxCWBnvDpXRPjfYBLIP38APkSntnxMFQYDO4pdXXj47WYCdvd9Bgs16LwVgYW6cjx9b9YMrn2EtPe1DiKKEx2FBQsyfqcZO5SlGlggdms9JrghGYt0iXaJ3zQ6vqRVI1MHfJT9unj7Ho5GBo2PcKt/FO50D/bV3DsiCDBonum5+1RkkXKy7E8YWmpglA=="}
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