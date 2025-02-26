import Link from 'next/link';

const pageName = ['first-news', 'second-news', 'third-news'];

export default function NewsPage() {
  const links = pageName.map((item) => (
    <li>
      <Link href={`/news/${item}`}>{item}</Link>
    </li>
  ));

  return (
    <div id="home">
      <ul>{links}</ul>
    </div>
  );
}
