import H1 from '@/components/h1';

type EventsPageProps = {
  params: {
    city: string;
  };
};
export default async function EventsPage({ params }: EventsPageProps) {
  const response = await fetch(
    'https://bytegrad.com/course-assets/projects/evento/api/events?city=austin'
  );
  const events = await response.json();
  console.log(events);

  const decodedCity = decodeURIComponent(params.city);
  // Capitalise first letter of each word
  const capitaliseWords = (str) => {
    return str
      .split(' ') // Split the string by spaces
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalise first letter of each word
      .join(' '); // Join the words back together
  };

  const formattedCity = capitaliseWords(decodedCity);

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1>
        {params.city === 'all' ? 'All events' : `Events in ${formattedCity}`}
      </H1>
      {events.map((event) => (
        <div
          key={event.id}
          className="bg-white/[10%] rounded-lg p-6 mt-6 w-full sm:w-[580px]"
        >
          <h2 className="text-xl font-bold">{event.name}</h2>
          <p className="text-sm text-white/50 mt-2">{event.date}</p>
          <p className="text-sm text-white/50 mt-2">{event.location}</p>
        </div>
      ))}
    </main>
  );
}
