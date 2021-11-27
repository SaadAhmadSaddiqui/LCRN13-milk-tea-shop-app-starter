import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  BottomTabBar,
  BottomTabBarHeightContext,
} from "@react-navigation/bottom-tabs";
import { COLORS } from "../../constants";

const CustomTabBar = (props) => {
  console.log(BottomTabBarHeightContext);
  return (
    <View>
      <View style={styles.tabBarContainer}>
        <BottomTabBar {...props.props}></BottomTabBar>
      </View>
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  tabBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: COLORS.gray3,
  },
});
