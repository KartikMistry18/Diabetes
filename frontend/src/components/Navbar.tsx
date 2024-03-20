import React from 'react'
import Link from "next/link"
import { useClerk } from '@clerk/clerk-react';

const Navbar = () => {
  const { signOut } = useClerk();
  return (
    <>

     <nav style={{ backgroundColor: '#1E40AF' }} className="py-4 px-6 flex items-center justify-between mb-5">
        <div className="flex item-center">
            <Link href="/">
                <div className="text-lg uppercase font-bold text-black">DiabPro</div>
            </Link>
        </div>
        <div className="text-white">
          <Link href="sign-in" className='text-gray-300 hover:text-white mr-4'>Home</Link>
        </div>
        <div>
        <Link href="sign-in" className='text-gray-300 hover:text-white mr-4'>Sign In</Link>
          <Link href="sign-up" className='text-gray-300 hover:text-white mr-4'>Sign Up</Link>
          <button onClick={() => signOut()} className="text-white font-semibold bg-red-600 px-4 py-2 rounded-md">Logout</button>
        </div>
     </nav>
    </>
  )
}

export default Navbar