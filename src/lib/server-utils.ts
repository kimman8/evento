import 'server-only';
import { unstable_cache } from 'next/cache';
import prisma from './db';
import { capitalize } from './utils';
import { notFound } from 'next/navigation';

export const getEvents = unstable_cache(
  async (decodedCity: string, page = 1) => {
    const events = await prisma.eventoEvent.findMany({
      where: {
        city: decodedCity === 'all' ? undefined : capitalize(decodedCity),
      },
      orderBy: {
        date: 'asc',
      },
      take: 6,
      skip: (page - 1) * 6,
    });

    let totalCount;
    if (decodedCity === 'all') {
      totalCount = await prisma.eventoEvent.count();
    } else {
      totalCount = await prisma.eventoEvent.count({
        where: {
          city: capitalize(decodedCity),
        },
      });
    }

    return { events, totalCount };
  }
);

export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug,
    },
  });
  if (!event) {
    return notFound();
  }
  return event;
});
