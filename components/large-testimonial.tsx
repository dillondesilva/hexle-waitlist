"use client";
import Image from "next/image";
import TestimonialImg from "@/public/images/large-testimonial.jpg";
import ScrollToTop from "./scrollTop";

export default function LargeTestimonial() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center transition-opacity ease-in duration-1200 opacity-100">
            <h1 className="text-3xl font-bold">We are a dedicated, small team based in Sydney, Australia</h1>
            <p>Frustrated with current research tools, we are building better solutions to help researchers focus on their work, not the software.</p>
            <br />
            <strong>Join our waitlist and we will let you know when Hexle is available for use!</strong>
            <ScrollToTop />
            <p>Feel free to get in touch at <a href="mailto:hexleteam@gmail.com" className="link link-primary">hexleteam@gmail.com</a></p>
            <img src="images/visualisation.png"></img>
          </div>
        </div>
      </div>
    </section>
  );
}
