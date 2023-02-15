import React from "react";
import Router from "./routes/Router";

import GlobalStyle from "./globalStyles";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalState from "./context/GlobalState";

const App = () => {
  return (
    <ChakraProvider>
      <GlobalState>
        <GlobalStyle />
        <Router />
      </GlobalState>
    </ChakraProvider>
  );
};

export default App;
