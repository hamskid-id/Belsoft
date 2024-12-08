import { Coming } from "@/components/section/home/coming";
import { Faqs } from "@/components/section/home/faq";
import { Hero } from "@/components/section/home/hero";
import { Offers } from "@/components/section/home/offers";
import { Register } from "@/components/section/home/register";
import { Review } from "@/components/section/home/review";
import { Sponsor } from "@/components/section/home/sponsor";
import { WhatHappens } from "@/components/section/home/what-happens";
import { WhoAreWe } from "@/components/section/home/who-are-we";

export default function Home() {
  return (
    <>
      <Hero/>
      <WhoAreWe/>
      <Offers/>
      <WhatHappens/>
      <Sponsor/>
      <Coming/>
      <Register/>
      <Review/>
      <Faqs/>
    </>
  );
}
