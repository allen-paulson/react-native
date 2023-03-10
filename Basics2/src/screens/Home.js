import React from "react";
import { View, Linking } from "react-native";
import { Button, Layout, Section, SectionContent, Text, useTheme } from 'react-native-rapi-ui';

const Home = ({navigation}) => {
  const { isDarkmode, setTheme } = useTheme();
  return(
    <Layout>
      <View
        style = {{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Section>
          <SectionContent>
            <Text 
            fontWeight = "bold" style={{ textAlign: "center" }} 
            >
              This is Home Screen.
            </Text>
            <Button 
              style={{ marginTop: 10 }} 
              text = " Go to Rapi Docs "
              status="info"
              onPress={() => {
                Linking.openURL("https://rapi-ui.kikiding.space/docs");
              }}  
            />
            <Button 
              style={{ marginTop: 10 }} 
              text = { isDarkmode ? "Light Mode" : "Dark Mode" }
              status={isDarkmode ? "gray100" : "black100"}
              onPress={() => {
                if (isDarkmode) {
                  setTheme("light");

                } else {
                  setTheme("dark");
                } 
              }}  
            />
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
};
export default Home;