import React, { FC } from 'react';
import LandingHeader from '@/components/shared/LandingHeader';
import LandingFooter from '@/components/shared/LandingFooter';

const Home: FC = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <LandingHeader />
      <main className="flex-grow">
        <section
          className="text-white text-center py-20"
         >
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4">Unleash Your Creativity with Imaginify</h2>
            <p className="mb-8">Transform your ideas into stunning visuals using our AI-powered tools.</p>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center">Features</h3>
            <div className="space-y-16">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <img src="/path/to/feature1-image.jpg" alt="Feature 1" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
                <div className="md:w-1/2">
                  <h4 className="text-2xl font-bold mb-2">Feature 1</h4>
                  <p>Describe your first feature here. Explain how it benefits the user and what makes it stand out.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2">
                  <img src="/path/to/feature2-image.jpg" alt="Feature 2" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
                <div className="md:w-1/2">
                  <h4 className="text-2xl font-bold mb-2">Feature 2</h4>
                  <p>Describe your second feature here. Highlight the unique aspects and advantages of this feature.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <img src="/path/to/feature3-image.jpg" alt="Feature 3" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
                <div className="md:w-1/2">
                  <h4 className="text-2xl font-bold mb-2">Feature 3</h4>
                  <p>Describe your third feature here. Emphasize its importance and how it enhances the overall user experience.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2">
                  <img src="/path/to/feature4-image.jpg" alt="Feature 4" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
                <div className="md:w-1/2">
                  <h4 className="text-2xl font-bold mb-2">Feature 4</h4>
                  <p>Describe your fourth feature here. Explain its value proposition and how it complements the other features.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-gray-100 py-20">
          <div className="container mx-auto text-center w-7/12">
            <h3 className="text-3xl font-bold mb-6">About the project</h3>
            <p className="text-center text-lg">
              Welcome to Visualify, a personal project created by Syed Mohammed Faham. Built with cutting-edge AI technologies and modern web development tools, including Next.js, Tailwind CSS, and Cloudinary SDK, Visualify is designed to push the boundaries of image editing. This project leverages advanced AI algorithms to enhance and transform images, providing powerful editing capabilities and innovative features. Thank you for exploring Visualify! I hope you enjoy your time here.
            </p>
          </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
};

export default Home;
