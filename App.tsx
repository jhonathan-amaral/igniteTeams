import { StatusBar } from "react-native";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import Loading from "@components/Loading";

import Routes from "./src/routes";
export default function App() {
  const fontsLoaded = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" translucent />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
