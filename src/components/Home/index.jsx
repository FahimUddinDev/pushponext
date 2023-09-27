"use client";
import React from "react";
import Hero from "@/src/components/Home/Hero";
import AboutSection from "@/src/components/Home/AboutSection";
import AboutSectionTwo from "@/src/components/Home/AboutSectionTwo";
import KathaSection from "@/src/components/Home/KathaSection";
import GrowingSection from "@/src/components/Home/GrowingSection";
import ProjectSection from "@/src/components/Home/ProjectSection";
import FacilitiesSection from "@/src/components/Home/FacilitiesSection";
import AgencySection from "@/src/components/Home/AgencySection";
import TestimonialSection from "@/src/components/Home/TestimonialSection";
import FunFactSection from "@/src/components/Home/FunFactSection";
import FaqSection from "@/src/components/Home/FaqSection";
import BlogSection from "@/src/components/Home/BlogSection";
import FooteOne from "@/src/components/Partials/Footers/FooteOne";

function Index({ homePage }) {
  const {
    intro,
    counters,
    projects,
    service,
    grows,
    katha,
    gallery,
    facility,
    facility_details,
    teams,
    testimonials,
    faqs,
    blogs,
  } = homePage;
  return (
    <>
      <div>
        <Hero
          heading={intro.title}
          headingTwo={intro.details}
          counters={counters}
          videoKey={intro.url}
          videoThumb={intro.image}
        />
        <AboutSection projects={projects} />
        <AboutSectionTwo service={service} />
        <KathaSection katha={katha} />
        <GrowingSection grows={grows} />
        <ProjectSection gallery={gallery} />
        <FacilitiesSection
          facility={facility}
          facility_details={facility_details}
        />
        <AgencySection teams={teams} />
        <TestimonialSection testimonials={testimonials} />
        <FunFactSection />
        <FaqSection faqs={faqs} />
        <BlogSection blogs={blogs} />
        <FooteOne />
      </div>
    </>
  );
}

export default Index;
