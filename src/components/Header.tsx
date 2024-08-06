'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { status, data } = useSession();
  const handleLoginClick = () => signIn();
  const handleLogoutClick = () => {
    setMenuIsOpen(false);
    signOut();
  };
  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  return (
    <div className='relative container mx-auto  p-5 py-0 h-[93px] flex justify-between items-center'>
      <Link href={'/'}>
        <div className='relative h-[32px] w-[182px] items-center'>
          <Image fill src={'/logo.png'} alt='Full Stack Week' />
        </div>
      </Link>

      {status === 'unauthenticated' && (
        <button
          className='text-primary text-sm font-semibold cursor-pointer'
          onClick={handleLoginClick}
        >
          Login
        </button>
      )}

      {status === 'authenticated' && data.user && (
        <div className='flex items-center gap-2  p-2 px-3 border border-grayLighter rounded-full relative'>
          <AiOutlineMenu size={18} onClick={handleMenuClick} />

          <Image
            src={data.user.image!}
            height={30}
            width={30}
            alt={data.user.name!}
            className='rounded-full shadow-md'
          />
          {menuIsOpen && (
            <div className=' z-50 absolute top-12 left-0 w-full h-[90px] bg-white rounded-lg shadow-md flex flex-col justify-center items-center '>
              <Link href='/my-trips'>
                <button
                  className='text-primary text-xs font-semibold cursor-pointer pb-2 border-b border-grayLighter border-solid'
                  onClick={handleMenuClick}
                >
                  Minhas viagens
                </button>
              </Link>
              <button
                className='text-primary text-xs font-semibold cursor-pointer pt-2'
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
