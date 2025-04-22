import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-bold text-center">One‑Day Strategic AI Training</h1>
      <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl">
        Level up your team's AI skills in just 8 hours.
      </p>
      <Link
        href="/training/one-day-strategic-ai"
        className="btn-primary mt-6 inline-block"
      >
        Learn More
      </Link>
    </div>
  );
}
