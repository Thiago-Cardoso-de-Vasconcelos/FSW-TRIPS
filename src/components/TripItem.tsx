'use client';

import { Trip } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ReactCountryFlag from 'react-country-flag';

interface TripItemProps {
  trip: Trip;
}

function TripItem({ trip }: TripItemProps) {
  return (
    <Link href={`/trips/${trip.id}`}>
    <div className='flex flex-col gap-1'>
      <Image
        src={trip.coverImage}
        alt={trip.name}
        width={350}
        height={300}
        className='rounded shadow-md'
      />
      <h3 className='text-primaryDarker font-medium text-sm mt-2'>
        {trip.name}
      </h3>
      <div className='flex items-center gap-1 '>
        <ReactCountryFlag countryCode={trip.countryCode} svg />
        <p className='text-xs text-grayPrimary '>{trip.location}</p>
      </div>
      <p className='text-xs text-grayPrimary'>
        <span className='text-primary font-medium'>
          R${trip.pricePerDay.toString()}
        </span> por dia
      </p>
    </div>
    </Link>
    
  );
}

export default TripItem;
