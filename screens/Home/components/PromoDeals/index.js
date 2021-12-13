import React from "react";
import { Animated, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Tabs from "./components/Tabs";

const PromoDeals = () => {
  return (
    <View style={styles.promosContainer}>
      {/* Header - Tabs */}
      <Tabs></Tabs>
      {/* Details */}
    
    </View>
  );
};

export default PromoDeals;

const styles = EStyleSheet.create({
  promosContainer: {
    flex: 1,
    alignItems: "center",
  },
});
