import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { COLORS, FONTS, SIZES, icons } from "../../constants";

const HeaderBar = () => {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={styles.headerContentContainer}>
        {/* Greetings */}
        <View style={styles.greetingsContainer}>
          <Text style={styles.font}>Wendy,</Text>
          <Text style={styles.font}>Welcome Back!</Text>
        </View>
        {/* Toggle Button */}
        <TouchableOpacity style={styles.toggleButton}>
          {/* Sun */}
          <View style={[styles.themeIcon, styles.selectedLightModeStyle]}>
            <Image source={icons.sunny} style={styles.image}></Image>
          </View>
          {/* Moon */}
          <View style={[styles.themeIcon, styles.selectedNightModeStyle]}>
            <Image source={icons.night} style={styles.image}></Image>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HeaderBar;

const styles = EStyleSheet.create({
  safeAreaViewContainer: {
    height: 150,
    width: "100%",
    backgroundColor: COLORS.purple,
  },
  headerContentContainer: {
    flexDirection: "row",
    marginTop: Platform.OS === "android" ? SIZES.padding + 1 : 0,
    alignItems: "center",
  },
  greetingsContainer: {
    flex: 1,
    paddingLeft: SIZES.padding,
  },
  font: { color: COLORS.white, ...FONTS.h2 },
  toggleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginHorizontal: SIZES.padding,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.lightPurple,
  },
  themeIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 30,
    width: 30,
    tintColor: COLORS.white,
  },
  selectedNightModeStyle: {
    borderRadius: 20,
    backgroundColor: COLORS.black,
  },
  selectedLightModeStyle: {
    borderRadius: 20,
    backgroundColor: COLORS.yellow,
  },
});
