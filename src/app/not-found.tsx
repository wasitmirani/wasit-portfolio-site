import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-950">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-zinc-900 dark:text-white mb-4">404</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          This page could not be found.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-zinc-900 dark:bg-white dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
