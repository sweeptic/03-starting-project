import Link from 'next/link';

export default function NewsDetailPage(props) {
  console.log('props', props);

  return (
    <div>
      <h1>{`News DetailPage - ${props.params.newsSlug}`}</h1>
      <Link href={'/news'}>Back to news</Link>
    </div>
  );
}
