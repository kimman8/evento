import EventCard from './event-card';
import { getEvents } from '@/lib/utils';

type EventsListProps = {
  decodedCity: string;
};

export default async function EventsList({ decodedCity }: EventsListProps) {
  const events = await getEvents(decodedCity);
  return (
    <section className="flex gap-10 flex-wrap justify-center max-w-[1100px] px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
