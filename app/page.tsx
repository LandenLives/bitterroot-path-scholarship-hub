import TownTicker from "./components/TownTicker";
import Link from "next/link";
import BrowseScholarshipsCta from "./components/BrowseScholarshipsCta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bitterroot Path Scholarship Hub | Ravalli County Scholarships",
  description:
    "Explore Ravalli County scholarships, Hamilton Montana scholarships, and Bitterroot Valley opportunities for graduating seniors and residents.",
  keywords: [
    "Ravalli County scholarships",
    "Hamilton Montana scholarships",
    "Bitterroot Valley scholarships",
  ],
  openGraph: {
    title: "Bitterroot Path Scholarship Hub",
    description:
      "Explore Ravalli County scholarships, Hamilton Montana scholarships, and Bitterroot Valley opportunities for graduating seniors and residents.",
    url: "https://bitterrootpath.org",
  },
};

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
      <div className="relative z-10 flex flex-col min-h-screen w-full px-4 sm:px-6">
        {/* HERO */}
        <section className="flex w-full min-h-[85vh] md:min-h-screen items-center justify-center px-2 py-10 sm:px-6">
          <div className="w-full max-w-[min(92vw,48rem)] text-center space-y-6 md:space-y-8 mx-auto">
            <TownTicker />

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              The Bitterroot Path Scholarship Hub
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-zinc-300 mb-6 md:mb-10 leading-relaxed max-w-[min(88vw,44rem)] mx-auto">
              A local scholarship database for students in Ravalli County: Darby, Hamilton, Corvallis, Stevensville, Victor, Florence, and the Bitterroot Valley of Montana. 
              Browse scholarships for high school seniors, graduates, trade schools, certifications, and further education.

              No account required.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:gap-6">
              <BrowseScholarshipsCta className="w-full sm:w-auto text-center bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition" />

              <div className="flex flex-col items-center w-full sm:w-auto text-center">
                <span className="mb-2 text-xs text-zinc-400">Feature coming soon</span>

                <Link
                  href="/login"
                  className="w-full sm:w-auto text-center border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition"
                >
                  Login to Personalize
                </Link>
              </div>

              <Link
                href="/about"
                className="w-full sm:w-auto text-center border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition"
              >
                About Us
              </Link>
            </div>

          </div>
        </section>

        {/* FADE INTO FOOTER */}
        <div className="h-40 bg-gradient-to-b from-transparent to-black" />
      </div>
    </main>
  );
}
