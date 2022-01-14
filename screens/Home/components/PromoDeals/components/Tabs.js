import PropTypes from "prop-types";
import React, { createRef, useEffect, useRef, useState } from "react";
import { TouchableOpacity, View, Animated } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { connect } from "react-redux";
import { constants, COLORS, FONTS, SIZES } from "../../../../../constants";
import { hs, ws } from "../../../../../utils/PixelSizes";

const promoTabs = constants.promoTabs.map((promoTab) => {
	return {
		...promoTab,
		ref: createRef(),
	};
});

const TabIndicator = ({ measureLayout, scrollX }) => {
	const inputRange = promoTabs.map((_, i) => i * SIZES.width);

	const tabIndicatorWidth = scrollX.interpolate({
		inputRange,
		outputRange: measureLayout.map((item) => item.width),
	});

	const translateX = scrollX.interpolate({
		inputRange,
		outputRange: measureLayout.map((item) => item.x),
	});

	return (
		<Animated.View
			style={{
				position: "absolute",
				height: "100%",
				width: tabIndicatorWidth,
				left: 0,
				borderRadius: ws[SIZES.radius],
				backgroundColor: COLORS.primary,
				transform: [{ translateX }],
			}}
		></Animated.View>
	);
};

TabIndicator.propTypes = {
	measureLayout: PropTypes.arrayOf(
		PropTypes.shape({
			map: PropTypes.func,
		})
	),
	scrollX: PropTypes.shape({
		interpolate: PropTypes.func,
	}),
};

const Tabs = ({ appTheme, scrollX, onPromoTabPress }) => {
	const [measureLayout, setMeasureLayout] = useState([]);
	const containerRef = useRef();

	const tabPosition = Animated.divide(scrollX, SIZES.width);

	useEffect(() => {
		let ml = [];
		promoTabs.forEach((promo) => {
			promo.ref.current.measureLayout(containerRef.current, (x, y, width, height) => {
				ml.push({
					x,
					y,
					width,
					height,
				});

				if (ml.length === promoTabs.length) {
					setMeasureLayout(ml);
				}
			});
		});
	}, [containerRef.current]);

	return (
		<View ref={containerRef} style={[styles.tabsContainer, { backgroundColor: appTheme.tabBackgroundColor }]}>
			{/* Tab Indicator */}
			{measureLayout.length > 0 && <TabIndicator measureLayout={measureLayout} scrollX={scrollX} />}

			{/* Tabs */}
			{promoTabs.map((item, index) => {
				const textColor = tabPosition.interpolate({
					inputRange: [index - 1, index, index + 1],
					outputRange: [COLORS.lightGray2, COLORS.white, COLORS.lightGray2],
					extrapolate: "clamp",
				});

				return (
					<TouchableOpacity key={`PromoTab-${index}`} onPress={() => onPromoTabPress(index)}>
						<View
							ref={item.ref}
							style={{
								paddingHorizontal: ws[20],
								alignItems: "center",
								justifyContent: "center",
								height: hs[40],
							}}
						>
							<Animated.Text style={{ color: textColor, ...FONTS.h3 }}>{item.title}</Animated.Text>
						</View>
					</TouchableOpacity>
				);
			})}
			<View style={styles.tabs}></View>
		</View>
	);
};

Tabs.propTypes = {
	appTheme: PropTypes.shape({
		tabBackgroundColor: PropTypes.any,
	}),
	onPromoTabPress: PropTypes.func,
	scrollX: PropTypes.any,
};

const mapStateToProps = (state) => {
	return {
		appTheme: state.appTheme,
	};
};

export default connect(mapStateToProps)(Tabs);

const styles = EStyleSheet.create({
	tabsContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: hs[SIZES.padding],
		borderRadius: ws[SIZES.radius],
	},
	tabIndicator: {},
});
