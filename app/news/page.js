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
      <h1>This is the news page.</h1>
      <ul>{links}</ul>
    </div>
  );
}
