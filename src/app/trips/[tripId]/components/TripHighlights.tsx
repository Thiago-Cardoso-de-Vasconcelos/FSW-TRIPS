import Image from 'next/image';
import React from 'react';

interface TripHighkightsProps {
  highlights: string[];
}

function TripHighlights({ highlights }: TripHighkightsProps) {
  return (
    <div className='flex flex-col gap-3 container mx-auto p-5'>
      <h2 className='font-semibold text-primaryDarker'>Destaques</h2>

      <div className='grid grid-cols-2 gap-y-2'>
        {highlights.map((highlight, index) => (
          <div className='flex items-center gap-2 w-1/2' key={index}>
            <Image
              src={'/check-icon.png'}
              width={15}
              height={15}
              alt={highlight}
            />
            <p className='text-grayPrimary text-xs whitespace-nowrap'>
              {highlight}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TripHighlights;
