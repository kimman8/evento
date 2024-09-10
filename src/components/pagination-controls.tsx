import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
type PaginationControlsProps = {
  prevPath: string;
  nextPath: string;
};
const btnStyles =
  'flex items-center justify-center gap-x-2 text-white px-5 py-3 rounded-md bg-white/5 opacity-75 hover:opacity-100 transition text-sm';
export default function PaginationControls({
  prevPath,
  nextPath,
}: PaginationControlsProps) {
  return (
    <section className="flex w-full justify-between">
      {prevPath ? (
        <Link href={prevPath} className={btnStyles}>
          <ArrowLeftIcon className="" />
          Previous
        </Link>
      ) : (
        <div />
      )}
      {nextPath && (
        <Link href={nextPath} className={btnStyles}>
          Next
          <ArrowRightIcon className="" />
        </Link>
      )}
    </section>
  );
}
