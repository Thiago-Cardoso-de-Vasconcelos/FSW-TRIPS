import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function QuickSearch() {
  return (
    <div className='container m-auto flex flex-col p-5'>
      <div className='flex text-center justify-center items-center gap-3 '>
        <span className='w-full h-[1px] bg-grayLighter'></span>
        <p className='text whitespace-nowrap'>Tente pesquisar por</p>
        <span className='w-full h-[1px] bg-grayLighter'></span>
      </div>

      <div className='flex w-full justify-between mt-5'>
        <div className='flex flex-col items-center gap-1'>
          <Link
            href={`/trips/search?text=hotel`}
            className='flex flex-col items-center hover:text-primary transition-all'
          >
            <Image width={35} height={35} src='/hotel-icon.png' alt='Hotel' />
            <p className='text-sm mt-2 text-grayPrimary'>Hotel</p>
          </Link>
        </div>

        <div className='flex flex-col items-center gap-1'>
          <Link
            href='/trips/search?text=fazenda'
            className='flex flex-col items-center hover:text-primary transition-all'
          >
            <Image width={35} height={35} src='/farm-icon.png' alt='Fazenda' />
            <p className='text-sm mt-2 text-grayPrimary'>Fazenda</p>
          </Link>
        </div>

        <div className='flex flex-col items-center gap-1'>
          <Link
            href='/trips/search?text=Chalé'
            className='flex flex-col items-center hover:text-primary transition-all'
          >
            <Image width={35} height={35} src='/cottage-icon.png' alt='Chalé' />
            <p className='text-sm mt-2 text-grayPrimary'>Chalé</p>
          </Link>
        </div>

        <div className='flex flex-col items-center gap-1'>
          <Link
            href='/trips/search?text=pousada'
            className='flex flex-col items-center hover:text-primary transition-all'
          >
            <Image width={35} height={35} src='/inn-icon.png' alt='Pousada' />
            <p className='text-sm mt-2 text-grayPrimary'>Pousada</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuickSearch;
