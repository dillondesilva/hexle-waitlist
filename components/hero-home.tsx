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
        <div className="pb-4 pt-32 md:pt-40">
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
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Hexle streamlines your research workflow all the way <br/>
                from literature search to citation management, empowering you <br/>
                with the right AI tools to produce higher quality research
              </p>
              <Waitlist />
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.8),transparent)1]">
               
              </div>
            </div>
          </div>
          {/* Hero image */}
          {/* <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          > */}
            {/* <div className="relative transition-opacity ease-in duration-200 opacity-100 rounded-2xl px-5 py-3 before:pointer-events-none before:absolute before:-inset-5 before:border-y  after:absolute after:-inset-5 after:-z-10"> */}
              {/* <img src="images/hexleuidesigns.png" className="rounded-2xl shadow-2xl"></img> */}
              {/* <img src="images/visualisation.png" className="" /> */}
              {/* <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  cruip.com
                </span>
              </div>
              <div className="font-mono text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-200">
                  npm login
                </span>{" "}
                <span className="animate-[code-2_10s_infinite]">
                  --registry=https://npm.pkg.github.com
                </span>
                <br />
                <span className="animate-[code-3_10s_infinite]">
                  --scope=@phanatic
                </span>{" "}
                <span className="animate-[code-4_10s_infinite]">
                  Successfully logged-in.
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-gray-200">
                  npm publish
                </span>
                <br />
                <span className="animate-[code-6_10s_infinite]">
                  Package published.
                </span>
              </div> */}
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
