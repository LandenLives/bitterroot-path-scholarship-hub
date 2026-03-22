import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import {
  getSchoolSpecificScholarship,
  getSchoolSpecificScholarships,
  normalizeSlug,
} from "@/lib/scholarships";

type PageParams = {
  slug: string;
};

export async function generateStaticParams() {
  const schools = await getSchoolSpecificScholarships();

  return schools
    .map((school) => normalizeSlug(school.slug))
    .filter((slug): slug is string => Boolean(slug))
    .map((slug) => ({ slug }));
}

export default async function SchoolSpecificScholarshipPage({
  params,
}: {
  params: PageParams;
}) {
  const requestedSlug = String(params?.slug ?? "");
  const normalizedSlug = normalizeSlug(requestedSlug);

  if (!normalizedSlug) {
    return notFound();
  }

  const scholarship = await getSchoolSpecificScholarship(normalizedSlug);

  if (!scholarship || normalizeSlug(scholarship.slug) !== normalizedSlug) {
    return notFound();
  }

  const destination = String(scholarship.applicationUrl ?? "").trim();

  if (scholarship.active && destination) {
    redirect(destination);
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-16">
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="space-y-2">
          <Link
            href="/browse/schools"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400 hover:text-white"
          >
            <span aria-hidden>←</span>
            School-Specific Scholarships
          </Link>
          <h1 className="text-3xl font-bold">
            {scholarship.title || "School Specific Scholarship"}
          </h1>
          <p className="text-zinc-400">
            No specific scholarships are available for this school.
          </p>
        </header>

        <section className="space-y-4 rounded-lg border border-zinc-800 bg-zinc-900 p-6">
          <p className="text-sm text-zinc-400">
            We found the slug{" "}
            <span className="font-medium text-white">{scholarship.slug}</span>{" "}
            in the sheet, which matches the URL you clicked.
          </p>
          <p className="text-sm text-zinc-500">
            {scholarship.active
              ? "The application link must be configured before we can redirect."
              : "This school-specific entry is currently inactive, so the details are parked for now."}
          </p>
          <div className="text-sm text-zinc-400">
            <p>
              Provider:{" "}
              <span className="text-white">
                {scholarship.providerName || scholarship.title}
              </span>
            </p>
            <p>
              Requested slug:{" "}
              <span className="text-white">{normalizedSlug}</span>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
