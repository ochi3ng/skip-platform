import {
    MapPin,
    Trash2,
    Package,
    Shield,
    Calendar,
    CreditCard,
} from "lucide-react";

export const steps = [
    { id: 1, name: "Postcode", icon: MapPin,
        //  description: "Enter your location", 
         route: "/post-code" },
    {
        id: 2,
        name: "Waste Type",
        icon: Trash2,
        // description: "Select waste category",
        route: "/waste-type"

    },
    {
        id: 3,
        name: "Select Skip",
        icon: Package,
        // description: "Choose skip size",
        route: "/select-skip"
    },
    {
        id: 4,
        name: "Permit Check",
        icon: Shield,
        // description: "Road permit required?",
        // route: "/permit-check"
    },
    {
        id: 5,
        name: "Choose Date",
        icon: Calendar,
        // description: "Select delivery date",
        // route: "/choose-date"
    },
    {
        id: 6, name: "Payment", icon: CreditCard,
        //  description: "Complete booking",
        // route: "/payment"
    },
];