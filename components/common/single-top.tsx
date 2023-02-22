import {
  Avatar,
  Circle,
  Divider,
  HStack,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Td,
  Text,
  Tr,
  useColorMode,
  useColorModeValue,
  Image,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { useMemo } from "react";
import AvatarWithRank from "./avatar-with-rank";
export interface SingleTopUserProps {
  index: number;
//   user: Pick<
//     UserNotPassword,
//     "_id" | "display_name" | "email" | "nick_name" | "avatar" | "points"
//   >;
  user : {
    points: number;
    display_name : string;
    avatar: string;
  }
}

export default function SingleTop({ index, user }: SingleTopUserProps) {
  const colorDisplayName = useColorModeValue("black", "white");
  const bgColorButtonUser = useColorModeValue("yellow.400", "yellow.600");
  // const bgColorSingleUserTop = useColorModeValue(
  //   "blackAlpha.50",
  //   "blackAlpha.500"
  // );
  const bgColorSingleUserTop = useColorModeValue("white", "gray.800");
  const bgColorButtonTop = useColorModeValue("red.300", "red.600");
  const bgRank = "linear-gradient(85.33deg,#41f4ff 2.06%,#fffcae 45.33%,#f8dbff 95.4%)";
  return (
    <Box bg={bgRank} p={0.5} borderRadius={10} fontFamily="heading">
      <HStack
        justify="space-between"
        bgColor={bgColorSingleUserTop}
        px={{ base: 3, md: 6 }}
        py={1}
        borderRadius={10}
      >
        <Stack>
          <Circle
            bg={bgRank}
            size={5}
            color="black"
            fontWeight={700}
            fontSize={13}
          >
            {index + 1}
          </Circle>
        </Stack>
         <AvatarWithRank avatar={user.avatar} points={user.points} />
        

        <Stack spacing={1} align="center" w="25%" maxW="25%">
          <Text
            fontSize={{ base: 16, md: 17 }}
            fontFamily="heading"
            fontWeight={500}
            color="cyan.400"
            noOfLines={1}
          >
            {user.display_name}
          </Text>
        </Stack>
        <Stack>
          <Text
            fontSize={{ base: 16, md: 18 }}
            fontWeight={600}
            fontFamily="mono"
          >
            {user.points}
          </Text>
        </Stack>
        
      </HStack>
    </Box>
  );
}