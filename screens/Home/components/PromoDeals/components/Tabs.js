import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { connect } from "react-redux";
import { constants, COLORS, FONTS, SIZES } from "../../../../../constants";
import { hs, ws } from "../../../../../utils/PixelSizes";

const promoTabs = constants.promoTabs;

const TabIndicator = ({}) => {
  return (
    <View
      style={{
        position: "absolute",
        height: "100%",
        width: ws[100],
        left: 0,
        borderRadius: ws[SIZES.radius],
        backgroundColor: COLORS.primary,
      }}
    ></View>
  );
};

const Tabs = ({ appTheme }) => {
  return (
    <View
      style={[
        styles.tabsContainer,
        { backgroundColor: appTheme.tabBackgroundColor },
      ]}
    >
      {/* Tab Indicator */}
      <TabIndicator></TabIndicator>
      {/* Tabs */}
      {promoTabs.map((item, index) => {
        return (
          <TouchableOpacity
            key={`PromoTab-${index}`}
            onPress={() => {
              console.log(item);
            }}
          >
            <View
              style={{
                paddingHorizontal: ws[20],
                alignItems: "center",
                justifyContent: "center",
                height: hs[40],
              }}
            >
              <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
      <View style={styles.tabs}></View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    appTheme: state.appTheme,
  };
};

export default connect(mapStateToProps)(Tabs);

const styles = EStyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hs[SIZES.padding],
    borderRadius: ws[SIZES.radius],
  },
  tabIndicator: {},
});
