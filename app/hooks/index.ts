"use client"
import { WasteProps } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API = "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"

export const getWaste = async (): Promise<WasteProps[] | undefined> => {
    try {
        const res = await axios.get(`${API}`);
        // console.log('res.data', res.data)
        return res.data || [];
    } catch (error) {
        throw new Error(`Error fetching wastes: ${(error as Error).message}`);
    }
};

export const useWaste = () => {
    return useQuery<WasteProps[] | undefined, Error>({
        queryKey: ["waste"],
        queryFn: () => getWaste(),
    })
}