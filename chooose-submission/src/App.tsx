import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { TripList } from "./components/trip-list/Trip-List";
import { TripDetail } from "./components/trip-detail/Trip-Detail";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl" bg="#f5f5f5" minH="100vh" p="46px">
        <Routes>
          <Route path="/" element={<TripList />} />
          <Route path="/trip" element={<TripDetail />} />
        </Routes>
      </Box>
    </ChakraProvider>
  );
};
