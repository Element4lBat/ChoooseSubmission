import * as React from "react";
import {
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { SingleTripModel } from "./trip.model";
import { getEmissionCount } from "../../utils/trip.utils";
import { TripAdvantage } from "./trip advantage/Trip-Advantage";

export const TripDetail = () => {
  const borderRadius = 16;
  const {
    state: { singleTrip },
  } = useLocation();
  const details: SingleTripModel = singleTrip;

  return (
    <>
      <Link
        fontSize="sm"
        as={ReactRouterLink}
        to="/"
        textDecor="underline"
        color="#999"
        fontWeight="bold"
      >
        Go Back
      </Link>
      <Heading size="lg" paddingTop="48px">
        {details.title}
      </Heading>
      <Text fontSize="sm" paddingTop="8px" color="#999">
        {details.subtitle}
      </Text>
      <Grid templateColumns="repeat(4, 1fr)" gap={16} paddingTop="24px">
        <GridItem colSpan={3}>
          <VStack alignItems="flex-start">
            <Image
              src={details.photoUrl}
              alt={details.title}
              borderRadius={borderRadius}
              w="100%"
            ></Image>
            <Heading size="md" paddingTop="16px">
              Overview
            </Heading>
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(2, 1fr)"
              gap={8}
              paddingTop="8px"
            >
              {details.advantages.map((advantage, index) => (
                <TripAdvantage
                  advantage={advantage}
                  key={index}
                ></TripAdvantage>
              ))}
            </Grid>
            <Divider m="16px 0" />
            <Text fontSize="md">{details.description}</Text>
          </VStack>
        </GridItem>
        <GridItem colSpan={1}>
          <Box bg="white" p="12px" borderRadius={borderRadius}>
            <Heading size="md">{details.days} days</Heading>
            <Text fontSize="sm">
              Emissions: {getEmissionCount(details.co2kilograms)} CO
              <Text as="sub">2</Text>e
            </Text>
            <Divider m="8px 0" />
            <Text fontSize="sm">Countries included:</Text>
            <UnorderedList sx={{ columns: 2 }}>
              {details.countries.map((country, index) => (
                <ListItem fontSize="xs" key={index}>
                  <Text>{country}</Text>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};
