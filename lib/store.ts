import { create } from "zustand"
import type { BookingState } from "./types"



const initialState: BookingState = {
    postcode: "NR32",
    area: "Lowestoft",
    wasteType: "",
    selectedSkip: null,
    permitRequired: false,
    selectedDate: null,
    step: 3, // Currently on Select Skip step
}

export const useBookingStore = create<BookingStore>((set) => ({
    ...initialState,
    setPostcode: (postcode) => set({ postcode }),
    setArea: (area) => set({ area }),
    setWasteType: (wasteType) => set({ wasteType }),
    setSelectedSkip: (skipId) => set({ selectedSkip: skipId }),
    setPermitRequired: (required) => set({ permitRequired: required }),
    setSelectedDate: (date) => set({ selectedDate: date }),
    setStep: (step) => set({ step }),
    reset: () => set(initialState),
}))
