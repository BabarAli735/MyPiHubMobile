import { BarCodeScanner } from "react-native-qrcode-svg";
import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text } from "react-native";
import BarcodeMask from "react-native-barcode-mask";

const finderWidth = 280;

const finderHeight = 230;

const width = Dimensions.get("window").width;

const height = Dimensions.get("window").height;

const viewMinX = (width - finderWidth) / 2;

const viewMinY = (height - finderHeight) / 2;

export default ({ onScan }) => {
  const [hasPermission, setHasPermission] = useState(null);
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();

    return BarCodeScanner;
  }, []);

  const handleBarCodeScanned = (scanningResult) => {
    const { type, data, bounds: { origin } = {} } = scanningResult;

    // @ts-ignore

    const { x, y } = origin;

    if (
      x >= viewMinX &&
      y >= viewMinY &&
      x <= viewMinX + finderWidth / 2 &&
      y <= viewMinY + finderHeight / 2
    ) {
      alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      onScan(data);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <BarCodeScanner
      onBarCodeScanned={handleBarCodeScanned}
      type={BarCodeScanner.Constants.Type.back}
      barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
      style={[StyleSheet.absoluteFillObject, styles.container]}
    >
      <BarcodeMask edgeColor="#62B1F6" showAnimatedLine />
    </BarCodeScanner>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
