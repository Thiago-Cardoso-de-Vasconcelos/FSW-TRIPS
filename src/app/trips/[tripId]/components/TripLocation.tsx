import Button from '@/components/Button';
import Image from 'next/image';
import React from 'react';

interface TripLocationProps {
  location: string;
  locationDescription: string;
}

function TripLocation({ location, locationDescription }: TripLocationProps) {
  return (
    <div className=' container flex flex-col gap-2 m-auto px-5 pt-5 mb-5'>
      <h2 className='font-semibold text-primaryDarker mb-2'>Localização</h2>
      <div className='relative h-[280px] w-full'>
        <Image
          src='/map-mobile.png'
          alt={location}
          fill
          style={{
            objectFit: 'cover',
          }}
          className='rounded-lg shadow-md'
        />
      </div>
      <p className='text-primaryDarker text-sm mt-2 font-semibold'>
        {location}
      </p>
      <p className='text-xs text-primaryDarker leading-5'>
        {locationDescription}
      </p>
      <Button variant='outlined' className='w-full mt-5'>
        Ver no Google Maps
      </Button>
    </div>
  );
}

export default TripLocation;
