'use client';

import Button from '@/components/Button';
import DatePicker from '@/components/DatePicker';
import Input from '@/components/Input';
import { Trip } from '@prisma/client';
import { differenceInDays, addDays, subDays } from 'date-fns';
import { register } from 'module';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface TripReservationProps {
  tripId: string;
  tripStarDate: Date;
  tripEndDate: Date;
  maxGuests: number;
  pricePerDay: number;
}

interface TripReservationForm {
  guests: number;
  startDate: Date | null;
  endDate: Date | null;
}

function TripReservation({
  tripId,
  tripStarDate,
  tripEndDate,
  maxGuests,
  pricePerDay,
}: TripReservationProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setError,
  } = useForm<TripReservationForm>();

  const router = useRouter();

  const onSubmit = async (data: TripReservationForm) => {
    const response = await fetch('http://localhost:3000/api/trips/check', {
      method: 'POST',
      body: Buffer.from(
        JSON.stringify({
          startDate: data.startDate,
          endDate: data.endDate,
          tripId,
        }),
      ),
    });
    const res = await response.json();

    if (res?.error?.code === 'TRIP_ALREADY_RESERVED') {
      setError('startDate', {
        type: 'manual',
        message: 'Esta data já está reservada.',
      });
      return setError('endDate', {
        type: 'manual',
        message: 'Esta data já está reservada.',
      });
    }

    if (res?.error?.code === 'INVALID_START_DATE') {
      return setError('startDate', {
        type: 'manual',
        message: 'Data inválida.',
      });
    }
    if (res?.error?.code === 'INVALID_END_DATE') {
      return setError('endDate', {
        type: 'manual',
        message: 'Data inválida.',
      });
    }

    router.push(
      `/trips/${tripId}/confirmation?startDate=${data.startDate?.toISOString()}&endDate=${data.endDate?.toISOString()}&guests=${
        data.guests
      }`,
    );
  };

  const startDate = watch('startDate');
  const endDate = watch('endDate');

  const incrementedStartDate = startDate
    ? addDays(startDate, 1)
    : addDays(tripStarDate, 1);

  const decrementedEndDate = endDate
    ? subDays(endDate, 1)
    : subDays(tripEndDate, 1);

  return (
    <div>
      <div className='flex flex-col container mx-auto px-5 gap-3 '>
        <div className='flex gap-3'>
          <Controller
            name='startDate'
            rules={{
              required: {
                value: true,
                message: 'Data inicial é obrigatória.',
              },
            }}
            control={control}
            render={({ field }) => (
              <DatePicker
                placeholderText='Data de Início'
                minDate={tripStarDate}
                maxDate={decrementedEndDate ?? tripEndDate}
                onChange={field.onChange}
                selected={field.value}
                error={!!errors?.startDate}
                errorMessage={errors?.startDate?.message}
              />
            )}
          />

          <Controller
            name='endDate'
            rules={{
              required: {
                value: true,
                message: 'Data Final é obrigatória.',
              },
            }}
            control={control}
            render={({ field }) => (
              <DatePicker
                placeholderText='Data Final'
                onChange={field.onChange}
                selected={field.value}
                error={!!errors?.endDate}
                errorMessage={errors?.endDate?.message}
                minDate={incrementedStartDate ?? tripStarDate}
                maxDate={tripEndDate}
              />
            )}
          />
        </div>
        <Input
          type='number'
          min={1}
          max={maxGuests}
          {...register('guests', {
            required: {
              value: true,
              message: 'Número de hóspedes é obrigatório.',
            },
            max: {
              value: maxGuests,
              message: `Número de hóspedes não pode ser maior que ${maxGuests}.`,
            },
            min: {
              value: 1,
              message: 'Número de hóspedes não pode ser negativo.',
            },
          })}
          error={!!errors?.guests}
          errorMessage={errors?.guests?.message}
          placeholder={`Número de hóspedes: (máximo ${maxGuests})`}
        />
        <div className='flex justify-between'>
          <p className='font-medium text-sm text-primaryDarker'>Total:</p>
          <p className='font-medium text-sm text-primaryDarker'>
            {startDate && endDate
              ? `R$${differenceInDays(endDate, startDate) * pricePerDay}`
              : 'R$0,00'}
          </p>
        </div>
        <Button onClick={() => handleSubmit(onSubmit)()}>Reservar agora</Button>
      </div>
      <div className='mt-10 border-b border-grayLighter mx-5'></div>
    </div>
  );
}

export default TripReservation;
