import { Navigate, Route, Routes } from "react-router-dom";

import { Retro } from "./Retro";
import { Retros } from "./Retros";

export const RetrosRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Retros />} />
      <Route path=":retroId" element={<Retro />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
