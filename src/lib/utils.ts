import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import prisma from './db';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function getEvents(decodedCity: string) {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: decodedCity === 'all' ? undefined : capitalize(decodedCity),
    },
    orderBy: {
      date: 'asc',
    },
  });
  return events;
}

export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug,
    },
  });
  return event;
}
