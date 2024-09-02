'use client'
import React, { useState, useCallback } from 'react';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import { testimonials } from '@/lib/const';
import Heading from '../Heading';
import TestimonialCard from '../TestimonialsCard';



const Testimonials = () => {
  const [offset, setOffset] = useState(0);
  const maxOffset = (testimonials.length - 3) * 30; // Assuming 3 visible items

  const handleScroll = useCallback((direction: any) => {
    setOffset((prev) => {
      const newOffset = direction === 'left' ? prev - 30 : prev + 30;
      return Math.max(0, Math.min(newOffset, maxOffset));
    });
  }, [maxOffset]);

  return (
    <div className="w-[95%]  mx-auto lg:w-[80%]">
      <Heading
        title="Testimonials"
        subTitle="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      />
      <div className="my-12 py-12 bg-black rounded-3xl overflow-x-scroll" style={{scrollbarWidth : 'none'}}>
        <div 
          className="w-[120%] transition-transform duration-300 ease-in-out flex gap-12"
          style={{ transform: `translateX(-${offset}%)` }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
        <div className="mt-24 mx-auto w-[80%] lg:[50%] text-white flex justify-between items-center py-12">
          <button 
            onClick={() => handleScroll('left')} 
            className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            disabled={offset === 0}
          >
            <RiArrowLeftLine size={25} />
          </button>
          <div className="flex items-center justify-center gap-3">
            {[...Array(testimonials.length)].map((_, i) => (
              <span key={i} className="text-5xl text-white">.</span>
            ))}
          </div>
          <button 
            onClick={() => handleScroll('right')} 
            className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            disabled={offset === maxOffset}
          >
            <RiArrowRightLine size={25} />
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Testimonials;