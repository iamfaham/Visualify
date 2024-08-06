import React, { FC } from 'react';
import LandingHeader from '@/components/shared/LandingHeader';
import LandingFooter from '@/components/shared/LandingFooter';
import LandingHero from '@/components/shared/LandingHero';
import LandingAbout from '@/components/shared/LandingAbout';
import LandingFeatures from '@/components/shared/LandingFeatures';


const Home: FC = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <LandingHeader />
      <main className="flex-grow pt-20 ">
        <LandingHero />
        <LandingFeatures />
        <LandingAbout />
      </main>
      <LandingFooter />
    </div>
  );
};

export default Home;
