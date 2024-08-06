import Link from 'next/link';

export default function Page() {
  return (
    <div>
        <li>
          <Link href="/">hello</Link>
        </li>
      <h1>Home</h1>
      <h2>hi</h2>
      <ul>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/mymusic">Music List</Link>
        </li>
      </ul>
    </div>
  );
}

