export default function Photo({ label, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-[#d9cdb4] via-[#c7b795] to-[#a8916b] ${className}`}
    >
      <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[radial-gradient(circle_at_30%_20%,#fff,transparent_35%),radial-gradient(circle_at_75%_70%,#000,transparent_45%)]" />
      {label && (
        <span className="absolute bottom-3 left-3 text-[10px] tracking-widest uppercase text-white/80 bg-black/25 px-2 py-1 rounded">
          {label}
        </span>
      )}
    </div>
  );
}
