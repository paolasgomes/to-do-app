import { ActivityIndicator } from "react-native";
import { ThemeProvider } from "styled-components";

import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import HomePage from "./src/screens/Home";
import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_600SemiBold, Inter_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <HomePage /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
