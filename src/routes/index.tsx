import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "@/lib/auth";
import { useNotificationStore } from "@/stores/notifications";
import { Landing } from "@/features/misc";

import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";

export const AppRoutes = () => {
  const [routes, setRoutes] = useState(publicRoutes);
  const [user, loading, error] = useAuthState(auth);
  const { addNotification } = useNotificationStore();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (error) {
      addNotification({
        type: "error",
        title: error.message,
      });
    }
    if (user) {
      setRoutes(protectedRoutes);
    } else {
      setRoutes(publicRoutes);
    }
  }, [user, loading, error]);

  const commonRoutes = [{ path: "/", element: <Landing /> }];

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
