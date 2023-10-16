import * as React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Trip } from "../trip/Trip";
import { TripModel } from "../trip/trip.model";
import { getTripList, initTripList } from "../../services/trip.service";
import { useTripsStore } from "../../store/store";

export const TripList = () => {
  const trips = useTripsStore((state: any) => state.trips);
  const updateTrips = useTripsStore((state: any) => state.updateTrips);
  const rowCount = useTripsStore((state: any) => state.rowCount);
  const setRowCount = useTripsStore((state: any) => state.setRowCount);

  const [noMoreTrips, setNoMoreTrips] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchInitTripList = async () => {
    setIsLoading(true);
    const data = await initTripList();
    updateTrips([...trips, ...data]);
    setIsLoading(false);
  };

  const setTripList = async () => {
    setIsLoading(true);
    const data = await getTripList(rowCount);
    if (!data?.length) {
      setNoMoreTrips(true);
    }
    updateTrips([...trips, ...data]);
    setIsLoading(false);
  };

  React.useEffect(() => {
    if (trips.length < 12) {
      fetchInitTripList();
    }
  }, []);

  const shouldntScroll = () => {
    return (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight || isLoading
    );
  };

  const handleScroll = () => {
    if (shouldntScroll()) {
      return;
    }
    setRowCount(rowCount + 1);

    setTripList();
  };

  React.useEffect(() => {
    if (noMoreTrips) {
      return;
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={8}
      justifyContent="center"
      flexWrap="wrap"
    >
      {trips.map((trip: TripModel) => (
        <GridItem key={trip.id}>
          <Trip trip={trip}></Trip>
        </GridItem>
      ))}
    </Grid>
  );
};
