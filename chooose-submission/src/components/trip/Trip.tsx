import * as React from "react";
import { Box, Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { TripModel } from "./trip.model";
import { useNavigate } from "react-router-dom";
import { getEmissionCount } from "../../utils/trip.utils";
import { getTripDetails } from "../../services/trip.service";

export const Trip = ({ trip }: { trip: TripModel }) => {
  const navigate = useNavigate();
  const borderRadius = 16;
  const textShadow =
    "1px 0 2px black, 0 1px 2px black, -1px 0 2px black, 0 -1px 2px black";

  const getStarCount = (rating: number) => {
    const content = Array(Math.round(rating));
    for (let index = 0; index < Math.round(rating); index++) {
      content[index] = <StarIcon key={index}></StarIcon>;
    }
    return content;
  };

  const goToDetails = async () => {
    const singleTrip = await getTripDetails(1);
    return navigate("trip", { state: { singleTrip } });
  };

  return (
    <Box bg="white" p="16px" borderRadius={borderRadius} color={"white"}>
      <Box
        backgroundImage={trip.photoUrl}
        borderRadius={6}
        p="32px 24px 0 24px"
      >
        <VStack>
          <Heading size={"md"} textShadow={textShadow}>
            {trip.title}
          </Heading>
          <Text fontSize="sm" textShadow={textShadow}>
            {trip.countries.length} Countries, {trip.days} days
          </Text>
          <Button
            colorScheme="blue"
            size="md"
            borderRadius={borderRadius}
            onClick={goToDetails}
          >
            Learn more
          </Button>
          <HStack
            justifyContent="space-between"
            bg="rgb(21,26,46)"
            p="8px"
            borderRadius={borderRadius}
            fontSize={"md"}
          >
            <Text>Emissions offset:</Text>
            <Text>
              {getEmissionCount(trip.co2kilograms)} CO<Text as="sub">2</Text>e
            </Text>
          </HStack>
          <HStack
            justifyContent="space-between"
            bg="white"
            p="8px"
            color="black"
            borderRadius={`${borderRadius}px ${borderRadius}px 0 0`}
            fontSize={"md"}
            w="100%"
          >
            <Text as="b">Trip rating</Text>
            <HStack>
              {getStarCount(trip.rating)}
              <Text as="b">{trip.rating}</Text>
            </HStack>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};
