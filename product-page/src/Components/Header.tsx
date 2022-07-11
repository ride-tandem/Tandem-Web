import { Box, HStack, Icon, Spacer } from "@chakra-ui/react";
import { HiMenu } from "react-icons/all";
import * as React from "react";
import LogoName from "./LogoName";
import { reColor } from "../Theme/colours";

const Header = () => {
  return (
    <>
      <Box as="nav" bg={reColor.mainBlue} p={4} textAlign="center">
        <HStack>
          <LogoName />
          <Spacer />
          <Icon as={HiMenu} w={6} h={6} color="white" />
        </HStack>
      </Box>
    </>
  );
};

export default Header;
