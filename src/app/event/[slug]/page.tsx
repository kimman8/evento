import H1 from '@/components/h1';
import { Metadata } from 'next';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event = await response.json();
  return {
    title: `${event.name}`,
    description: 'Browse more than 10,000 events worldwide',
  };
}

export default async function EventPage({ params }: Props) {
  const slug = params.slug;
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event = await response.json();
  return (
    <main>
      <section className="relative flex items-center justify-center py-14 md:py-20 overflow-hidden">
        <Image
          className="object-cover blur-3xl z-0"
          src={event.imageUrl}
          alt="event background image"
          fill
          quality={50}
          sizes="(max-width:1280px)100vw,1280px"
          priority
        />
        <div className="z-1 relative flex flex-col lg:flex-row gap-6 lg:gap-16">
          <Image
            className="rounded-xl border-2 border-white/50 object-cover"
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
          />
          <div className="flex flex-col">
            {/* display the date in a p tag with the format as shown: saturday, october 12 */}
            {
              <p className=" text-white/75">
                {new Date(event.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            }
            <H1 className="my-2 whitespace-nowrap lg:text-5xl">{event.name}</H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organised by:{' '}
              <span className="italic">{event.organizerName}</span>
            </p>
            <button className="bg-white/20 bg-blur py-2 capitalize w-[95vw] rounded-md border-2 border-white/10 sm:w-full text-xl lg:mt-auto mt-5 state-effects">
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <div className="min-h-[75vh] text-center px-5 py-16">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-8">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
      {children}
    </p>
  );
}
