import Image from "next/image";
import ContactCTA from "@/components/ContactCTA";

export const metadata = {
  title: "About | FTM Elite Services",
  description:
    "FTM Elite Services transforms residential real estate into high-performing hospitality assets through strategic development, professional operations, and long-term asset management.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 md:px-10 pt-14 pb-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] text-gold mb-3">ABOUT US</p>
            <h1 className="font-display text-4xl md:text-5xl leading-tight">
              Property Management with an Owner&apos;s Mindset
            </h1>
          </div>
          <div className="relative h-[280px] md:h-[340px] w-full">
            <Image
              src="/images/abuja/view05.jpg"
              alt="FTM Elite Services managed interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 md:px-10 pb-20 text-sm md:text-base text-stone leading-relaxed space-y-6">
          <p>
            Every successful hospitality asset begins with a clear vision,
            thoughtful execution, and a commitment to delivering exceptional
            guest experiences.
          </p>

          <p>
            The idea behind FTM Elite Services was born from the belief that
            residential properties can achieve far more when they are
            approached as hospitality assets rather than simply places to
            stay.
          </p>

          <p>
            Our founder&apos;s background in engineering developed a
            disciplined approach to problem-solving, project coordination,
            and execution, while his studies in business strengthened his
            understanding of entrepreneurship and value creation. Combined
            with firsthand exposure to professionally managed hospitality
            environments across Europe, these experiences shaped a clear
            understanding of what makes great properties memorable — not
            just through beautiful design, but through operational
            excellence and attention to detail.
          </p>

          <p>
            Driven by that vision, he returned to Nigeria to build a company
            focused on transforming residential real estate into
            high-performing hospitality assets. Beginning with the
            successful development and operation of the Company&apos;s
            first serviced residence, the business has since evolved into a
            hospitality asset management and development platform that
            helps property owners and investors maximise the value of
            their real estate through strategic development, professional
            operations, and long-term asset management.
          </p>

          <p>
            Today, we continue to apply the same philosophy to every
            project — combining thoughtful planning, disciplined execution,
            and exceptional hospitality to create spaces that perform for
            both guests and owners.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
