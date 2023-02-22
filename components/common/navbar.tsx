import {
  Box, Container, Heading, HStack, Stack,
  Text,
  VStack
} from "@chakra-ui/react";
import AvatarWithRank from "./avatar-with-rank";
import SingleTop from "./single-top";
export interface User {
  points: number,
  display_name: string,
  avatar: string
}

// [{
//   points: 20,
//   display_name: "Tài",
//   avatar : ''
// }]
export interface NavbarProps {
  data: User[],
  nameClass: string
}

export default function Navbar({ data, nameClass }: NavbarProps) {


  return (
    <Container maxW="container.md">
      <VStack>
        <Heading textAlign="center" p={10}>BXH Lớp {nameClass}</Heading>
      </VStack>
      <HStack textAlign={"center"} justify="center">
        {data.map((user, index) => (
          <Stack align={"center"} justify="center" key={index }>
            <AvatarWithRank
              avatar={user?.avatar}
              points={user?.points}
              w={
                index === 1
                  ? { base: 65, md: 75 }
                  : index === 0 || index == 2
                    ? { base: 50, md: 55 }
                    : { base: 55, md: 58 }
              }
              h={
                index === 1
                  ? { base: 65, md: 75 }
                  : index === 0 || index == 2
                    ? { base: 50, md: 55 }
                    : { base: 55, md: 58 }
              }
              boxShadow="sm"
            />
            <Text
              maxW={"80px"}
              noOfLines={1}
              fontSize={13}
              fontWeight={500}
              fontFamily={"heading"}
            // color="yellow.500"
            >
              {" "}
              {`@${user?.display_name}`}
            </Text>
          </Stack>
        ))}
      </HStack>
      <Box mt={10}>
        {data.map((user, index) => {
          return <Box p={1} key={index}>
            <SingleTop index={index} user={user} />
          </Box>
        })}
      </Box>
    </Container>
  );
}
