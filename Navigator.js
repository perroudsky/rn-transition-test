import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";

const AppNavigator = createSharedElementStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
});

export default createAppContainer(AppNavigator);
