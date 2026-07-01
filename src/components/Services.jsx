const SERVICES = [
  {
    title: "Property Management",
    desc: "End-to-end management that ensures seamless day-to-day operations.",
    icon: (
      <path d="M4 12L12 5l8 7M6 10v9h12v-9" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Residential Setup",
    desc: "Creating functional, market-ready spaces designed to perform.",
    icon: (
      <>
        <path d="M5 19V9l4-2 4 2v10" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 19v-6l4-2v8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Hospitality Operations",
    desc: "Delivering exceptional guest experiences through efficient operations.",
    icon: (
      <path d="M4 15h16M8 15V9a4 4 0 118 0v6M6 19h12" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Project Coordination",
    desc: "Managing every detail from planning through execution.",
    icon: (
      <>
        <rect x="6" y="4" width="12" height="16" rx="1" strokeWidth="1.4" />
        <path d="M9 9h6M9 13h6M9 17h3" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Asset Optimization",
    desc: "Improving performance and maximizing the value of your assets.",
    icon: (
      <path d="M4 17l5-5 4 4 7-8M20 8v5h-5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20">
        <p className="text-xs tracking-[0.2em] text-gold mb-3">OUR SERVICES</p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-12">
          {SERVICES.map((s) => (
            <div key={s.title} className="text-center px-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-9 h-9 mx-auto mb-4 text-ink"
              >
                {s.icon}
              </svg>
              <h3 className="font-display text-xl mb-2">{s.title}</h3>
              <p className="text-sm text-stone leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
