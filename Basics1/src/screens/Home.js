import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { TopNav, Button, Layout, Section, SectionContent, Text, useTheme, themeColor } from 'react-native-rapi-ui';

const Home = ({navigation}) => {
  const { isDarkmode, setTheme } = useTheme();
  return(
    <Layout>
      <TopNav 
        middleContent = "Home"
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
      <View
        style = {{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Section>
          <SectionContent>
            <Text 
            fontWeight = "bold" style={{ textAlign: "center" }} 
            >
              These are from Rapi Ui.
            </Text>
            <Button 
              style={{ marginTop: 10 }} 
              text = " Go to Settings "
              onPress={() => {
                navigation.navigate("Settings");
              }}  
            />
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
};
export default Home;