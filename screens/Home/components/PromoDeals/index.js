import React, { useRef } from "react";
import { Animated, Image, Text, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Tabs from "./components/Tabs";
import dummyData from "../../../../constants/dummy";
import { ws, hs } from "../../../../utils/PixelSizes";
import { images, SIZES } from "../../../../constants";

const PromoDeals = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.promosContainer}>
      {/* Header - Tabs */}
      <Tabs></Tabs>
      {/* Details */}
      <Animated.FlatList
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
        renderItem={({ item, index }) => {
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

              {/* Description */}

              {/* Calories */}

              {/* Button */}
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
