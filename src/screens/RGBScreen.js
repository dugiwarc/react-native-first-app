import React, { useState, useReducer } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import ColorDetail from "../components/ColorDetail";

const reducer = (state, action) => {
	switch (action.type) {
		case "CHANGE_RED":
			return state.red + action.payload > 255 || state.red + action.payload < 0
				? state
				: { ...state, red: state.red + action.payload };
		case "CHANGE_GREEN":
			return state.green + action.payload > 255 ||
				state.green + action.payload < 0
				? state
				: { ...state, green: state.green + action.payload };
		case "CHANGE_BLUE":
			return state.blue + action.payload > 255 ||
				state.blue + action.payload < 0
				? state
				: { ...state, blue: state.blue + action.payload };
		default:
			return state;
	}
};

const RGBScreen = () => {
	const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
	const { red, green, blue } = state;
	const COLOR_INCREMENT = 15;

	// const [red, setRed] = useState(0);
	// const [green, setGreen] = useState(0);
	// const [blue, setBlue] = useState(0);

	return (
		<View>
			<ColorDetail
				color='red'
				// setColor={setRed}
				// colorVariable={red}
				onIncrease={() =>
					dispatch({ type: "CHANGE_RED", payload: COLOR_INCREMENT })
				}
				onDecrease={() =>
					dispatch({ type: "CHANGE_RED", payload: -1 * COLOR_INCREMENT })
				}
			/>
			<ColorDetail
				color='green'
				// setColor={setGreen}
				// colorVariable={green}
				onIncrease={() =>
					dispatch({ type: "CHANGE_GREEN", payload: COLOR_INCREMENT })
				}
				onDecrease={() =>
					dispatch({ type: "CHANGE_GREEN", payload: -1 * COLOR_INCREMENT })
				}
			/>
			<ColorDetail
				color='blue'
				// setColor={setBlue}
				// colorVariable={blue}
				onIncrease={() =>
					dispatch({ type: "CHANGE_BLUE", payload: COLOR_INCREMENT })
				}
				onDecrease={() =>
					dispatch({ type: "CHANGE_BLUE", payload: -1 * COLOR_INCREMENT })
				}
			/>
			<View
				style={{
					width: 100,
					height: 100,
					backgroundColor: `rgb(${red}, ${green}, ${blue})`
				}}
			/>
			<Text>{`RGB(${red}, ${green}, ${blue})`}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default RGBScreen;
