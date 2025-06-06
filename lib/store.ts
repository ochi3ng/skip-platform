import { BookingState } from "@/types"
import { create } from "zustand"

interface BookingStore extends BookingState {
    setPostcode: (postcode: string) => void
    setWasteType: (wasteType: string) => void
    setSelectedSkip: (skipId: string | null) => void
    setPermitRequired: (required: boolean | null) => void
    setSelectedDate: (date: string | null) => void
    setStep: (step: number) => void
    reset: () => void
}


const initialState: BookingState = {
    postcode: "NR32",
    wasteType: "household",
    selectedSkip: null,
    permitRequired: null,
    selectedDate: null,
    step: 3,
}

export const useBookingStore = create<BookingStore>((set) => ({
    ...initialState,
    setPostcode: (postcode) => set({ postcode }),
    setWasteType: (wasteType) => set({ wasteType }),
    setSelectedSkip: (skipId) => {
        // always setting a string or null
        if (typeof skipId === "string" || skipId === null) {
            set({ selectedSkip: skipId })
        } else {
            console.warn("Invalid skipId type:", typeof skipId, skipId)
            set({ selectedSkip: null })
        }
    },
    setPermitRequired: (required) => set({ permitRequired: required }),
    setSelectedDate: (date) => set({ selectedDate: date }),
    setStep: (step) => set({ step }),
    reset: () => set(initialState),
}))