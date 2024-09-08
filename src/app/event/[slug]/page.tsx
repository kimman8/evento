import H1 from '@/components/h1';
import Image from 'next/image';

type EventPageProps = {
  params: {
    slug: string;
  };
};
export default async function EventPage({ params }: EventPageProps) {
  const slug = params.slug;
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event = await response.json();
  console.log(event);
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
      <div></div>
    </main>
  );
}
