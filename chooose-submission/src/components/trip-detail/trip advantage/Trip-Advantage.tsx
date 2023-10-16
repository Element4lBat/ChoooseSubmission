import * as React from "react";
import { Flex, GridItem, Heading, Text, VStack } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export const TripAdvantage = ({
  advantage,
}: {
  advantage: { title: string; description: string };
}) => (
  <GridItem>
    <Flex gap="8px">
      <CheckIcon boxSize="8"></CheckIcon>
      <VStack alignItems="flex-start">
        <Heading size="md">{advantage.title}</Heading>
        <Text fontSize="sm" color="#999">
          {advantage.description}
        </Text>
      </VStack>
    </Flex>
  </GridItem>
);
