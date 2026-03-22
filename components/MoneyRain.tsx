"use client";

import { useEffect, useMemo, useState } from "react";

const dropCount = 20;
const animationName = "moneyRainFall";
const totalDuration = 2200;

const createDrops = () =>
  Array.from({ length: dropCount }, (_, index) => ({
    id: index,
    left: Math.random() * 110 - 5,
    delay: Math.random() * 0.6,
    duration: 1.8 + Math.random() * 0.8,
    scale: 0.85 + Math.random() * 0.6,
    rotation: Math.random() * 40 - 20,
    opacity: 0.65 + Math.random() * 0.35,
  }));

export default function MoneyRain() {
  const [active, setActive] = useState(true);
  const drops = useMemo(createDrops, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setActive(false), totalDuration);
    return () => window.clearTimeout(timer);
  }, []);

  if (!active) {
    return null;
  }

  return (
    <>
      <style jsx global>{`
        @keyframes ${animationName} {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 1;
          }
          60% {
            transform: translateY(50vh) rotate(12deg);
            opacity: 0.95;
          }
          90% {
            transform: translateY(70vh) rotate(18deg);
            opacity: 0.2;
          }
          100% {
            transform: translateY(75vh) rotate(25deg);
            opacity: 0;
          }
        }
      `}</style>
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 9999,
          overflow: "hidden",
        }}
      >
        {drops.map((drop) => (
          <span
            key={drop.id}
            style={{
              position: "absolute",
              top: "-15%",
              left: `${drop.left}%`,
              fontSize: `${(1.6 + drop.scale).toFixed(2)}rem`,
              fontWeight: 700,
              color: "#22c55e",
              textShadow: "0 8px 16px rgba(0, 0, 0, 0.65)",
              animation: `${animationName} ${drop.duration}s ease-in ${drop.delay}s forwards`,
              opacity: drop.opacity,
              transform: `rotate(${drop.rotation}deg)`,
            }}
          >
            $
          </span>
        ))}
      </div>
    </>
  );
}
