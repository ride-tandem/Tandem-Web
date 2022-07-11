import { Box, Center, HStack, VStack, Text, Image } from "@chakra-ui/react";
import * as React from "react";
import Header from "../Components/Header";
import { reColor } from "../Theme/colours";

const ProductPage = () => (
  <>
    <Box
      bgGradient={`linear(to-tr, ${reColor.mainBlue}, blue.100)`}
      h="-webkit-fit-content"
    >
      <Header />
      <Center>
        <HStack pt={{ base: 75, md: 175 }} pb={125}>
          <VStack align="center">
            <VStack align="left">
              <Text
                fontSize={30}
                fontWeight={"bold"}
                align="center"
                color={reColor.deepBlue}
              >
                Carpooling made easy.
              </Text>
              <Text
                fontSize={30}
                fontWeight={"bold"}
                align="center"
                color={reColor.deepBlue}
              >
                Carpooling made social.
              </Text>
            </VStack>
            <Text fontSize={18} align="center" color={reColor.deepBlue}>
              Connect your circles and get where you need to go together.
            </Text>
            <Box p={35}>
              <Image
                src={"/logo_white.svg"}
                alt="white logo"
                objectFit="cover"
                maxW="200px"
              />
              <Text color="white" fontSize={30} align="center">
                Ride Tandem.
              </Text>
            </Box>
          </VStack>
        </HStack>
      </Center>
    </Box>
  </>
);

export default ProductPage;
