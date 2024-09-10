import EventCard from './event-card';
import { getEvents } from '@/lib/utils';
import PaginationControls from './pagination-controls';

type EventsListProps = {
  decodedCity: string;
  page?: number;
};

export default async function EventsList({
  decodedCity,
  page = 1, // Default to page 1 if not provided
}: EventsListProps) {
  const currentPage = +page; // Ensure page is treated as a number
  const { events, totalCount } = await getEvents(decodedCity, currentPage);

  const prevPath =
    currentPage > 1 ? `/events/${decodedCity}?page=${currentPage - 1}` : '';
  const nextPath =
    totalCount > currentPage * 6
      ? `/events/${decodedCity}?page=${currentPage + 1}`
      : '';

  return (
    <section className="flex gap-10 flex-wrap justify-center max-w-[1100px] px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      <PaginationControls prevPath={prevPath} nextPath={nextPath} />
    </section>
  );
}
