import PropTypes from "prop-types";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Location = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Location</Text>

			<TouchableOpacity onPress={() => navigation.navigate("Order")}>
				<Text>Navigate to Order</Text>
			</TouchableOpacity>
		</View>
	);
};

Location.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func,
	}),
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default Location;
