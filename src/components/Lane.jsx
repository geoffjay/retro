import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import {
  Box,
  Checkbox,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Stack,
  Textarea,
} from "@chakra-ui/react";

const Lane = ({ title, ...props }) => {
  const [item, setItem] = useState("");
  const [itemOptions, setItemOptions] = useState([false, false]);

  const handleItemChange = e => {
    const itemValue = e.target.value;
    setItem(itemValue);
  };

  const handleItemSubmit = () => {
    setItem("");
    setItemOptions([false, false]);
  };

  return (
    <Box
      height="full"
      width="full"
      boxShadow="lg"
      align="left"
      p={4}
      {...props}
    >
      <Flex direction="column" height="full">
        <Heading size="sm" color="gray.600" pb={4}>
          {title}
        </Heading>
        <Stack flex="1" spacing={2}>
          <Box height="4em" bg="white" boxShadow="md" />
          <Box height="4em" bg="white" boxShadow="md" />
          <Box height="4em" bg="white" boxShadow="md" />
          <Box height="4em" bg="white" boxShadow="md" />
        </Stack>
        <Box height="144px" bg="white" boxShadow="md" p={2}>
          <Stack direction="column" spacing={2}>
            <Textarea
              value={item}
              onChange={handleItemChange}
              placeholder="Enter item description"
              size="sm"
              bg="white"
              focusBorderColor="gray.300"
              resize="none"
            />
            <Box width="full" color="gray.500" pl={2}>
              <Flex width="full">
                <Checkbox
                  size="sm"
                  iconColor="gray.500"
                  iconSize="1rem"
                  pr={4}
                  isChecked={itemOptions[0]}
                  onChange={e =>
                    setItemOptions([e.target.checked, itemOptions[1]])
                  }
                >
                  Private
                </Checkbox>
                <Checkbox
                  size="sm"
                  iconColor="gray.500"
                  iconSize="1rem"
                  isChecked={itemOptions[1]}
                  onChange={e =>
                    setItemOptions([itemOptions[0], e.target.checked])
                  }
                >
                  Anonymous
                </Checkbox>
                <Spacer />
                <IconButton
                  aria-label="Submit retro item"
                  icon={<FaPlusCircle />}
                  color="gray.500"
                  fontSize="20px"
                  onClick={handleItemSubmit}
                />
              </Flex>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Lane;
