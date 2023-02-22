import { Avatar, Icon, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Calendar, MapPin } from "react-feather";

interface TopExamSingleProps {
  index: number;
}

export default function TopExamSingle({ index }: TopExamSingleProps) {
  let bgColorTopExam;
  let colorTopExam;
  if (index == 0) {
    bgColorTopExam = useColorModeValue("red.100", "red.900");
    colorTopExam = "red.400";
  } else if (index == 1) {
    bgColorTopExam = useColorModeValue("yellow.100", "yellow.900");
    colorTopExam = "yellow.400";
  } else if (index == 2) {
    bgColorTopExam = useColorModeValue("green.100", "green.900");
    colorTopExam = "green.400";
  } else {
    bgColorTopExam = useColorModeValue("cyan.100", "cyan.900");
    colorTopExam = "cyan.400";
  }
  const bgColorExam = useColorModeValue("gray.50", "gray.800");
  const colorBorder = useColorModeValue("blackAlpha.400", "whiteAlpha.400");
  return (
    <Stack
      key={index}
      direction="row"
      align="center"
      bgColor={bgColorExam}
      // w="100%"
      rounded="3xl"
      px={7}
      py={4}
      position="relative"
      cursor="pointer"
      border="1px solid"
      borderColor={colorBorder}
    >
      <Text
        fontWeight={500}
        color={colorTopExam}
        borderRadius="10px"
        bgColor={bgColorTopExam}
        // height={7}
        // lineHeight={7}
        align="center"
        position="absolute"
        top={0}
        transform="translateY(-50%)"
        px={3}
      >
        Top {index + 1}
      </Text>
      <Avatar src="https://cdn.oneesports.vn/cdn-data/sites/4/2022/02/jujutsu-kaisen-0.jpg"></Avatar>
      <Text fontWeight={500} color="cyan.400">
        Duc Anh
      </Text>
      <Stack direction="row" align="center" color="gray.400" spacing={1}>
        <Icon as={MapPin}></Icon>
        <Text>THPT Quỳnh Lưu 1</Text>
      </Stack>
      <Stack
        mt={130}
        direction="row"
        align="center"
        color="gray.400"
        spacing={1}
      >
        <Icon as={Calendar}></Icon>
        <Text>PET : 23</Text>
      </Stack>
    </Stack>
  );
}