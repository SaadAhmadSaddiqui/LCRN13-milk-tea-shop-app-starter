import PropTypes from "prop-types";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants";

const CustomButton = ({ containerStyle, labelStyle, label, onPress, primaryButton, secondaryButton }) => {
	return (
		<TouchableOpacity
			style={{
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: primaryButton ? COLORS.primary : "transparent",
				borderColor: secondaryButton ? COLORS.primary : "transparent",
				borderWidth: secondaryButton ? 1 : 0,
				...containerStyle,
			}}
			onPress={onPress}
		>
			<Text
				style={{
					color: primaryButton ? COLORS.white : COLORS.primary,
					...labelStyle,
				}}
			>
				{label}
			</Text>
		</TouchableOpacity>
	);
};

CustomButton.propTypes = {
	containerStyle: PropTypes.shape({}),
	label: PropTypes.string,
	labelStyle: PropTypes.shape({}),
	onPress: PropTypes.func,
	primaryButton: PropTypes.bool,
	secondaryButton: PropTypes.bool,
};

export default CustomButton;
