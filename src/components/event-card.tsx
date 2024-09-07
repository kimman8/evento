import { EventoEvent } from '@/lib/types';
import Image from 'next/image';

type EventCardProps = {
  event: EventoEvent;
};
export default function EventCard({ event }: EventCardProps) {
  return (
    <section
      key={event.id}
      className="flex flex-col flex-1 basis-80 h-[380px] max-w-[500px] bg-white/[3%] rounded-xl overflow-hidden"
    >
      <Image
        src={event.imageUrl}
        width={500}
        height={280}
        alt={event.name}
        className="h-[60%] object-fit"
      />
      <div className="flex flex-col items-center justify-center flex-1">
        <h2 className="text-2xl font-semibold">{event.name}</h2>
        <p className="italic text-white/75">By {event.organizerName}</p>
        <p className="text-sm text-white/50 mt-4">{event.location}</p>
      </div>
    </section>
  );
}
