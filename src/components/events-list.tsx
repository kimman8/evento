import { EventoEvent } from '@/lib/types';
import EventCard from './event-card';

type EventsListProps = {
  events: EventoEvent[];
};
export default function EventsList({ events }: EventsListProps) {
  return (
    <section className="flex gap-10 flex-wrap justify-center max-w-[1100px] px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
