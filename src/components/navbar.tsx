"use client"; // Mark this as a client-side component

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

const Navbar = () => {
  const [mounted, setMounted] = useState(false); // Track if the component has mounted
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/dashboard" className="text-xl font-bold">Brand</Link>
        </div>

        <div className="flex space-x-4">
          <Link href="/dashboard" className="hover:text-gray-400">Dashboard</Link>
          <Link href="/profile" className="hover:text-gray-400">Profile</Link>
          <button onClick={handleLogout} className="hover:text-gray-400">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
