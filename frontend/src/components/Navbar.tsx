import React from 'react';
import Link from 'next/link';
import { useClerk } from '@clerk/clerk-react';

const Navbar = () => {
  const { user, signOut } = useClerk(); // Destructure user from useClerk()
  
  return (
    <>
      <nav style={{ backgroundColor: '#1E40AF' }} className="py-4 px-6 flex items-center justify-between mb-5">
        <div className="flex item-center">
          <Link href="/">
            <div className="text-lg font-bold text-white">DiabPro</div>
          </Link>
        </div>
        <div className="text-white">
          <Link href="/index" className="text-gray-300 hover:text-white mr-4">Home</Link>
          <Link href="/diabetes" className="text-gray-300 hover:text-white mr-4">Diabetes</Link>
          {user && (
            <Link href="https://diabetesretinopathy.streamlit.app/" className="text-gray-300 hover:text-white mr-4">Diabetes Retinopathy</Link>
          )}
          {user && (
            <Link href="https://diabfordoc.streamlit.app/" className="text-gray-300 hover:text-white mr-4">Stats for doctors</Link>
          )}
        </div>
        <div>
          {user ? ( // Check if user object exists
            <button onClick={() => signOut()} className="text-white font-semibold bg-red-600 px-4 py-2 rounded-md">Logout</button>
          ) : (
            <>
              <Link href="/sign-in" className="text-gray-300 hover:text-white mr-4">Sign In</Link>
              <Link href="/sign-up" className="text-gray-300 hover:text-white mr-4">Sign Up</Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
