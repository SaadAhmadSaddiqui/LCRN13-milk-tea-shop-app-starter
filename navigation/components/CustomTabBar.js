import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, View } from "react-native";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { COLORS } from "../../constants";

const CustomTabBar = (props) => {
	return (
		<View>
			<View style={styles.tabBarContainer}>
				<BottomTabBar {...props.props}></BottomTabBar>
			</View>
		</View>
	);
};

CustomTabBar.propTypes = {
	props: PropTypes.any
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
