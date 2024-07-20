import { WeatherData } from '@/app/lib/definitions';

export async function GET(req: Request, res: Response) {
  const searchParams = new URL(req.url).searchParams;
  const city = searchParams.get('city');

  const apiKey = process.env.WEATHER_API_KEY;

  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=
      ${city}`,
  );
  const data: WeatherData = await response.json();

  if (data.error)
    return Response.json({ city, weather: { error: data.error } });
  return Response.json({ city, weather: data });
}
