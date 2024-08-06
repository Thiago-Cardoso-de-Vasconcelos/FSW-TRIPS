import Image from 'next/image';
import React from 'react';

function Footer() {
  return (
    <div className='bg-walterWhite mt-10 '>
      <div className=' mx-auto container p-5 flex flex-col justify-center items-center'>
        <Image src='/logo.png' alt='FullStackWeek' width={150} height={33} />
        <p className='text-sm font-medium text-primaryDarker mt-2'>
          Todos os direitos reservados
        </p>
      </div>
    </div>
  );
}

export default Footer;
