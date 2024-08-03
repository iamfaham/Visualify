'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Modal from '@/components/shared/Modal'; // Adjust the path as necessary
import { Collection } from '@/components/shared/Collections';
import { navLinks } from '@/constants';

const HomeClient = ({ images, totalPages, page }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Open the modal as soon as the component mounts
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      <section className='home'>
        <h1 className='home-heading'>Unleash your creativity with AI</h1>
        <ul className='flex-center w-full gap-20'>
          {navLinks.slice(1, 5).map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className='flex-center flex-col gap-2'
            >
              <li className='flex-center w-fit rounded-full bg-white p-4'>
                <Image src={link.icon} alt='image' width={24} height={24} />
              </li>
              <p className='p-14-medium text-center text-white'>{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>
      <section className='sm:mt-12'>
        <Collection
          images={images}
          totalPages={totalPages}
          page={page}
        />
      </section>
    </>
  );
};

export default HomeClient;
