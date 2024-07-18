'use client';

import Link from 'next/link';

export default function CityDetails({ params }: { params: { city: string } }) {
  const city = params.city;
  return (
    <>
      <Link href="/" className="flex text-blue-600 mb-2">
        &larr; Back!
      </Link>
      <h1 className="h1 text-2xl font-semibold">City Details ({city})</h1>
    </>
  );
}
