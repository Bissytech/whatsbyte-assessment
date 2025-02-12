import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="flex flex-wrap justify-between items-center p-4">
      <div>
        <Image 
          src="/images/whatbyteslogo.jpeg" 
          alt="company logo" 
          width={200} 
          height={90} 
          className="rounded-md"
        />
      </div>

      <div className="flex items-center space-x-4 border border-black-300 rounded-lg p-4 ">
        <div>
          <Image 
            src="/images/myimage.jpeg" 
            alt="my image" 
            width={50} 
            height={30} 
            className="rounded-full"
          />
        </div>
        <div className="font-semibold text-gray-800">Bisoye Ogunnaike</div>
      </div>
    </div>
  );
}
