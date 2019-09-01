import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import RGBScreen from "./src/screens/RGBScreen";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Components: ComponentsScreen,
		List: ListScreen,
		Image: ImageScreen,
		Counter: CounterScreen,
		RGB: RGBScreen,
		Color: ColorScreen,
		Text: TextScreen,
		Box: BoxScreen
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			title: "App"
		}
	}
);

export default createAppContainer(navigator);
