'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Prisma } from '@prisma/client';

import UserReservationItem from './components/UserReservationItem';
import Link from 'next/link';
import Button from '@/components/Button';

const MyTrips = () => {
  const [reservations, setReservations] = useState<
    Prisma.TripReservationGetPayload<{
      include: { trip: true };
    }>[]
  >([]);
  const [isLoading, setIsLoading] = useState(true); // Estado de carregamento

  const { status, data } = useSession();
  const router = useRouter();

  const fetchReservations = async () => {
    try {
      setIsLoading(true); // Inicia o estado de carregamento
      const response = await fetch(
        `http://localhost:3000/api/user/${
          (data?.user as any)?.id
        }/reservations`,
      );
      const json = await response.json();
      setReservations(json);
    } catch (error) {
      console.error('Erro ao buscar reservas:', error);
    } finally {
      setIsLoading(false); // Finaliza o estado de carregamento
    }
  };

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    } else {
      fetchReservations();
    }
  }, [status]);

  return (
    <div className='container mx-auto p-5'>
      <h1 className='font-semibold text-primaryDarker text-xl'>
        Minhas Viagens
      </h1>
      {isLoading ? (
        <p>Carregando...</p> // Mensagem de carregamento
      ) : reservations.length > 0 ? (
        reservations.map((reservation) => (
          <UserReservationItem
            fetchReservations={fetchReservations}
            key={reservation.id}
            reservation={reservation}
          />
        ))
      ) : (
        <div className='flex flex-col'>
          <p className='pt-5 text-primaryDarker font-medium'>
            Você não possui viagens 😕
          </p>
          <Link href={'/'}>
            <Button className='w-full mt-4'>Fazer reserva</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyTrips;
