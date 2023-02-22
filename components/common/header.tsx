import {
  HStack,
  Image, Text
} from "@chakra-ui/react";

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <HStack mt={5} justify="center" position="fixed" top={0} height={10}>
      <Image
        src={"/media/cat/white_wallgrab_8fps.gif"}
        alt=""
        display="inline"
        h="60px"
      ></Image>{" "}
      <Text fontWeight={500} fontSize={18} cursor="pointer">
        OB2TO
      </Text>
    </HStack>
  );
}
