"use client";

import { useState, useEffect } from "react";
import type { Scholarship } from "@/lib/scholarships";
import { getScholarships } from "@/lib/scholarships";
import Link from "next/link";

export default function BrowseScholarships() {
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);

  useEffect(() => {
    getScholarships().then(setScholarships);
  }, []);

  // -----------------------------
  // Filter state (SAFE DEFAULTS)
  // -----------------------------
  const [educationPath, setEducationPath] = useState("All");
  const [schoolType, setSchoolType] = useState("All");
  const [communityService, setCommunityService] = useState("All");
  const [gpaRequirement, setGpaRequirement] = useState("All");

  // -----------------------------
  // Filtering logic (CORRECT)
  // -----------------------------
  const filteredScholarships = scholarships.filter((s) => {
    // Education / school filters
    if (
      (educationPath !== "All" && s.educationPath !== educationPath) ||
      (schoolType !== "All" && s.schoolType !== schoolType)
    ) {
      return false;
    }

    // Community involvement
    if (communityService !== "All") {
      if (!s.communityService || s.communityService === "Not Required") {
        return true;
      }
      if (s.communityService !== communityService) {
        return false;
      }
    }

    // GPA filtering
    if (gpaRequirement === "All") {
      return true;
    }

    const sheetGpa = (s.gpaRequirement || "").trim();

    // Scholarships without GPA requirement always show
    if (!sheetGpa || sheetGpa === "No Minimum") {
      return true;
    }

    return sheetGpa === gpaRequirement;
  });

  // -----------------------------
  // JSX
  // -----------------------------
  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Browse Local Scholarships
        </h1>
        <p className="text-zinc-400 mb-12">
          Explore scholarship opportunities available to students and residents
          of Ravalli County. No account required.
        </p>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <select
            value={educationPath}
            onChange={(e) => setEducationPath(e.target.value)}
            className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3"
          >
            <option value="All">Education Path</option>
            <option value="High School">High School</option>
            <option value="College">College</option>
            <option value="Trade School">Trade School</option>
            <option value="Graduate School">Graduate School</option>
            <option value="Other">Other</option>
          </select>

          <select
            value={schoolType}
            onChange={(e) => setSchoolType(e.target.value)}
            className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3"
          >
            <option value="All">School Type</option>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
            <option value="Other">Other</option>
          </select>

          <select
            value={communityService}
            onChange={(e) => setCommunityService(e.target.value)}
            className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3"
          >
            <option value="All">Community Involvement</option>
            <option value="Required">Required</option>
            <option value="Preferred">Preferred</option>
            <option value="Not Required">Not Required</option>
          </select>

          <select
            value={gpaRequirement}
            onChange={(e) => setGpaRequirement(e.target.value)}
            className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3"
          >
            <option value="All">GPA Requirement</option>
            <option value="2.5+">2.5+</option>
            <option value="3.0+">3.0+</option>
            <option value="3.5+">3.5+</option>
            <option value="4.0">4.0</option>
          </select>
        </div>

        {/* Scholarship cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScholarships.length === 0 && (
            <p className="text-zinc-400">
              No scholarships match your current filters.
            </p>
          )}

          {filteredScholarships.map((scholarship) => (
            <div
              key={scholarship.slug}
              className="border border-zinc-800 rounded-lg p-6 bg-zinc-900"
            >
              <h3 className="text-lg font-semibold mb-2">
                {scholarship.title}
              </h3>

              {scholarship.description && (
                <p className="text-sm text-zinc-400 mb-2">
                  {scholarship.description}
                </p>
              )}

              {scholarship.award && (
                <div className="text-sm text-zinc-300 mb-4">
                  Award: {scholarship.award}
                </div>
              )}

              {scholarship.applicationType === "external" ? (
                <a
                  href={scholarship.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium underline"
                >
                  Apply on organization website →
                </a>
              ) : (
                <Link
                  href={`/scholarships/${scholarship.slug}`}
                  className="inline-block text-sm font-medium underline"
                >
                  View details →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
