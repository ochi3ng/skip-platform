"use client";
import { useWaste } from "@/app/hooks";
import ErrorComponent from "@/components/shared/error-component";
import LoaderComponent from "@/components/shared/loader-component copy";

export default function Page() {
  const { data: skips, isLoading, error } = useWaste();
  console.log("skips", skips);

  if (isLoading) {
    return <LoaderComponent />;
  }
  if (error) {
    return <ErrorComponent error={error} />;
  }
  return <div>Select Skip</div>;
}
