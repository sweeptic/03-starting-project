import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header id="main-header">
        <ul>
          <li>
            <Link href={'/'}> Home</Link>
          </li>
          <li>
            <Link href={'/news'}>news</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
