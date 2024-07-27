import { MoonLoader } from 'react-spinners';

export default async function loading() {
  return (
    <>
      <div className="flex justify-center">
        <MoonLoader size={25} />
      </div>
    </>
  );
}
