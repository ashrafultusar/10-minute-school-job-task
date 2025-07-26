'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

type Slide = {
  id: number;
  src: string;
  alt: string;
};

const slides: Slide[] = [
  { id: 1, src: '/pdf-preview.jpg', alt: 'Slide 1' },
  { id: 2, src: '/pdf-preview.jpg', alt: 'Slide 2' },
  { id: 3, src: '/pdf-preview.jpg', alt: 'Slide 3' },
  { id: 4, src: '/pdf-preview.jpg', alt: 'Slide 4' },
  { id: 5, src: '/pdf-preview.jpg', alt: 'Slide 5' },
];

const Trailer: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="w-full max-w-sm mx-auto p-6 bg-white  ">
      {/* Main Swiper */}
      <Swiper
        modules={[Navigation, Thumbs]}
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        className="mainSwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              src={slide.src}
              alt={slide.alt}
              width={800}
              height={450}
              className="rounded-lg object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        modules={[Thumbs]}
        spaceBetween={10}
        slidesPerView={5}
        watchSlidesProgress
        className="thumbSwiper mt-4"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              src={slide.src}
              alt={`Thumb ${slide.id}`}
              width={150}
              height={80}
              className="rounded-md border hover:border-blue-500"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Trailer;
