import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ravalli County Scholarships | Bitterroot Path Scholarship Hub",
  description:
    "Discover scholarships tailored to Ravalli County, Hamilton, Stevensville, Darby, Victor, and Corvallis students through the Bitterroot Path Scholarship Hub.",
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
    canonical: "https://bitterrootpath.org/ravalli-county-scholarships",
  },
  openGraph: {
    title: "Ravalli County Scholarships | Bitterroot Path Scholarship Hub",
    description:
      "Discover scholarships tailored to Ravalli County, Hamilton, Stevensville, Darby, Victor, and Corvallis students through the Bitterroot Path Scholarship Hub.",
    url: "https://bitterrootpath.org/ravalli-county-scholarships",
  },
};

const scholarshipSections = [
  {
    title: "Ravalli County Scholarships",
    body:
      "Ravalli County scholarships reward neighborhood leadership, community service, and academic resilience. Seek funds from the Bitterroot Lions, county education foundations, and local service clubs that collaborate with the Bitterroot Path Scholarship Hub.",
  },
  {
    title: "Hamilton Scholarships",
    body:
      "Hamilton Montana scholarships often target Hamilton High graduates pursuing trade school, college, or gap-year apprenticeships. Watch for opportunities through the Hamilton Education Foundation, library friend groups, and the Bitterroot Community Grants.",
  },
  {
    title: "Stevensville Scholarships",
    body:
      "Stevensville scholarships honor the valley's agricultural heritage, outdoor leadership, and the arts. Local boosters, the Stevensville Chamber, and alumni circles fund scholarships for graduates continuing studies or craft careers.",
  },
  {
    title: "Darby Scholarships",
    body:
      "Darby scholarships celebrate grit and stewardship of the Bitterroot National Forest corridor. The Darby Education Trust and local scholarship committees highlight forestry, conservation, and first-responder studies.",
  },
  {
    title: "Victor Scholarships",
    body:
      "Victor scholarships reward students who stay rooted in the Bitterroot Valley. The Victor School District, Rotary Club, and farm families sponsor scholarships for residents headed to college, certifications, or adventure programs.",
  },
  {
    title: "Corvallis Scholarships",
    body:
      "Corvallis scholarships support students from the valley's northern rim. Corvallis High alumni, community foundations, and the Bitterroot Path Scholarship Hub spotlight donations for students studying health care, education, conservation, and trades.",
  },
];

export default function RavalliCountyScholarships() {
  return (
    <main className="relative min-h-screen text-white">
      <div className="fixed inset-0 bg-gradient-to-b from-black via-zinc-900 to-black -z-20" />

      <div
        className="fixed inset-0 bg-no-repeat bg-bottom bg-center bg-cover opacity-40 -z-10"
        style={{ backgroundImage: "url('/trapper-peak.png')" }}
      />

      <div className="relative z-10 flex flex-col min-h-screen px-6 py-12">
        <section className="flex min-h-screen flex-col items-center justify-center gap-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
            Ravalli County · Hamilton · Bitterroot Valley
          </p>
          <h1 className="text-4xl md:text-6xl font-bold">
            Ravalli County Scholarships
          </h1>
          <p className="max-w-3xl text-lg md:text-xl text-zinc-300">
            The Bitterroot Path Scholarship Hub curates scholarships for every
            valley town. Explore tailored opportunities for Hamilton,
            Stevensville, Darby, Victor, and Corvallis students who want to
            stay local, study the outdoors, or travel beyond the mountains.
          </p>

          <Link
            href="/"
            className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition"
          >
            Back to Home
          </Link>
        </section>

        <section className="grid gap-6 py-10 md:grid-cols-2">
          {scholarshipSections.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur"
            >
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <p className="mt-3 text-sm text-zinc-200">{section.body}</p>
            </article>
          ))}
        </section>

        <div className="h-40 bg-gradient-to-b from-transparent to-black" />
      </div>
    </main>
  );
}
