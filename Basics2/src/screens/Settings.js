import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { TopNav, Button, Layout, Section, SectionContent, Text, useTheme, themeColor } from 'react-native-rapi-ui';

const Settings = ({navigation}) => {
  const { isDarkmode, setTheme } = useTheme();
  return(
    <Layout>
      <TopNav 
        leftContent = {
          <Ionicons 
            name="chevron-back" 
            size={16}
            color={isDarkmode ?  themeColor.white : themeColor.dark }
          />
        }
        leftAction = { () => { navigation.goBack() } }
        middleContent= "Settings"
        rightContent = {
          <Ionicons 
            name={isDarkmode ? "sunny" : "moon"}
            size={16} 
            color={isDarkmode ?  themeColor.white : themeColor.dark }
          />
        }
        rightAction = {() => {
              if (isDarkmode) {
                setTheme("light");

            } else {
                setTheme("dark");
            } 
          }
        }
      />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text fontWeight = "bold" style={{ textAlign: "center" }} >Settings Screen</Text>
      </View>
    </Layout>
  );
};
export default Settings;