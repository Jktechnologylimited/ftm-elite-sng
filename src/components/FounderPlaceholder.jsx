export default function FounderPlaceholder({ className = "" }) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-forest via-forest-dark to-ink ${className}`}
    >
      <svg
        viewBox="0 0 400 480"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="fpGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c9a663" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#b6903f" stopOpacity="0.6" />
          </linearGradient>
          <radialGradient id="fpGlow" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#3a4a3c" />
            <stop offset="100%" stopColor="#1a241d" />
          </radialGradient>
        </defs>

        <rect width="400" height="480" fill="url(#fpGlow)" />

        {/* thin gold frame */}
        <rect x="16" y="16" width="368" height="448" fill="none" stroke="#b6903f" strokeOpacity="0.35" strokeWidth="1" />

        {/* abstract bust silhouette */}
        <g fill="url(#fpGold)" fillOpacity="0.9">
          <circle cx="200" cy="190" r="70" />
          <path d="M80 480c0-90 54-150 120-150s120 60 120 150z" />
        </g>

        {/* monogram */}
        <text
          x="200"
          y="440"
          textAnchor="middle"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontSize="22"
          letterSpacing="6"
          fill="#f4f1ea"
          fillOpacity="0.85"
        >
          FTM
        </text>
      </svg>
    </div>
  );
}
