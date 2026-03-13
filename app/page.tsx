import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      {/* =========================
          FIXED BACKGROUND LAYERS
         ========================= */}

      {/* Base gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-zinc-900 to-black -z-20" />

      {/* Mountain silhouette */}
      <div
        className="fixed inset-0 bg-no-repeat bg-bottom bg-center bg-cover opacity-40 -z-10"
        style={{ backgroundImage: "url('/trapper-peak.png')" }}
      />

      {/* =========================
          PAGE CONTENT (SCROLLS)
         ========================= */}
      <div className="relative z-10 flex flex-col min-h-screen px-6">
        {/* HERO */}
        <section className="flex min-h-screen items-center justify-center">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Bitterroot Path Scholarship Hub
            </h1>

            <p className="text-lg md:text-xl text-zinc-300 mb-10">
              A local database of Ravalli County, Montana scholarships for high school students,
              graduates, trade schools, certifications, and further education.
              No account required.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex justify-center gap-6">
              <Link
                href="/browse"
                className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition"
              >
                Browse Scholarships
              </Link>

              <div className="relative flex flex-col items-center">
                <span className="absolute bottom-full mb-2 text-xs text-zinc-400">
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
        </section>

        {/* FADE INTO FOOTER */}
        <div className="h-40 bg-gradient-to-b from-transparent to-black" />
      </div>
    </main>
  );
}
