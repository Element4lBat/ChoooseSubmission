import { create } from "zustand";
import { TripModel } from "../components/trip/trip.model";

export const useTripsStore = create((set) => ({
  trips: [],
  updateTrips: (newTrips: TripModel[]) =>
    set(() => ({
      trips: newTrips,
    })),
  removeAllTrips: () => set({ trips: [] }),
  rowCount: 4,
  setRowCount: () =>
    set((state: { rowCount: number }) => ({ rowCount: state.rowCount + 1 })),
}));
