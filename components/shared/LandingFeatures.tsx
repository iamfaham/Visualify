import React from 'react';

const LandingFeatures = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center">Features</h3>
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img src="/path/to/feature1-image.jpg" alt="Feature 1" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2">
              <h4 className="text-2xl font-bold mb-2">Generative Fill</h4>
              <p>Use AI to fill in missing parts of your images seamlessly. Whether it&apos;s removing unwanted elements or extending backgrounds, our generative fill makes it look natural.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <img src="/path/to/feature2-image.jpg" alt="Feature 2" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2">
              <h4 className="text-2xl font-bold mb-2">Object Removal</h4>
              <p>Remove unwanted objects from your photos effortlessly. Our object removal tool uses AI to fill in the gaps perfectly, making it seem like the object was never there.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img src="/path/to/feature3-image.jpg" alt="Feature 3" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2">
            <h4 className="text-2xl font-bold mb-2">Object Recolor</h4>
            <p>Easily change the color of any object in your images with our AI-powered recoloring tool. Perfect for visualizing design changes or simply experimenting with new looks.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <img src="/path/to/feature4-image.jpg" alt="Feature 4" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2">
              <h4 className="text-2xl font-bold mb-2">Image Restore</h4>
              <p>Bring old and damaged photos back to life with our advanced image restoration feature. Remove scratches, enhance details, and revive your cherished memories.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFeatures;
