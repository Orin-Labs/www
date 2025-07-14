import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link href="/">
          <button className="flex items-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2 mx-auto">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go back home
          </button>
        </Link>
      </div>
    </div>
  );
}
