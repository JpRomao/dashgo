import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>João Pedro</Text>
          <Text color="gray.300" fontSize="small">
            ojpzinho@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="João Pedro"
        src="https://github.com/jpRomao.png"
      />
    </Flex>
  );
}
