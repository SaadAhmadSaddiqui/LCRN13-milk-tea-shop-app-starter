import PropTypes from "prop-types";
import React from "react";
import {
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { COLORS } from "../../constants";
import Svg, { Path } from "react-native-svg";

const CustomTabBarButton = ({ containerStyle, isFloat, children, onPress }) => {
	if (isFloat) {
		return (
			<View
				style={{
					flex: 1,
					alignItems: "center",
				}}
			>
				<Svg
					xmlns="http://www.w3.org/2000/svg"
					width={90}
					height={61}
					viewBox="0 0 90 61"
					style={{marginTop: -1}}
				>
					<Path
						d="M0 0a38.742 38.742 0 0113 7c5.313 4.4 6.7 8.593 12 13 5.993 4.98 12.987 8 20 8s14.007-3.02 20-8c5.3-4.408 6.687-8.6 12-13a38.742 38.742 0 0113-7v61H0V0z"
						fill="#4d4d4d"
						fillRule="evenodd"
					/>
				</Svg>
				<TouchableOpacity
					style={{
						position: "absolute",
						top: -40,
						alignItems: "center",
						justifyContent: "center",
						width: 60,
						height: 60,
						borderRadius: 30,
						backgroundColor: COLORS.primary,
					}}
					onPress={onPress}
				>
					{children}
				</TouchableOpacity>
			</View>
		);
	} else {
		return (
			<TouchableWithoutFeedback onPress={onPress}>
				<View
					style={{
						flex: 1,
						height: 60,
						backgroundColor: COLORS.gray3,
						...containerStyle,
					}}
				>
					{children}
				</View>
			</TouchableWithoutFeedback>
		);
	}
};

CustomTabBarButton.propTypes = {
	children: PropTypes.any,
	containerStyle: PropTypes.any,
	isFloat: PropTypes.any,
	onPress: PropTypes.any
};

export default CustomTabBarButton;

