import React from "react";
import Routes from "./application/navigation/routes";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
      },
    }),
  },
});
const App: React.FC = () => (
  <>
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  </>
);

export default App;
