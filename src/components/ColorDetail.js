import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const ColorDetail = ({
	color,
	setColor,
	colorVariable,
	onIncrease,
	onDecrease
}) => {
	return (
		<View>
			<Text style={styles.textStyles}>{color}</Text>
			<Button
				title={`More ${color}`}
				onPress={() => onIncrease()}
				// style={styles.buttonStyles}
				// onPress={() => {
				// 	colorVariable + 10 > 255
				// 		? setColor(255)
				// 		: setColor(colorVariable + 10);
				// }}
			/>
			<Button
				title={`Less ${color}`}
				onPress={() => onDecrease()}

				// style={styles.buttonStyles}
				// onPress={() => {
				// 	colorVariable - 10 < 0 ? setColor(0) : setColor(colorVariable - 10);
				// }}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyles: {}
});

export default ColorDetail;
