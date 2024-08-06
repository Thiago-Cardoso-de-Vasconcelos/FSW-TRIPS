import TripItem from '@/components/TripItem';
import { prisma } from '@/lib/prisma';
import { Trip } from '@prisma/client';

const RecommendedTrips = async () => {
  const trips = await prisma.trip.findMany();

  return (
    <div className='container m-auto flex flex-col p-5'>
      <div className='flex text-center justify-center items-center gap-3 '>
        <span className='w-full h-[1px] bg-grayLighter'></span>
        <p className='text whitespace-nowrap'>Destinos Recomendados</p>
        <span className='w-full h-[1px] bg-grayLighter'></span>
      </div>
      <div className='flex flex-col container m-auto items-center mt-5 gap-5'>
        {trips.map((trip: Trip) => (
          <TripItem key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedTrips;
