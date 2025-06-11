import { Suspense } from 'react';
import PostCodeClient from './PostCodeClient';

export default function PostCodePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PostCodeClient />
    </Suspense>
  );
}
