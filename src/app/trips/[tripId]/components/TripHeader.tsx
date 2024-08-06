import React from 'react';
import { Trip } from '@prisma/client';
import Image from 'next/image';
import ReactCountryFlag from 'react-country-flag';

interface TripItemProps {
  trip: Trip;
}

function TripHeader({ trip }: TripItemProps) {
  return (
    <>
      <div className='relative h-[300px] w-full'>
        <Image
          src={trip.coverImage}
          fill
          style={{ objectFit: 'cover' }}
          alt={trip.name}
        />
      </div>
      <div className='flex flex-col p-5'>
        <h1 className='font-semibold text-xl text-primaryDarker'>
          {trip.name}
        </h1>
        <div>
          <div className='flex items-center gap-1 my-1'>
            <ReactCountryFlag countryCode={trip.countryCode} svg />
            <p className='text-xs text-grayPrimary underline'>
              {trip.location}
            </p>
          </div>
          <p className='text-xs text-grayPrimary'>
            <span className='text-primary font-medium'>
              R${trip.pricePerDay.toString()}
            </span>{' '}
            por dia
          </p>
        </div>
      </div>
    </>
  );
}

export default TripHeader;
