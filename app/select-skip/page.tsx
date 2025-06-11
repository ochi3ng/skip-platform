import { Suspense } from 'react';
import SelectSkipContent from './SelectSkipContent';

export default function SelectSkipPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SelectSkipContent />
    </Suspense>
  );
}
