// app/not-found.tsx

"use client";

import Link from 'next/link';

export default function NotFoundPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <h2 className="mt-4 text-2xl font-semibold text-gray-700">Page Not Found</h2>
                <p className="mt-2 text-gray-600">
                    Sorry, the page you're looking for doesn't exist or has been moved.
                </p>
                <Link href="/" className="inline-block px-6 py-2 mt-6 text-white bg-blue-600 rounded-md hover:bg-blue-700">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
}
