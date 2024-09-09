'use client';

import { EventoEvent } from '@/lib/types';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

type EventCardProps = {
  event: EventoEvent;
};
const MotionLink = motion(Link);
export default function EventCard({ event }: EventCardProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.5 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  return (
    <MotionLink
      ref={ref}
      href={`/event/${event.slug}`}
      className="flex-1 basis-80 h-[380px] max-w-[500px] state-effects"
      style={{
        // @ts-ignore
        scale: scaleProgress,
        // @ts-ignore
        opacity: opacityProgress,
      }}
      initial={{ scale: 0.8, opacity: 0 }}
    >
      <section
        key={event.id}
        className="flex flex-col w-full h-full bg-white/[3%] rounded-xl overflow-hidden relative"
      >
        <Image
          src={event.imageUrl}
          width={500}
          height={280}
          alt={event.name}
          className="h-[60%] object-cover"
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
    </MotionLink>
  );
}
