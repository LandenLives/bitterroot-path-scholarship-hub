import Link from "next/link";
// other imports can stay here
export default function ScholarshipPage({
  params,
}: {
  params: { slug: string };
}) {
  // Temporary mock data (later replaced by Supabase)
  const scholarship = {
    title: "Bitterroot Valley Community Scholarship",
    description:
      "This scholarship supports students and residents of Ravalli County pursuing college, trade school, or certification programs.",
    eligibility: [
      "Resident of Ravalli County",
      "Graduating high school senior or graduate",
      "Pursuing further education or training",
    ],
    award: "$1,000",
    deadline: "April 15",
    organization: "Bitterroot Valley Community Foundation",
    website: "https://example.org",
    contact: "info@example.org",
  };

  return (
  <main className="min-h-screen bg-zinc-950 text-white px-6 py-16">
    <div className="max-w-3xl mx-auto">

      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        {scholarship.title}
      </h1>

      <p className="text-zinc-300 mb-10">
        {scholarship.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <div>
          <div className="text-zinc-400 text-sm mb-1">Award Amount</div>
          <div className="text-lg font-medium">{scholarship.award}</div>
        </div>

        <div>
          <div className="text-zinc-400 text-sm mb-1">Application Deadline</div>
          <div className="text-lg font-medium">{scholarship.deadline}</div>
        </div>
      </div>

      {/* ✅ THIS div MUST wrap the h2 AND the list */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          Eligibility
        </h2>

        <ul className="list-disc list-inside text-zinc-300 space-y-2">
          {scholarship.eligibility.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="border border-zinc-800 rounded-xl p-6 bg-zinc-900 mb-10">
        <div className="text-zinc-400 text-sm mb-1">Scholarship Provider</div>
        <div className="text-lg font-medium mb-2">
          {scholarship.organization}
        </div>
        <div className="text-zinc-400 text-sm">
          Contact: {scholarship.contact}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={scholarship.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-lg bg-white text-black font-semibold text-center hover:bg-zinc-200 transition"
        >
          Visit Official Scholarship Page
        </a>

        <a
          href="/browse"
          className="inline-block px-8 py-4 rounded-lg border border-white font-semibold text-center hover:bg-white hover:text-black transition"
        >
          Back to Browse
        </a>
      </div>

    </div>
  </main>
);
}

