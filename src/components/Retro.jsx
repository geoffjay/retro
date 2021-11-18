import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Stack } from "@chakra-ui/react";

import { fetchAllRetros } from "@/features/retros/actions";

import { Lane } from "@/components";

const Retro = () => {
  const dispatch = useDispatch();
  const retros = useSelector((state) => state.retro.retros);
  const retroStatus = useSelector((state) => state.retro.status);

  useEffect(() => {
    console.log(retroStatus);
    if (retroStatus === "idle") {
      dispatch(fetchAllRetros());
    }
  }, [retroStatus, dispatch]);

  const isLoaded = () => retroStatus === "success";

  // TODO: need to use retro loaded by ID
  const retroItems = (laneNumber) => {
    if (isLoaded()) {
      const items =
        retros === undefined ? [] : retros[0].items.filter((item) => item.lane === laneNumber);
      return items;
    }
    return [];
  };

  return (
    isLoaded() && (
      <Stack
        direction="row"
        width="full"
        height="full"
        alignItems="stretch"
        align="flex-start"
        flexGrow={1}
        p={4}
      >
        <Lane title="What went well?" items={retroItems(0)} bg="green.100" />
        <Lane title="What should we try?" items={retroItems(1)} bg="yellow.100" />
        <Lane title="What didn't go well?" items={retroItems(2)} bg="red.100" />
      </Stack>
    )
  );
};

export default Retro;
