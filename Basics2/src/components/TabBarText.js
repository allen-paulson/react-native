import React from "react";
import { useTheme, themeColor, Text } from "react-native-rapi-ui"; 

const TabBarText = (props) => {
  const {isDarkmode} = useTheme();
  return(
    <Text 
      style={{ 
        marginBottom: 8,
        marginTop: 4,
        fontSize: 14,
        color: props.focused ? isDarkmode ? themeColor.white100 : themeColor.primary : "rgb(143, 155, 179)"
        
      }}
      
    >
      {props.title}
    </Text>
  );
};
export default TabBarText;