import { StatusBar } from "react-native";
import Groups from "./src/screens/Groups";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import Loading from "@components/Loading";
import { NewGroup } from "@screens/NewGroup";
export default function App() {
  const fontsLoaded = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" translucent />
      {fontsLoaded ? <NewGroup /> : <Loading />}
    </ThemeProvider>
  );
}
