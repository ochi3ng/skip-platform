// app/components/SearchParamsClient.tsx
'use client';

import { useSearchParams } from 'next/navigation';

export default function SearchParamsClient() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  return <div>{id}</div>;
}
