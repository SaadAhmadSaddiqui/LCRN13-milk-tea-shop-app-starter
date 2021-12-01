import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import HeaderBar from "../components/HeaderBar";
import { COLORS, SIZES } from "../constants";
import { hs, ws } from "../utils/PixelSizes";
import EStyleSheet from "react-native-extended-stylesheet";

const Home = ({ appTheme, navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderBar></HeaderBar>
      <ScrollView
        style={[
          styles.scrollView,
          { backgroundColor: appTheme.backgroundColor },
        ]}
      ></ScrollView>
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
