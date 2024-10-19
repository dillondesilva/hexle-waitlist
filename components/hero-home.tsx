"use client"
import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Waitlist from "./waitlist";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className=" pt-32 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
           
            <h1
              className="mb-6 text-5xl font-bold md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Search, read and <br className="max-lg:hidden" />
              cite papers smarter
              
            </h1>
            <div className="mx-auto max-w-3xl pt-2">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Hexle streamlines your research workflow all the way from literature search to citation management, empowering you with the right AI tools to produce higher quality research
              </p>
              <Waitlist />
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.violet.400/.8),transparent)1]">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
