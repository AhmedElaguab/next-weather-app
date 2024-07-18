import { City } from '@/app/lib/definitions';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');

  const response = await fetch(
    'http://api.weatherapi.com/v1/search.json?key=5909ef944078401b81405756241905&q=' +
      city,
  );
  const data: City[] = await response.json();

  return Response.json({ city, cities: data });
}
