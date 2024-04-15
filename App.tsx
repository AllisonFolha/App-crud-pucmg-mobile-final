import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import "react-native-gesture-handler";
import { NativeBaseProvider, Box } from "native-base";

import { Routes } from "./src/router";
import React from "react";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "blue",
    backround: "white",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
