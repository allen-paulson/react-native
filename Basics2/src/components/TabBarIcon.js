import React from "react";
import { useTheme, themeColor } from "react-native-rapi-ui"; 
import { Ionicons } from "@expo/vector-icons";

const TabBarIcon = (props) => {
  const {isDarkmode} = useTheme();
  return(
    
    <Ionicons 
      name={props.icon} 
      size={21} 
      style={{
        marginBottom: -9,
      }} 
      color={
        props.focused ? isDarkmode ? themeColor.white100 : themeColor.primary : "rgb(143, 155, 179)"
      }
    
    />
  );
};
export default TabBarIcon;