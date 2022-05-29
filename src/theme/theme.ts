import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  style: {
    global: {
      body: {
        backgroundColor: "gray.300",
        color: "gray.800"
      }
    }
  }
});

export default theme;
