import { useEffect } from "react";
import { useColorMode } from "@chakra-ui/react";
const useSetDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "light") {
      toggleColorMode();
    }
  }, [colorMode]);
};
export default useSetDarkMode;
