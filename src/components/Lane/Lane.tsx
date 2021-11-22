import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import {
  Box,
  Checkbox,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Stack,
  StyleProps,
  Textarea,
} from "@chakra-ui/react";

import { useCreateRetroItem } from "@/features/retros/api/createRetroItem";
import { RetroItem } from "@/features/retros/types";

type LaneProps = {
  title: string;
  items: RetroItem[];
} & StyleProps;

export const Lane = ({ title, items, ...props }: LaneProps) => {
  const [item, setItem] = useState(null);
  const [description, setDescription] = useState("");
  const [itemOptions, setItemOptions] = useState([false, false]);

  const [createRetroItem] = useCreateRetroItem();

  const handleItemChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const itemValue = e.target.value;
    setDescription(itemValue);
  };

  const handleItemSubmit = () => {
    createRetroItem({
      variables: {
        authorId: 1,
        laneId: 28,
        retroId: 14,
        description,
        isPrivate: itemOptions[0],
        isAnonymous: itemOptions[1],
      },
    });
    setDescription("");
    setItemOptions([false, false]);
  };

  return (
    <Box
      h="full"
      w="full"
      boxShadow="lg"
      align="left"
      borderWidth={1}
      borderRadius={4}
      p={4}
      {...props}
    >
      <Flex direction="column" height="full">
        <Heading size="sm" color="gray.600" pb={4}>
          {title}
        </Heading>
        <Stack flex="1" spacing={2} color="gray.500">
          {items.map((item, index) => {
            return (
              <Box
                key={index}
                height="4em"
                bg="white"
                boxShadow="md"
                borderWidth={1}
                borderRadius={4}
                p={2}
              >
                {item.description}
              </Box>
            );
          })}
        </Stack>
        <Box height="144px" bg="white" boxShadow="md" p={2} borderWidth={1} borderRadius={4}>
          <Stack direction="column" spacing={2}>
            <Textarea
              value={description}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleItemChange(e)}
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
                  onChange={(e) => setItemOptions([e.target.checked, itemOptions[1]])}
                >
                  Private
                </Checkbox>
                <Checkbox
                  size="sm"
                  iconColor="gray.500"
                  iconSize="1rem"
                  isChecked={itemOptions[1]}
                  onChange={(e) => setItemOptions([itemOptions[0], e.target.checked])}
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
