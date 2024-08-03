import Link from 'next/link';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Visualify</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/sign-in">Sign in</Link></li>
              <li><Link href="/sign-up">Sign Up</Link></li>
              <li><Link href='/home'>Home</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow">
        <section className="bg-gray-800 text-white text-center py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4">Unleash Your Creativity with Imaginify</h2>
            <p className="mb-8">Transform your ideas into stunning visuals using our AI-powered tools.</p>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-12">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h4 className="text-2xl font-bold mb-2">Feature 1</h4>
                <p>Describe your first feature here.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h4 className="text-2xl font-bold mb-2">Feature 2</h4>
                <p>Describe your second feature here.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h4 className="text-2xl font-bold mb-2">Feature 3</h4>
                <p>Describe your third feature here.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-gray-100 py-20">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-12">About Us</h3>
            <p>Write something about your company here.</p>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-12">Contact Us</h3>
            <p>Provide your contact information here.</p>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>Project by Syed Mohammed Faham.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
