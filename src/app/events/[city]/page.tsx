import EventsList from '@/components/events-list';
import H1 from '@/components/h1';
import { Suspense } from 'react';
import Loading from './loading';
import { Metadata } from 'next';
import { capitalize } from '@/lib/utils';
import { z } from 'zod';

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

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const page = searchParams.page || 1;
  const decodedCity = decodeURIComponent(params.city);

  const formattedCity = capitalize(decodedCity);
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  if (!parsedPage.success) {
    throw new Error('Invalid page number');
  }

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {params.city === 'all' ? 'All events' : `Events in ${formattedCity}`}
      </H1>
      <Suspense key={decodedCity + page} fallback={<Loading />}>
        <EventsList decodedCity={decodedCity} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}
