import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants";

const CustomButton = ({
  containerStyle,
  labelStyle,
  label,
  onPress,
  primaryButton,
  secondaryButton,
}) => {
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

export default CustomButton;
