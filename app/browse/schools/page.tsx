import Link from "next/link";

import { getSchoolSpecificScholarships } from "@/lib/scholarships";

const cardBaseClasses =
  "border border-zinc-800 rounded-lg p-6 bg-zinc-900 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500";

export default async function SchoolSpecificScholarshipsPage() {
  const schools = await getSchoolSpecificScholarships();

  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-col gap-2">
          <Link
            href="/browse"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400 hover:text-white"
          >
            <span aria-hidden>←</span>
            Back to Browse Local Scholarships
          </Link>
          <h1 className="text-3xl font-bold">School-Specific Scholarships</h1>
          <p className="text-zinc-400 max-w-3xl">
            Local schools often maintain their own scholarship lists. Tap below
            to visit the school’s official application page or view the latest
            updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {schools.map((school) => {
            const content = (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">{school.title}</h2>
                  <span className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                    School
                  </span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {school.description ||
                    "Check scholarships or apply on the school website."}
                </p>
                {school.award && (
                  <p className="text-sm text-zinc-300">
                    Award: {school.award}
                  </p>
                )}
                <p className="text-xs text-zinc-500">
                  {school.providerName || school.title}
                </p>
              </div>
            );

            if (school.active) {
              return (
                <a
                  key={school.slug}
                  href={school.applicationUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardBaseClasses}
                >
                  {content}
                  <p className="text-xs text-sky-400">Opens external link</p>
                </a>
              );
            }

            return (
              <Link key={school.slug} href={`/browse/schools/${school.slug}`} className={cardBaseClasses}>
                {content}
                <p className="text-xs text-zinc-500">
                  Planned page updates will appear here soon.
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}


