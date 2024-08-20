'use client';

import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div>
      <ul></ul>
    </div>
  );
}
