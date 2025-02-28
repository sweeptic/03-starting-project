'use client';

import { useRouter } from 'next/navigation';

export default function ModalBackdrop() {
  const router = useRouter();

  const clickHandler = () => {
    router.back();
  };

  return (
    <>
      <div className="modal-backdrop" onClick={clickHandler} />
    </>
  );
}
