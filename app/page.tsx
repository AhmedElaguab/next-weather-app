export default function Home() {
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
        />
      </div>
    </main>
  );
}
