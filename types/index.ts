export interface BookingState {
    postcode: string
    wasteType: string
    selectedSkip: string | null
    permitRequired: boolean | null
    selectedDate: string | null
    step: number
}

export interface WasteProps {
    id: string;
    size: number;
    hire_period_days: number;
    transport_cost: number | null;
    per_tonne_cost: number | null;
    price_before_vat: number;
    vat: number;
    postcode: string;
    area: string;
    forbidden: boolean;
    created_at: string;
    updated_at: string;
    allowed_on_road: boolean;
    allows_heavy_waste: boolean;
    image: string | null
}