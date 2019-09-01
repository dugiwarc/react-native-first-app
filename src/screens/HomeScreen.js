import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={styles.text}>Test</Text>
			<Button
				title='Go to components demo'
				onPress={() => navigation.navigate("Components")}
			/>
			<Button
				title='Go to list Demo'
				onPress={() => navigation.navigate("List")}
			/>
			<Button
				title='Go to Image'
				onPress={() => navigation.navigate("Image")}
			/>
			<Button
				title='Go to Counter Demo'
				onPress={() => navigation.navigate("Counter")}
			/>
			<Button
				title='Go to Color Demo'
				onPress={() => navigation.navigate("Color")}
			/>
			<Button
				title='Go to RGB Demo'
				onPress={() => navigation.navigate("RGB")}
			/>
			<Button
				title='Go to Text Demo'
				onPress={() => navigation.navigate("Text")}
			/>
			<Button
				title='Go to Box Demo'
				onPress={() => navigation.navigate("Box")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30
	}
});

export default HomeScreen;
