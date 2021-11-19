import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "@/lib/auth";
import { useNotificationStore } from "@/stores/notifications";

export const Landing = () => {
  const navigate = useNavigate();
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
      navigate("/app");
    } else {
      navigate("/auth/login");
    }
  }, [loading, user, error]);

  return <>Redirecting...</>;
};
