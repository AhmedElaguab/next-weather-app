import { WeatherData } from '@/app/lib/definitions';

export async function GET(req: Request, res: Response) {
  const searchParams = new URL(req.url).searchParams;
  const city = searchParams.get('city');

  const response = await fetch(
    'http://api.weatherapi.com/v1/current.json?key=5909ef944078401b81405756241905&q=' +
      city,
  );
  const data: WeatherData = await response.json();

  if (data.error)
    return Response.json({ city, weather: { error: data.error } });
  return Response.json({ city, weather: data });
}
