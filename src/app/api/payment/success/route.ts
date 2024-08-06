import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

export async function POST(request: Request) {
  const sig = request.headers.get('stripe-signature')!;
  const text = await request.text();

  let event;

  try {
    // Construa o evento do Stripe
    event = stripe.webhooks.constructEvent(
      text,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET_KEY!,
    );

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as any;

      // Converta valores Decimal para tipos nativos se necessário
      const startDate = new Date(session.metadata.startDate);
      const endDate = new Date(session.metadata.endDate);
      const userId = session.metadata.userId;
      const tripId = session.metadata.tripId;
      const totalPaid = Number(session.metadata.totalPrice); // Converte Decimal para number
      const guests = Number(session.metadata.guests); // Converte Decimal para number

      // Crie a reserva no Prisma
      await prisma.tripReservation.create({
        data: {
          startDate,
          endDate,
          userId,
          tripId,
          totalPaid,
          guests,
        },
      });
    }

    return new NextResponse(JSON.stringify({ received: true }), {
      status: 200,
    });
  } catch (error) {
    console.error('Erro ao processar webhook do Stripe:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Erro ao processar webhook.' }),
      { status: 400 },
    );
  }
}
