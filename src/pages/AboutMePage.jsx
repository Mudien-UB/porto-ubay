import React from 'react';
import ProfileSection from '../components/organisms/ProfileSection';
import SkillsSection from '../components/organisms/SkillsSection';

export default function AboutMePage({ id }) {

  return (
    <section
      id={id}
      className="w-full min-h-screen py-24 gap-y-10 px-8 bg-brunswick-green-100/30 backdrop-blur-sm flex flex-col items-center justify-center"
    >
      <ProfileSection />
      <SkillsSection />
    </section>
  );
}
