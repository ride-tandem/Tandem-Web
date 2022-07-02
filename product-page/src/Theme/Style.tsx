// theme.ts

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";
// Component Styles
import Button from "./Components/button";
import Text from "./Components/text";
import { Input } from "./Components/input";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";
import Menu from "./Components/menu";

const styles = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  styles: {
    global: (props: Dict) => ({
      body: {
        fontFamily: "body",
        color: mode("gray.800", "whiteAlpha.900")(props),
        lineHeight: "base",
      },
    }),
  },
  components: {
    Button,
    Input,
    Text,
    Steps,
    Menu,
  },
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
};

// 3. extend the theme
const extendedTheme = extendTheme(styles);

export default extendedTheme;
