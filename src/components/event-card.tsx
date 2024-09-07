import { EventoEvent } from '@/lib/types';
import Image from 'next/image';

type EventCardProps = {
  event: EventoEvent;
};
export default function EventCard({ event }: EventCardProps) {
  return (
    <section
      key={event.id}
      className="flex flex-col flex-1 basis-80 h-[380px] max-w-[500px] bg-white/[3%] rounded-xl overflow-hidden relative"
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
      <section className="flex justify-center flex-col items-center absolute top-[12px] left-[12px] h-[45px] w-[45px] bg-black/30 rounded-md">
        <p className="text-xl font-bold -mb-[5px]">
          {/* // turn date into day of the month with a leading 0 if needed */}
          {new Date(event.date).getDate().toString().padStart(2, '0')}
        </p>
        <p className="text-xs uppercase text-accent">
          {/* turn date into month */}
          {new Date(event.date).toLocaleString('en-us', { month: 'short' })}
        </p>
      </section>
    </section>
  );
}
