import Link from 'next/link';
import { ReactNode } from 'react';

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Link href="/" className="flex text-blue-600 mb-2">
        &larr; Back!
      </Link>

      <div className="bg-white shadow-sm border p-4 rounded-sm">{children}</div>
    </>
  );
}
