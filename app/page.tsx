import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center text-white px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />

      {/* Mountain silhouette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40vh] md:h-[45vh]
                   bg-no-repeat bg-bottom bg-center bg-cover opacity-40 pointer-events-none"
        style={{
          backgroundImage: "url('/trapper-peak.png')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          The Bitterroot Path Scholarship Hub
        </h1>

        <p className="text-lg md:text-xl text-zinc-300 mb-10">
          A local guide to Ravalli County scholarships for high school students,
          graduates, trade schools, certifications, and further education.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-row gap-6 justify-center items-center">
          {/* Browse button */}
          <Link
            href="/browse"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition"
          >
            Browse Scholarships
          </Link>

          {/* Login column */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs text-zinc-400">
              Feature coming soon
            </span>

            <Link
              href="/login"
              className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition"
            >
              Login to Personalize
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
