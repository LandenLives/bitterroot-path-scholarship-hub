// lib/scholarships.ts

export type Scholarship = {
  active: boolean;
  slug: string;
  title: string;
  description: string;
  award: string;

  educationPath: string;
  schoolType: string;
  communityService: string;
  gpaRequirement: string;

  providerName: string;
  providerWebsite: string;
  applicationUrl: string;
  applicationType: "internal" | "external";
};

const SHEET_URL =
  "https://opensheet.elk.sh/19TS0og78hGhHj9t2uPC_ShYT3GL90Gw1wpXExQoiZE8/Scholarships";

const normalizeScholarship = (row: Record<string, unknown>): Scholarship => {
  const active = String(row.active ?? "TRUE").trim().toUpperCase() === "TRUE";
  const title = String(row.title ?? "").trim();
  const slug = String(row.slug ?? "").trim().toLowerCase();

  return {
    active,
    slug,
    title,
    description: String(row.description ?? "").trim(),
    award: String(row.award ?? "Varies").trim(),
    educationPath: String(row.educationPath ?? "All").trim(),
    schoolType: String(row.schoolType ?? "All").trim(),
    communityService: String(row.communityService ?? "All").trim(),
    gpaRequirement: String(row.gpaRequirement ?? "All").trim(),
    providerName: String(row.providerName ?? "").trim(),
    providerWebsite: String(row.providerWebsite ?? "").trim(),
    applicationUrl: String(row.applicationUrl ?? "").trim(),
    applicationType: row.applicationType === "internal" ? "internal" : "external",
  };
};

const fetchRawScholarships = async (): Promise<Record<string, unknown>[]> => {
  const res = await fetch(SHEET_URL, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch scholarships");
  }

  const data = await res.json();
  return data as Record<string, unknown>[];
};

export const SCHOOL_SPECIFIC_SLUGS = [
  "darby-school-specific",
  "hamilton-school-specific",
  "corvallis-school-specific",
  "victor-school-specific",
  "stevensville-school-specific",
  "florence-carlton-school-specific",
  "lolo-school-specific",
] as const;

export async function getScholarships(): Promise<Scholarship[]> {
  const raw = await fetchRawScholarships();

  return raw
    .map(normalizeScholarship)
    .filter((scholarship) => scholarship.slug && scholarship.title && scholarship.active);
}

export async function getSchoolSpecificScholarships(): Promise<Scholarship[]> {
  const raw = await fetchRawScholarships();

  const mapped = raw
    .map(normalizeScholarship)
    .filter((scholarship) => scholarship.slug && scholarship.title);

  const lookup = new Map(
    mapped.map((scholarship) => [scholarship.slug.toLowerCase(), scholarship])
  );

  return SCHOOL_SPECIFIC_SLUGS.map((slug) => lookup.get(slug)).filter(
    (value): value is Scholarship => Boolean(value)
  );
}

export async function getSchoolSpecificScholarship(
  slug: string
): Promise<Scholarship | null> {
  const schools = await getSchoolSpecificScholarships();
  const normalized = slug.trim().toLowerCase();
  return schools.find((school) => school.slug.toLowerCase() === normalized) ?? null;
}

