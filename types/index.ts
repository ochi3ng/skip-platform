export interface BookingState {
    postcode: string
    wasteType: string
    selectedSkip: string | null
    permitRequired: boolean | null
    selectedDate: string | null
    step: number
}