// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Content Creator Dashboard</h1>
      <p className="text-xl text-center mb-6">
        A personalized hub for writers, content creators, and professionals.
        Access your tailored dashboard, discover a library of widgets, and
        enhance your productivity and creativity.
      </p>
      <Link href="/dashboard">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
}
