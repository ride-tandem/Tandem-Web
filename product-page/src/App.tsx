import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import extendedTheme from "./Theme/Style";

export const App = () => (
  <ChakraProvider theme={extendedTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
