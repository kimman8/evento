import Link from 'next/link';
import Logo from './logo';

export default function Header() {
  return (
    <header>
      <Logo />
      <Link href="/">Home</Link>
      <Link href="/events/all">All events</Link>
    </header>
  );
}
