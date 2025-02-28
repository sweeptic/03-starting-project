'use client';

import { DUMMY_NEWS } from '@/dummy-news';
import { notFound, useRouter } from 'next/navigation';

export default function InterceptedImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug);
  const router = useRouter();

  if (!newsItem) {
    notFound();
  }

  const clickHandler = () => {
    // console.log('click');
    router.back();
  };

  return (
    <>
      <div className="modal-backdrop" onClick={clickHandler} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
