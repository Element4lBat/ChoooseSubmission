import { SingleTripModel } from "../components/trip-detail/trip.model";

export const initTripList = () => {
  return fetch(`http://localhost:9003/trips?start=0&end=12`)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err.message);
    });
};

export const getTripList = (row: number) => {
  return fetch(`http://localhost:9003/trips?row=${row}`)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err.message);
    });
};

export const getTripDetails = (id: number): Promise<SingleTripModel> => {
  return fetch(`http://localhost:9003/trip/${id}`)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err.message);
    });
};
