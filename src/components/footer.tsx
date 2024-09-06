import Link from 'next/link';

const routes = [
  { name: 'Terms & Conditions', path: '/terms-conditions' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
];
export default function Footer() {
  return (
    <footer className="mt-auto flex justify-between items-center border-t border-white/10 h-16 px-3 sm:px-9 text-sm text-white/25">
      <small className="text-xs">
        &copy; Kim Man 2024. All rights reserved.
      </small>
      <ul className="flex gap-x-3 sm:gap-x-8">
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
