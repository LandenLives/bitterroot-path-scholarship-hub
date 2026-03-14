import Link from "next/link";
import TownTicker from "../components/TownTicker";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Ravalli County Scholarships | Bitterroot Path Scholarship Hub",
  description:
    "Learn how the Bitterroot Path Scholarship Hub supports Ravalli County, Hamilton, Stevensville, and Bitterroot Valley students with local funding.",
  keywords: [
    "Ravalli County scholarships",
    "Hamilton Montana scholarships",
    "Bitterroot Valley scholarships",
    "Stevensville scholarships",
    "Darby scholarships",
    "Victor scholarships",
    "Corvallis scholarships",
  ],
  alternates: {
    canonical: "https://bitterrootpath.org/about",
  },
  openGraph: {
    title: "About | Ravalli County Scholarships | Bitterroot Path Scholarship Hub",
    description:
      "Learn how the Bitterroot Path Scholarship Hub supports Ravalli County, Hamilton, Stevensville, and Bitterroot Valley students with local funding.",
    url: "https://bitterrootpath.org/about",
  },
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen text-white">
      <div className="fixed inset-0 bg-gradient-to-b from-black via-zinc-900 to-black -z-20" />

      <div
        className="fixed inset-0 bg-no-repeat bg-bottom bg-center bg-cover opacity-40 -z-10"
        style={{ backgroundImage: "url('/trapper-peak.png')" }}
      />

      <div className="relative z-10 flex flex-col min-h-screen px-6 py-12">
        <section className="flex min-h-screen flex-col items-center justify-center gap-6 text-center">
          <TownTicker />

          <h1 className="text-4xl md:text-6xl font-bold">
            Ravalli County Scholarships
          </h1>
          <p className="max-w-3xl text-lg md:text-xl text-zinc-300">
            The Bitterroot Path Scholarship Hub helps students across Ravalli
            County more easily find local scholarship opportunities in one
            place. It was created to reduce the friction of searching across
            scattered websites and to make scholarships more accessible for
            students pursuing college, trade school, certification programs, and
            further education.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/browse"
              className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition"
            >
              Browse Ravalli County Scholarships
            </Link>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8 text-left text-sm text-zinc-300 backdrop-blur-lg">
          <h2 className="text-xl font-semibold text-white">
            Why the Bitterroot Path exists
          </h2>
          <p className="mt-4 leading-relaxed">
            Created by Landen Conner, a Corvallis High School graduate now
            accepted to medical school debt-free. Built to simplify finding
            local scholarships in one place so more students can graduate
            debt-free.
          </p>
        </section>

        <div className="h-40 bg-gradient-to-b from-transparent to-black" />
      </div>
    </main>
  );
}
