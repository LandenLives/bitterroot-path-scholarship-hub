import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">
          Login Coming Soon
        </h1>

        <p className="text-zinc-400 mb-8">
          Personalization features are under development.
          You can browse all scholarships freely without logging in.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/browse"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition"
          >
            Browse Scholarships
          </Link>

          <Link
            href="/"
            className="border border-zinc-700 px-6 py-3 rounded-lg font-medium hover:bg-zinc-800 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
