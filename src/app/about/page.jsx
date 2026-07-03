import Image from "next/image";
import ContactCTA from "@/components/ContactCTA";
import FounderPlaceholder from "@/components/FounderPlaceholder";
import {
  FaDraftingCompass,
  FaConciergeBell,
  FaChartLine,
  FaBuilding,
  FaHome,
  FaClipboardList,
  FaChartPie,
  FaUserTie,
  FaStar,
  FaHandshake,
} from "react-icons/fa";
import { MdChair } from "react-icons/md";

export const metadata = {
  title: "About | FTM Elite Services",
  description:
    "FTM Elite Services transforms residential real estate into high-performing hospitality assets through strategic development, professional operations, and long-term asset management.",
};

const APPROACH = [
  {
    icon: FaDraftingCompass,
    title: "Engineering Precision",
    desc: "We approach every project with careful planning, technical discipline, and structured execution.",
  },
  {
    icon: FaConciergeBell,
    title: "Hospitality Excellence",
    desc: "Every decision is made with the guest experience in mind — from layout and lighting to operations and service.",
  },
  {
    icon: FaChartLine,
    title: "Commercial Performance",
    desc: "We create spaces that are not only beautiful but designed to maximise occupancy, protect asset value, and generate sustainable returns.",
  },
];

const WHAT_WE_DO = [
  {
    icon: FaBuilding,
    title: "Hospitality Asset Development",
    desc: "We transform residential properties into high-performing hospitality assets.",
  },
  {
    icon: FaHome,
    title: "Property Management",
    desc: "We protect your investment and ensure your property performs over time.",
  },
  {
    icon: FaConciergeBell,
    title: "Hospitality Operations",
    desc: "We handle day-to-day operations to deliver exceptional guest experiences.",
  },
  {
    icon: MdChair,
    title: "Residential Setup & Space Planning",
    desc: "We design and furnish spaces that are functional, beautiful, and commercially viable.",
  },
  {
    icon: FaClipboardList,
    title: "Project Coordination",
    desc: "We manage every detail from planning to completion with precision.",
  },
  {
    icon: FaChartPie,
    title: "Asset Optimisation",
    desc: "We continuously analyse performance and implement strategies for growth.",
  },
];

const WHY_US = [
  {
    icon: FaUserTie,
    title: "We Think Like Owners",
    desc: "Every recommendation is made with long-term asset value and profitability in mind.",
  },
  {
    icon: FaBuilding,
    title: "We Build Before We Manage",
    desc: "Our experience in development allows us to understand the details that influence operational performance.",
  },
  {
    icon: FaStar,
    title: "Hospitality Comes First",
    desc: "Beautiful spaces matter, but seamless guest experiences are what create repeat business and strong reviews.",
  },
  {
    icon: FaHandshake,
    title: "We Stay Involved",
    desc: "From planning and setup to day-to-day operations, we remain actively involved throughout the lifecycle of every property.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <Image
          src="/images/oniru/view02.jpg"
          alt="FTM Elite Services managed living room"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10 pb-14 w-full text-cream">
          <p className="text-xs tracking-[0.2em] text-gold-light mb-3">ABOUT US</p>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.1] max-w-2xl">
            Building Hospitality Assets. Creating Long-Term Value.
          </h1>
          <p className="text-sm text-cream/85 leading-relaxed max-w-md mt-4">
            We transform residential real estate into high-performing
            hospitality assets through development, operations, and
            long-term asset management.
          </p>
          <div className="w-16 h-px bg-gold my-6" />
        </div>
      </section>

      {/* Who we are / Our approach */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.2em] text-gold mb-3">WHO WE ARE</p>
            <div className="text-sm text-stone leading-relaxed space-y-4">
              <p>
                FTM Elite Services is a hospitality asset management and
                development company dedicated to transforming residential
                properties into professionally managed hospitality assets
                that deliver exceptional guest experiences and strong
                investment returns.
              </p>
              <p>
                Our approach combines engineering discipline, business
                strategy, and practical hospitality experience. From project
                development to daily operations and long-term asset
                management, we oversee the entire lifecycle of every property
                with one goal in mind — to maximise value for our clients
                while maintaining the highest standards of hospitality.
              </p>
              <p>
                Every space we create is thoughtfully designed, expertly
                managed, and built to perform.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-gold mb-3">OUR APPROACH</p>
            <div className="grid sm:grid-cols-3 gap-8">
              {APPROACH.map((item) => (
                <div key={item.title}>
                  <item.icon className="w-7 h-7 text-gold mb-4" />
                  <h3 className="font-display text-lg mb-2">{item.title}</h3>
                  <p className="text-xs text-stone leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the founder */}
      <section className="bg-cream-dark">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[380px] md:h-[440px] w-full">
            <FounderPlaceholder className="absolute inset-0 h-full w-full" />
            <span className="absolute bottom-3 left-3 text-[10px] tracking-widest uppercase text-cream/70 bg-black/25 px-2 py-1 rounded">
              Founder photo coming soon
            </span>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-gold mb-3">MEET THE FOUNDER</p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4">
              Driving Vision. Delivering Excellence.
            </h2>
            <div className="text-sm text-stone leading-relaxed space-y-4 mb-6">
              <p>
                FTM Elite Services was founded on a belief that residential
                properties can achieve far more when they are approached as
                hospitality assets rather than simply places to stay. Our
                founder&apos;s background combines engineering, business, and
                practical hospitality operations.
              </p>
              <p>
                His experience spans residential development, project
                execution, and hospitality management, shaped by
                international exposure and a commitment to creating
                high-performing hospitality assets.
              </p>
              <p>
                Today, he leads every project with a hands-on approach,
                ensuring each property is thoughtfully developed,
                professionally managed, and positioned for long-term success.
              </p>
            </div>
            <p className="font-display text-xl mb-1">Tosin Adebusola</p>
            <p className="text-xs tracking-widest text-stone uppercase">Founder &amp; Managing Director</p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-16">
          <p className="text-xs tracking-[0.2em] text-gold mb-3">WHAT WE DO</p>
          <h2 className="font-display text-3xl md:text-4xl mb-10">
            End-to-end solutions for hospitality assets.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-12">
            {WHAT_WE_DO.map((item) => (
              <div key={item.title} className="text-center px-2">
                <item.icon className="w-8 h-8 mx-auto mb-4 text-ink" />
                <h3 className="font-display text-lg mb-2">{item.title}</h3>
                <p className="text-xs text-stone leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why clients choose us */}
      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-16">
          <p className="text-xs tracking-[0.2em] text-gold-light mb-3">THE FTM DIFFERENCE</p>
          <h2 className="font-display text-3xl md:text-4xl mb-10">Why Clients Choose Us</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {WHY_US.map((item) => (
              <div key={item.title} className="border-l border-cream/20 pl-6">
                <item.icon className="w-6 h-6 text-gold-light mb-4" />
                <h3 className="font-display text-lg mb-2">{item.title}</h3>
                <p className="text-xs text-cream/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
