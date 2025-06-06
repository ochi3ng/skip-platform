"use client";
import { useWaste } from "@/app/hooks";

export default function Page() {
  const { data: skips, isLoading, error } = useWaste();
  console.log("skips", skips);
  return <div>Select Skip</div>;
}
