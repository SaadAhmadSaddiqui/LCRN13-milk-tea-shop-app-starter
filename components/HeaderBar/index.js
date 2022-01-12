import PropTypes from "prop-types";
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
import { connect } from "react-redux";
import { toggleTheme } from "../../store/theme/actions";
import { hs, ws } from "../../utils/PixelSizes";

const HeaderBar = ({ appTheme, toggleTheme }) => {
	return (
		<SafeAreaView style={styles.safeAreaViewContainer}>
			<View style={styles.headerContentContainer}>
				{/* Greetings */}
				<View style={styles.greetingsContainer}>
					<Text style={styles.font}>Wendy,</Text>
					<Text style={styles.font}>Welcome Back!</Text>
				</View>
				{/* Toggle Button */}
				<TouchableOpacity
					style={styles.toggleButton}
					onPress={() =>
						toggleTheme(appTheme.name === "light" ? "dark" : "light")
					}
				>
					{/* Sun */}
					<View
						style={[
							styles.themeIcon,
							appTheme.name === "light" ? styles.selectedLightModeStyle : {},
						]}
					>
						<Image source={icons.sunny} style={styles.image}></Image>
					</View>
					{/* Moon */}
					<View
						style={[
							styles.themeIcon,
							appTheme.name === "dark" ? styles.selectedNightModeStyle : {},
						]}
					>
						<Image source={icons.night} style={styles.image}></Image>
					</View>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

HeaderBar.propTypes = {
	appTheme: PropTypes.shape({
		name: PropTypes.string
	}),
	toggleTheme: PropTypes.func
};

const mapStateToProps = (state) => {
	return {
		appTheme: state.appTheme,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleTheme: (themeType) => dispatch(toggleTheme(themeType)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);

const styles = EStyleSheet.create({
	safeAreaViewContainer: {
		height: hs[140],
		width: "100%",
		backgroundColor: COLORS.purple,
	},
	headerContentContainer: {
		flexDirection: "row",
		marginTop: Platform.OS === "android" ? hs[SIZES.padding] : 0,
		alignItems: "center",
	},
	greetingsContainer: {
		flex: 1,
		paddingLeft: ws[SIZES.padding],
	},
	font: { color: COLORS.white, ...FONTS.h2 },
	toggleButton: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-end",
		marginHorizontal: SIZES.padding,
		height: hs[40],
		borderRadius: ws[20],
		backgroundColor: COLORS.lightPurple,
	},
	themeIcon: {
		width: ws[40],
		height: hs[40],
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		height: hs[30],
		width: ws[30],
		tintColor: COLORS.white,
	},
	selectedNightModeStyle: {
		borderRadius: ws[20],
		backgroundColor: COLORS.black,
	},
	selectedLightModeStyle: {
		borderRadius: ws[20],
		backgroundColor: COLORS.yellow,
	},
});
