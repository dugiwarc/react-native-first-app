import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
	const [name, setName] = useState("");
	return (
		<View>
			<Text>{name}</Text>
			<TextInput
				autoCapitalize='none'
				autoCorrect={false}
				style={styles.inputStyles}
				value={name}
				onChangeText={newValue => setName(newValue)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	inputStyles: {
		margin: 15,
		borderColor: "black",
		borderWidth: 1
	}
});

export default TextScreen;
