"use client";

import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <button onClick={() => navigateTo('/login')}>Login</button>
        </li>
        <li>
          <button onClick={() => navigateTo('/mymusic')}>Music List</button>
        </li>
      </ul>
    </div>
  );
}
