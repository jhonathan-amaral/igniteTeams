import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./app.routes";
import { View } from "react-native";
import { useTheme } from "styled-components/native";

export default function Routes() {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: colors.GRAY_600 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
