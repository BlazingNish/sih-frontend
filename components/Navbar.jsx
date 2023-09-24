import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center h-20 px-10 py-4 justify-evenly shadow-lg">
      <div className="flex space-x-3">
        <Image
          src="/assets/leafLogo.jpg"
          alt="leafLogo"
          width={40}
          height={40}
        />
        <div className="flex items-center text-lg font-bold">
          <span className=" text-amber-800">Khrishi</span>
          <span className=" text-teal-600">Sahayak</span>
        </div>
      </div>
      <div>
        <ul className="flex space-x-10 font-semibold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/upload">Upload</Link>
          </li>
          <li>
            <Link href="/history">History</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
