import { EventoEvent } from '@/lib/types';
import EventCard from './event-card';

type EventsListProps = {
  decodedCity: string;
};

export default async function EventsList({ decodedCity }: EventsListProps) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${decodedCity}`
  );
  const events: EventoEvent[] = await response.json();
  return (
    <section className="flex gap-10 flex-wrap justify-center max-w-[1100px] px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
