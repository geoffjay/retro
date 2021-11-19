import { useRoutes } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "@/lib/auth";
import { Landing } from "@/features/misc";

import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";

export const AppRoutes = () => {
  const [user] = useAuthState(auth);

  const commonRoutes = [{ path: "/", element: <Landing /> }];

  const routes = user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
