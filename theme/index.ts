import { extendTheme, Theme, ThemeConfig } from "@chakra-ui/react";
import { mode, Styles } from "@chakra-ui/theme-tools";
const fonts = {
  // body: "The Impostor",
  // body: "Josefin Sans",
  // body: "Inter",
};
const styles: Styles = {
  global: (props: any) => ({
    body: {
      // bg: mode("dark", "black")(props),
    },
  }),
};
const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// 3. extend the theme
const theme: Partial<Theme> = extendTheme({ config, styles, fonts });
export default theme;
