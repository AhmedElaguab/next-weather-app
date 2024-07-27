'use client';

import { useEffect, useState } from 'react';
import { City } from './lib/definitions';
import Link from 'next/link';
import clsx from 'clsx';
import { MoonLoader } from 'react-spinners';

export default function Home() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [search, setSearch] = useState('');
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    setCities([]);
    setStatus('loading');
    const fetchCities = async () => {
      const resp = await fetch('/api/city?city=' + search);
      const data = await resp.json();
      setCities(data.cities);
      setStatus('idle');
    };

    if (search.length > 2) fetchCities();
    else {
      setCities([]);
      setStatus('idle');
    }
  }, [search]);

  return (
    <>
      <h1 className="h1 text-2xl font-semibold">Next Weather App</h1>
      <div className="flex flex-col mt-3">
        <label htmlFor="search">Search for local weather</label>
        <input
          id="search"
          className={clsx('border rounded p-2 mt-1', {
            'outline-red-500': search.length < 3,
          })}
          type="text"
          placeholder="Search cities.."
          value={search}
          onChange={e => setSearch(e.target.value.trimStart())}
          autoComplete="false"
        />
      </div>

      <div className="flex flex-col mt-4">
        <div className="flex justify-center">
          <MoonLoader size="20px" loading={status === 'loading'} />
        </div>
        {cities.length > 0 &&
          cities.map(city => (
            <Link key={city.id} href={`/details/${city.name}`}>
              {city.name}, {city.country}
            </Link>
          ))}
      </div>
    </>
  );
}
