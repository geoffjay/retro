import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { Grid, Stack } from "@chakra-ui/react";

import { auth } from "@/lib/firebase";

import { Header, Retro, Temperature } from "@/components";

const Home = () => {
  const [user, loading, _error] = useAuthState(auth);
  const navigate = useNavigate();
  const [params, _setParams] = useSearchParams();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) {
      navigate("/login");
    }
  }, [loading, user]);

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
