import React from 'react';

interface TripDescriptionProps {
  description: string;
}

function TripDescription({ description }: TripDescriptionProps) {
  return (
    <div className='flex flex-col gap-3 container mx-auto p-5'>
      <h2 className='font-semibold text-primaryDarker'>Sobre a viagem</h2>
      <p className='text-xs leading-5 text-primaryDarker'>{description}</p>
    </div>
  );
}

export default TripDescription;
