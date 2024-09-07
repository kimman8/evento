import { EventoEvent } from '@/lib/types';

type EventCardProps = {
  event: EventoEvent;
};
export default function EventCard({ event }: EventCardProps) {
  return (
    <section
      key={event.id}
      className="bg-white/[10%] rounded-lg p-6 mt-6 w-full sm:w-[580px]"
    >
      <h2 className="text-xl font-bold">{event.name}</h2>
      <p className="text-sm text-white/50 mt-2">{event.location}</p>
    </section>
  );
}
