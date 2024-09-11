import EventsList from '@/components/events-list';
import H1 from '@/components/h1';
import { Suspense } from 'react';
import Loading from './loading';
import { Metadata } from 'next';
import { capitalize } from '@/lib/utils';

type Props = {
  params: {
    city: string;
  };
};

type EventsPageProps = Props & {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  return {
    title:
      params.city === 'all'
        ? 'All Events'
        : `Events in ${capitalize(params.city)}`,
    description: 'Browse more than 10,000 events worldwide',
  };
}

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const page = searchParams.page || 1;
  const decodedCity = decodeURIComponent(params.city);

  const formattedCity = capitalize(decodedCity);

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {params.city === 'all' ? 'All events' : `Events in ${formattedCity}`}
      </H1>
      <Suspense key={decodedCity + page} fallback={<Loading />}>
        <EventsList decodedCity={decodedCity} page={+page} />
      </Suspense>
    </main>
  );
}
