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
  name: string;
  resource_type: 'image' | 'video';
  resource_value: string;
  thumbnail_url?: string;
};

interface TrailerProps {
  data: Slide[];
}

const Trailer: React.FC<TrailerProps> = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className=" max-w-sm mx-auto p-2 bg-white">

      <Swiper
        modules={[Navigation, Thumbs]}
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        className="mainSwiper"
      >
        {data?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[200px] relative rounded-lg overflow-hidden">
              {slide.resource_type === 'video' ? (
                <iframe
                  src={`https://www.youtube.com/embed/${slide.resource_value}`}
                  title={slide.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <Image
                  src={slide.resource_value}
                  alt={slide.name || 'Image Slide'}
                  fill
                  
                  className="object-cover"
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      
      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        modules={[Thumbs]}
        spaceBetween={10}
        slidesPerView={5}
        watchSlidesProgress
        className="thumbSwiper mt-4"
      >
        {data?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-[60px] h-[40px] relative">
              <Image
                src={
                  slide.thumbnail_url ||
                  (slide.resource_type === 'image'
                    ? slide.resource_value
                    : `https://img.youtube.com/vi/${slide.resource_value}/0.jpg`)
                }
                alt={`Thumb ${index + 1}`}
                fill
                className="object-cover rounded-md border-2 border-transparent hover:border-blue-500 swiper-slide-thumb-active:border-blue-600"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Trailer;
