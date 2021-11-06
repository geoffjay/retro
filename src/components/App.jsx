import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";

import { Home, Login, Register } from "../components/pages";

// good example for layout with router here:
// https://stackblitz.com/github/remix-run/react-router/tree/main/examples/basic?file=src/App.tsx

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
