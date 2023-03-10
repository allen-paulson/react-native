import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import About from "./src/screens/About";
import Profile from "./src/screens/Profile";
import Settings from "./src/screens/Settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme, themeColor } from "react-native-rapi-ui";
import TabBarIcon from "./src/components/TabBarIcon";
import TabBarText from "./src/components/TabBarText";

const StackNavigator = createNativeStackNavigator();
const TabsNavigator = createBottomTabNavigator ();

const BottomTab = () => {
  const { isDarkmode } = useTheme();
  return(
    <TabsNavigator.Navigator screenOptions={{headerShown: false, 
      tabBarStyle: {
        borderTopColor: isDarkmode ? themeColor.black100 : "white",
        backgroundColor: isDarkmode ? themeColor.black100 : "white",
      },
      tabBarActiveTintColor: "blue"
    }}>
      <TabsNavigator.Screen name="Home" component={Home} options={
        {
          tabBarLabel: ({ focused }) => <TabBarText title="Home" focused={focused} />,
          tabBarIcon: ({ focused }) => <TabBarIcon icon={"md-home"} focused={focused} />,
        }
      } />
      <TabsNavigator.Screen name="About" component={About} options={
        {
          tabBarLabel: ({ focused }) => <TabBarText title="About" focused={focused} />,
          tabBarIcon: ({ focused }) => <TabBarIcon icon={"ios-information-circle"} focused={focused} />,
        }
      } />
      <TabsNavigator.Screen name="Profile" component={Profile} options={
        {
          tabBarLabel: ({ focused }) => <TabBarText title="Profile" focused={focused} />,
          tabBarIcon: ({ focused }) => <TabBarIcon icon={"person"} focused={focused} />,
        }
      }/>
      <TabsNavigator.Screen name="Settings" component={Settings} options={
        {
          tabBarLabel: ({ focused }) => <TabBarText title="Settings" focused={focused} />,
          tabBarIcon: ({ focused }) => <TabBarIcon icon={"settings"} focused={focused} />,
        }
      } />
    </TabsNavigator.Navigator>
  );
};

const AppNavigator = () => {
  return(
    <NavigationContainer>
      <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
        <StackNavigator.Screen name = "BottomTab" component={BottomTab} />
        <StackNavigator.Screen name = "About" component={About} />
        <StackNavigator.Screen name = "Profile" component={Profile} />
        <StackNavigator.Screen name = "Settings" component={Settings} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;