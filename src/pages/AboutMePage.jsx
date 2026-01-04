import React from "react";
import ProfileSection from "../components/organisms/ProfileSection";
import SkillsSection from "../components/organisms/SkillsSection";

export default function AboutMePage({ id }) {
  return (
    <section
      id={id}
      className="w-full min-h-screen py-2 gap-y-10  flex flex-col items-center justify-center">
      <div className="bg-brunswick-green-100/30 backdrop-blur-sm w-full flex flex-col items-center px-8  py-24">
        <ProfileSection />
      </div>
      <SkillsSection />
    </section>
  );
}
