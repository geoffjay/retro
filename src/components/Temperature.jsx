import React, { useState } from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Stack,
  Text,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import { FaCheckCircle, FaTemperatureHigh } from "react-icons/fa";

const Temperature = () => {
  const [temp, setTemp] = useState(5);
  const [comments, setComments] = useState("");

  const handleTempChange = (value) => {
    setTemp(value);
  };

  const handleTempSubmit = () => {
    setComments("");
  };

  return (
    <Flex height="full" align="center" justifyContent="center" p={200} color="gray.500">
      <Stack
        direction="column"
        width="full"
        minW="2xl"
        boxShadow="lg"
        align="center"
        p={10}
        spacing={5}
      >
        <Stack direction="row" width="full" align="center" spacing={4} pb={5}>
          <Icon as={FaTemperatureHigh} width={10} height={10} color="orange.200" />
          <Heading size="md">Temperature Check</Heading>
        </Stack>
        <Slider
          aria-label="temperature-slider"
          colorScheme="red"
          defaultValue={5}
          min={0}
          max={10}
          step={0.5}
          onChange={(value) => handleTempChange(value)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Text>{temp}</Text>
        <>
          <FormControl>
            <FormLabel>Comments</FormLabel>
            <Input
              type="text"
              placeholder="This sprint I felt..."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </FormControl>
        </>
        <Flex width="full">
          <Spacer />
          <IconButton
            aria-label="Submit temperature"
            icon={<FaCheckCircle />}
            fontSize="20px"
            onClick={handleTempSubmit}
          />
        </Flex>
      </Stack>
    </Flex>
  );
};

export default Temperature;
