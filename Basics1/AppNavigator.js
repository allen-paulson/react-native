import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home"
import Settings from "./src/screens/Settings"

const StackNavigator = createNativeStackNavigator();

const AppNavigator = () => {
  return(
    <NavigationContainer>
      <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
        <StackNavigator.Screen name = "Home" component={Home} />
        <StackNavigator.Screen name = "Settings" component={Settings} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;