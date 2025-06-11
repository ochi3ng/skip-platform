import { Suspense } from 'react';
import ChooseDateContent from './ChooseDateContent';

export default function ChooseDatePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChooseDateContent />
    </Suspense>
  );
}
