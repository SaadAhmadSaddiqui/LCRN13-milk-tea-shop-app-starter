import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { COLORS, FONTS, icons, SIZES } from "../../../constants";
import { hs, ws } from "../../../utils/PixelSizes";

const Rewards = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.rewardsContainer}
      onPress={() => navigation.navigate("Rewards")}
    >
      {/* Reward Cup */}
      <View style={styles.rewardCupContainer}>
        <ImageBackground
          source={icons.reward_cup}
          resizeMode="contain"
          style={styles.cupImageBackground}
        >
          <View style={styles.cupPriceView}>
            <Text style={styles.cupText}>280</Text>
          </View>
        </ImageBackground>
      </View>
      {/* Reward Details */}
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.lightPink,
          marginLeft: -ws[10],
          borderRadius: ws[15],
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: COLORS.primary, ...FONTS.h2 }}>
          Available Rewards
        </Text>
        <View
          style={{
            marginTop: hs[5],
            paddingHorizontal: ws[SIZES.base],
            paddingVertical: hs[SIZES.base],
            borderRadius: ws[SIZES.radius * 2],
            backgroundColor: COLORS.primary,
          }}
        >
          <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
            150 points - $2.50 off
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Rewards;

const styles = EStyleSheet.create({
  rewardsContainer: {
    flexDirection: "row",
    marginTop: hs[SIZES.padding],
    marginHorizontal: ws[SIZES.padding],
    height: hs[100],
  },
  rewardCupContainer: {
    width: ws[100],
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.pink,
    borderTopLeftRadius: ws[15],
    borderBottomLeftRadius: ws[15],
  },
  cupImageBackground: {
    width: ws[85],
    height: hs[85],
    alignItems: "center",
    justifyContent: "center",
  },
  cupPriceView: {
    width: ws[35],
    height: hs[35],
    borderRadius: ws[17],
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "center",
    backgroundColor: COLORS.transparentBlack,
    marginTop: hs[10],
  },
  cupText: {
    color: COLORS.white,
    ...FONTS.h4,
  },
});
