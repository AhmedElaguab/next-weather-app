'use client';

import { useEffect, useState } from 'react';
import { City } from './lib/definitions';
import Link from 'next/link';

export default function Home() {
  const [search, setSearch] = useState('');
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    const fetchCities = async () => {
      const resp = await fetch('/api/city?city=' + search);
      const data = await resp.json();
      setCities(data.cities);
    };

    if (search.length > 2) fetchCities();
    else setCities([]);
  }, [search]);

  return (
    <main className="p-24">
      <h1 className="h1 text-2xl font-semibold">Next Weather App</h1>
      <div className="flex flex-col mt-3">
        <label htmlFor="search">Search for local weather</label>
        <input
          id="search"
          className="border rounded p-2 mt-1"
          type="text"
          placeholder="Search cities.."
          value={search}
          onChange={e => setSearch(e.target.value.trimStart())}
        />
      </div>
      {cities.length > 0 && (
        <div className="flex flex-col mt-4">
          {cities.map(city => (
            <Link key={city.id} href={`/details/${city.name}`}>
              {city.name}, {city.country}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
