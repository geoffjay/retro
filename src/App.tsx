import { Route, Routes } from "react-router-dom";

import { AppProvider } from "@/providers/app";
import { Home, Login, Register } from "@/components/pages";

// good example for layout with router here:
// https://stackblitz.com/github/remix-run/react-router/tree/main/examples/basic?file=src/App.tsx

export function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AppProvider>
  );
}
