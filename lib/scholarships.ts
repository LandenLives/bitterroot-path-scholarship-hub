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

export async function getScholarships(): Promise<Scholarship[]> {
  const res = await fetch(
  "https://opensheet.elk.sh/19TS0og78hGhHj9t2uPC_ShYT3GL90Gw1wpXExQoiZE8/Scholarships",
  {
    next: { revalidate: 60 }, // 🔥 refresh every 1 minutes
  }
);
  if (!res.ok) {
    throw new Error("Failed to fetch scholarships");
  }

  const raw = await res.json();

return raw
  .filter(
  (row: any) =>
    row.slug &&
    row.title &&
    String(row.active || "TRUE").toUpperCase() === "TRUE"
)
  .map((row: any) => ({
    slug: String(row.slug).trim(),
    title: String(row.title).trim(),
    description: String(row.description || "").trim(),
    award: String(row.award || "Varies").trim(),

    educationPath: String(row.educationPath || "All").trim(),
    schoolType: String(row.schoolType || "All").trim(),
    communityService: String(row.communityService || "All").trim(),
    gpaRequirement: String(row.gpaRequirement || "All").trim(),

    providerName: String(row.providerName || "").trim(),
    providerWebsite: String(row.providerWebsite || "").trim(),

    applicationType:
      row.applicationType === "internal" ? "internal" : "external",

    applicationUrl: String(row.applicationUrl || "").trim(),
  }));

}

