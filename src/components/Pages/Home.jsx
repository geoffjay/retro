import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { Grid, Stack } from "@chakra-ui/react";

import { auth } from "@/lib/auth";
import { useNotificationStore } from "@/stores/notifications";

import { Header, Retro, Temperature } from "@/components";

const Home = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [params, _setParams] = useSearchParams();
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
    if (!user) {
      navigate("/auth/login");
    }
  }, [user, loading, error]);

  // TODO: control state
  const showRetroBoard = () => params.get("retro-id");
  const showTemperatureCheck = () => !showRetroBoard();
  // const hasOwnerControl = () => false;

  return (
    <Grid minH="100vh">
      <Stack direction="column">
        <Header id="header" />
        {showRetroBoard() && <Retro id="retro" />}
        {showTemperatureCheck() && <Temperature id="temperature" />}
      </Stack>
    </Grid>
  );
};

export default Home;
