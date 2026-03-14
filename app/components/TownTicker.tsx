const towns = [
  "Darby",
  "Hamilton",
  "Corvallis",
  "Victor",
  "Stevensville",
  "Florence",
  "Lolo",
];

const tickerText = towns.join(" • ");

export default function TownTicker() {
  return (
    <div className="w-full max-w-3xl">
      <div className="marquee-wrapper mb-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.45em] text-zinc-400">
        <div className="marquee-track">
          {[0, 1].map((repeat) => (
            <span key={repeat} className="mr-8">
              {tickerText}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
