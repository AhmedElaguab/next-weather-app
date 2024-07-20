import { WeatherData } from '@/app/lib/definitions';
import Link from 'next/link';

export default async function CityDetails({
  params,
}: {
  params: { city: string };
}) {
  const city = params.city;
  const response = await fetch(
    'http://localhost:3000/api/details?city=' + city,
  );

  const weatherData: { city: string; weather: WeatherData } =
    await response.json();

  const error = weatherData.weather?.error;
  const location = weatherData.weather?.location;
  const weather = weatherData.weather?.current;
  const now = new Date();

  return (
    <>
      <Link href="/" className="flex text-blue-600 mb-2">
        &larr; Back!
      </Link>
      {error && <p className="text-red-600">Error: {error.message}</p>}
      {weatherData.weather.current && (
        <div className="bg-white shadow-sm border p-4 rounded-sm">
          {location && (
            <h1>
              {location.name}, {location.country} as of {location.localtime}
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
