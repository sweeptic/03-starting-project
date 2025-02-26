import Link from 'next/link';

export default function NewsDetailPage({ params }) {
  console.log('params', params);

  return (
    <div>
      <h1>{`News Detail Page`}</h1>
      <p>news id: {`${params.id}`}</p>
    </div>
  );
}
