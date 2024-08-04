import { WeatherData } from '@/app/lib/definitions';

export default async function CityDetails({
  params,
}: {
  params: { city: string };
}) {
  const city = params.city;
  const response = await fetch(
    'http://127.0.0.1:3000/api/details?city=' + city,
  );

  const weatherData: { city: string; weather: WeatherData } =
    await response.json();

  const error = weatherData.weather?.error;
  const location = weatherData.weather?.location;
  const weather = weatherData.weather?.current;
  const now = new Date();

  return (
    <>
      {location && (
        <h1>
          {location.name}, {location.country} as of {location.localtime}
        </h1>
      )}
      {weather && (
        <>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-6xl font-medium my-2">{weather.temp_c}°</p>
            <img src={weather.condition.icon} alt={weather.condition.text} />
          </div>
          <p className="text-2xl font-medium">{weather.condition.text}</p>

          <hr className="mt-4 mb-4" />
          <ul className="flex justify-between">
            <li>
              Wind:{' '}
              <span className="font-semibold">{weather.wind_kph} km/h</span>
            </li>
            <li>
              Humadity:{' '}
              <span className="font-semibold">{weather.humidity}%</span>
            </li>
          </ul>
        </>
      )}
    </>
  );
}
