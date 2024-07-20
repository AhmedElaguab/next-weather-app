'use client';

import { WeatherData } from '@/app/lib/definitions';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CityDetails({ params }: { params: { city: string } }) {
  const city = params.city;
  const [weatherData, setWeatherData] = useState<WeatherData>();

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await fetch(
        'http://api.weatherapi.com/v1/current.json?key=5909ef944078401b81405756241905&q=' +
          city,
      );
      const data: WeatherData = await response.json();
      setWeatherData(data);
    };
    fetchWeatherData();
  }, []);

  const location = weatherData?.location;
  const weather = weatherData?.current;
  const now = new Date();

  return (
    <>
      <Link href="/" className="flex text-blue-600 mb-2">
        &larr; Back!
      </Link>
      {!weatherData && <p>Loading...</p>}
      {weatherData && (
        <div className="bg-white shadow-sm border p-4 rounded-sm">
          {location && (
            <h1>
              {location.name}, {location.country} as of {now.getHours()}:
              {now.getMinutes()}
            </h1>
          )}
          {weather && (
            <>
              <hr className="my-2" />
              <div className="flex justify-between">
                <p className="text-6xl font-medium my-2">{weather.temp_c}°</p>
                <img
                  src={weather.condition.icon}
                  alt={weather.condition.text}
                />
              </div>
              <p className="text-2xl font-medium">{weather.condition.text}</p>
            </>
          )}
        </div>
      )}
    </>
  );
}
