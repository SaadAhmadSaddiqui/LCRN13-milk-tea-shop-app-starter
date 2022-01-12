import { lightTheme, darkTheme } from "../../constants";

export const TOGGLE_THEME_BEGIN = "TOGGLE_THEME_BEGIN";
export const TOGGLE_THEME_SUCCESS = "TOGGLE_THEME_SUCESS";
export const TOGGLE_THEME_FAILURE = "TOGGLE_THEME_FAILURE";

export const toggleThemeBegin = () => {
	return {
		type: TOGGLE_THEME_BEGIN,
	};
};

export const toggleThemeSuccess = (selectedTheme) => {
	return {
		type: TOGGLE_THEME_SUCCESS,
		payload: { selectedTheme },
	};
};

export const toggleThemeFailure = (error) => {
	return {
		type: TOGGLE_THEME_FAILURE,
		payload: { error },
	};
};

export const toggleTheme = (themeType) => {
	return (dispatch) => {
		dispatch(toggleThemeBegin());
		switch (themeType) {
		case "dark":
			dispatch(toggleThemeSuccess(darkTheme));
			break;
		case "light":
			dispatch(toggleThemeSuccess(lightTheme));
			break;
		default:
			dispatch(toggleThemeFailure({ error: "Invalid theme type" }));
			break;
		}
	};
};
