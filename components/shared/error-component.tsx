type ErrorComponentProps = {
  error: unknown;
};

export default function Component({ error }: ErrorComponentProps) {
  return (
    <div className="text-center py-12">
      <p className="text-red-600 mb-2">Failed to load skips</p>
      <p className="text-gray-600 text-sm">Please try again later</p>
      <p className="text-xs text-gray-500 mt-2">
        Error: {error instanceof Error ? error.message : "Unknown error"}
      </p>
    </div>
  );
}
