// 'use client';

import ModalBackdrop from '@/components/modal-backdrop';
import { getNewsItem } from '@/lib/news';
import { notFound } from 'next/navigation';

export default async function InterceptedImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = await getNewsItem(newsItemSlug);
  //   const router = useRouter();

  if (!newsItem) {
    notFound();
  }

  //   const clickHandler = () => {
  //     router.back();
  //   };

  return (
    <>
      {/* <div className="modal-backdrop" onClick={clickHandler} /> */}
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
