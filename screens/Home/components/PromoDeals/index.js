import React, { useRef } from "react";
import { Animated, Image, Text, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Tabs from "./components/Tabs";
import CustomButton from "../../../../components/CustomButton";
import dummyData from "../../../../constants/dummy";
import { ws, hs, fs } from "../../../../utils/PixelSizes";
import { COLORS, FONTS, images, SIZES } from "../../../../constants";
import { useNavigation } from "@react-navigation/native";

const PromoDeals = ({ appTheme, promoScrollViewRef, onPromoTabPress }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigator = useNavigation();

  return (
    <View style={styles.promosContainer}>
      {/* Header - Tabs */}
      <Tabs scrollX={scrollX} onPromoTabPress={onPromoTabPress}></Tabs>
      {/* Details */}
      <Animated.FlatList
        ref={promoScrollViewRef}
        data={dummyData.promos}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                width: SIZES.width,
                paddingTop: hs[SIZES.padding],
              }}
            >
              {/* Image */}
              <Image
                source={images.strawberryBackground}
                resizeMode="contain"
                style={{ flex: 1 }}
              />
              {/* Name */}
              <Text
                style={{ color: COLORS.red, ...FONTS.h1, fontSize: fs[27] }}
              >
                {item.name}
              </Text>

              {/* Description */}
              <Text
                style={{
                  marginTop: hs[3],
                  color: appTheme.textColor,
                  ...FONTS.body4,
                }}
              >
                {item.description}
              </Text>

              {/* Calories */}
              <Text
                style={{
                  marginTop: hs[3],
                  color: appTheme.textColor,
                  ...FONTS.body4,
                }}
              >
                Calories: {item.calories}
              </Text>

              {/* Button */}
              <CustomButton
                primaryButton
                label="Order Now"
                containerStyle={{
                  marginTop: hs[10],
                  paddingHorizontal: ws[SIZES.padding],
                  paddingVertical: hs[SIZES.base],
                  borderRadius: ws[SIZES.radius * 2],
                }}
                labelStyle={{
                  ...FONTS.h3,
                }}
                onPress={() => {
                  navigator.navigate("Location");
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default PromoDeals;

const styles = EStyleSheet.create({
  promosContainer: {
    flex: 1,
    alignItems: "center",
  },
});
