'use client';

import NewsList from '@/components/news-list';
import { useEffect, useState } from 'react';

export default function NewsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [news, setNews] = useState();

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      const response = await fetch('http://localhost:8080/news');
      if (!response.ok) {
        setError('Failed to fetch news.');
        setIsLoading(false);
      }

      //   console.log('response', response.body);
      //   console.log('RUN 1');
      const news = await response.json(); // you can let it do it's stuff in the background without blocking
      //   console.log('RUN 2');

      //   const doParse = () => {
      //     console.log('RUN 1');
      //     const data = response.text();
      //     console.log('RUN 2');
      //     return data;
      //   };

      //   const news = JSON.parse(await doParse()); // is blocking.

      //   console.log('RUN 2');
      //   console.log('DEBUG', news);
      //   console.log('RUN 3');

      setNews(news);
      setIsLoading(false);
    };

    fetchNews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let newsContent;

  if (news) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  );
}
