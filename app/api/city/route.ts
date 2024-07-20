import { City } from '@/app/lib/definitions';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');
  const apiKey = process.env.WEATHER_API_KEY;
  const response = await fetch(
    `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=
      ${city}`,
  );
  const data: City[] = await response.json();

  return Response.json({ city, cities: data });
}
