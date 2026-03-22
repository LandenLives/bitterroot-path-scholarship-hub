"use client";

import Link from "next/link";
import { useCallback } from "react";

import { MONEY_RAIN_TRIGGER_KEY } from "@/lib/moneyRain";

const hapticPattern = 32;

export default function BrowseScholarshipsCta({
  className,
}: {
  className?: string;
}) {
  const handleClick = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      window.sessionStorage.setItem(
        MONEY_RAIN_TRIGGER_KEY,
        Date.now().toString()
      );
    } catch {
      // Session storage may be readonly; fail silently.
    }

    const nav = window.navigator as Navigator & {
      vibrate?: (pattern: number | number[]) => void;
    };

    if (nav?.vibrate) {
      nav.vibrate(hapticPattern);
    }
  }, []);

  return (
    <Link
      href="/browse"
      className={className}
      onClick={handleClick}
      aria-label="Navigate to browse scholarships"
    >
      Browse Scholarships
    </Link>
  );
}
