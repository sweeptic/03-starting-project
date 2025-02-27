// import { DUMMY_NEWS } from '@/dummy-news';
// import Link from 'next/link';

// export default function NewsPage() {
//   const links = DUMMY_NEWS.map((newsItem) => (
//     <li key={newsItem.id}>
//       <Link href={`/news/${newsItem.slug}`}>
//         {newsItem.title}
//         <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
//         <span>{newsItem.title}</span>
//       </Link>
//     </li>
//   ));

//   return (
//     <div id="home">
//       <ul className="news-list">{links}</ul>
//     </div>
//   );
// }

import NewsList from '@/components/news-list';
import { DUMMY_NEWS } from '@/dummy-news';

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
