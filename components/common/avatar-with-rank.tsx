import { Box, Avatar, AvatarProps, useColorModeValue } from "@chakra-ui/react";
import { useMemo } from "react";

interface AvatarWithRankProps {
  avatar: string | undefined;
  points: number | undefined;
}
function AvatarWithRank({
  avatar = "",
  points = 0,
  ...props
}: AvatarWithRankProps & AvatarProps) {
  // const bgRank = useMemo(() => {
  //   if (points !== undefined) {
  //     if (points >= 0 && points < 400) {
  //       return "gray.300";
  //     } else if (points >= 400 && points < 1000) {
  //       return "yellow.500";
  //     } else {
  //       return "linear-gradient(85.33deg,#41f4ff 2.06%,#fffcae 45.33%,#f8dbff 95.4%)";
  //     }
  //   } else {
  //     return "";
  //   }
  // }, [points]);
  const bgRank = "linear-gradient(85.33deg,#41f4ff 2.06%,#fffcae 45.33%,#f8dbff 95.4%)"
  const bgColorAvatar = useColorModeValue("blackAlpha.500", "blackAlpha.700");
  return (
    <Box bgColor={bgColorAvatar} p="1px" borderRadius="50%">
      <Box background={bgRank} p="3.2px" borderRadius="50%">
        <Box bgColor={bgColorAvatar} p="1px" borderRadius="50%">
          <Avatar src={avatar} boxShadow="sm" {...props}></Avatar>
        </Box>
      </Box>
    </Box>
  );
}
export default AvatarWithRank;