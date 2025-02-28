// 'use client';

import NewsList from '@/components/news-list';
// import { useEffect, useState } from 'react';

export default async function NewsPage() {
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [error, setError] = useState();
  //   const [news, setNews] = useState();

  const response = await fetch('http://localhost:8080/news');

  if (!response.ok) {
    throw new Error('Failed to fetch news.');
  }

  const news = await response.json();

  //   useEffect(() => {
  //   const fetchNews = async () => {
  //   setIsLoading(true);
  //   const response = await fetch('http://localhost:8080/news');
  //   if (!response.ok) {
  //   setError('Failed to fetch news.');
  //   setIsLoading(false);
  // }

  //   const news = await response.json(); // you can let it do it's stuff in the background without blocking
  //   const news = JSON.parse(await response.text()); // is blocking.

  //     setNews(news);
  //     setIsLoading(false);
  //   };

  //   fetchNews();
  //   }, []);

  //   if (isLoading) {
  //     return <p>Loading...</p>;
  //   }

  //   if (error) {
  //     return <p>{error}</p>;
  //   }

  //   let newsContent;

  //   if (news) {
  //   newsContent = <NewsList news={news} />;
  //   }

  return (
    <>
      <h1>News Page</h1>
      {/* {newsContent} */}
      <NewsList news={news} />
    </>
  );
}
