import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex flex-col items-center bg-slate-800 text-gray-200">
      <div className="max-w-screen-xl w-full">
        <h1 className="text-5xl text-center pt-16 pb-6">Elias Maciel&apos;s Home Page</h1>
        <nav className="text-xl flex flex-row justify-center py-4 gap-8">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/courses-teaching">Courses &amp; Teaching</Link>
          <Link href="/contact-info">Contact &amp; Info</Link>
        </nav>
      </div>
    </header>
  );
}
