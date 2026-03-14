import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://bitterrootpath.org"),
  title: "Bitterroot Path Scholarship Hub",
  description:
    "A local database of Ravalli County scholarships for students and residents.",
  openGraph: {
    title: "Bitterroot Path Scholarship Hub",
    description:
      "A local database of Ravalli County scholarships for students and residents.",
    url: "https://bitterrootpath.org",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white" suppressHydrationWarning>
        {children}

        {/* SITE-WIDE FOOTER */}
        <footer className="relative z-10 border-t border-zinc-800 py-8 text-center text-sm text-zinc-300 bg-black/80 backdrop-blur-md">
          <p className="font-medium text-zinc-200">
            Bitterroot Path Scholarship Hub
          </p>

          <p className="mt-1">
            Questions or updates? Contact us at{" "}
            <a
              href="mailto:rclanden7@gmail.com"
              className="underline hover:text-white"
            >
              rclanden7@gmail.com
            </a>
          </p>

          <p className="mt-2 text-xs text-zinc-400">
            Helping Ravalli County students find local scholarship opportunities.
          </p>
          <p className="mt-3 text-xs text-zinc-500">
           © {new Date().getFullYear()} Bitterroot Path Scholarship Hub
          </p>
        </footer>
      </body>
    </html>
  );
}
