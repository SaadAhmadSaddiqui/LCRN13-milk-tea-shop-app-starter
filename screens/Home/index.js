import React from "react";
import { View, ScrollView } from "react-native";
import { connect } from "react-redux";
import HeaderBar from "../../components/HeaderBar";
import { SIZES } from "../../constants";
import { hs, ws } from "../../utils/PixelSizes";
import EStyleSheet from "react-native-extended-stylesheet";
import Rewards from "./components/Rewards";
import PromoDeals from "./components/PromoDeals";

const Home = ({ appTheme, navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderBar></HeaderBar>
      <ScrollView
        style={[
          styles.scrollView,
          { backgroundColor: appTheme.backgroundColor },
        ]}
        contentContainerStyle={{
          paddingBottom: hs[150],
        }}
      >
        {/* Rewards */}
        <Rewards navigation={navigation}></Rewards>
        {/* Promo */}
        <PromoDeals appTheme={appTheme}></PromoDeals>
      </ScrollView>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    marginTop: -hs[25],
    borderTopLeftRadius: ws[SIZES.radius * 2],
    borderTopRightRadius: ws[SIZES.radius * 2],
  },
});

const mapStateToProps = (state) => {
  return {
    appTheme: state.appTheme,
  };
};

export default connect(mapStateToProps)(Home);
