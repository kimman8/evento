import EventsList from '@/components/events-list';
import H1 from '@/components/h1';
import { EventoEvent } from '@/lib/types';

type EventsPageProps = {
  params: {
    city: string;
  };
};
export default async function EventsPage({ params }: EventsPageProps) {
  const decodedCity = decodeURIComponent(params.city);
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${decodedCity}`
  );
  const events: EventoEvent[] = await response.json();

  // Capitalise first letter of each word
  const capitaliseWords = (str: string) => {
    return str
      .split(' ') // Split the string by spaces
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalise first letter of each word
      .join(' '); // Join the words back together
  };

  const formattedCity = capitaliseWords(decodedCity);

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {params.city === 'all' ? 'All events' : `Events in ${formattedCity}`}
      </H1>
      <EventsList events={events} />
    </main>
  );
}
