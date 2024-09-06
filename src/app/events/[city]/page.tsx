import H1 from '@/components/h1';

type EventsPageProps = {
  params: {
    city: string;
  };
};
export default function EventsPage({ params }: EventsPageProps) {
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
    </main>
  );
}
