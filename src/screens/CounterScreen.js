import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
	switch (action.type) {
		case "INCREMENT":
			return { ...state, count: state.count + 1 };
		case "DECREMENT":
			return { ...state, count: state.count - 1 };
		default:
			return state;
	}
};

const CounterScreen = () => {
	// const [counter, setCounter] = useState(0);

	const [state, dispatch] = useReducer(reducer, { count: 0 });
	const { count } = state;
	return (
		<View>
			<Text>Current Count:{count}</Text>
			<Button
				title='Increment'
				onPress={() => dispatch({ type: "INCREMENT" })}
			/>
			<Button
				title='Decrement'
				onPress={() =>
					dispatch({
						type: "DECREMENT"
					})
				}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default CounterScreen;
