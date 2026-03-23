"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { Category } from "@/types";

interface CategorySliderProps {
  categories: Category[];
}

export function CategorySlider({ categories }: CategorySliderProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 5 },
        1280: { slidesPerView: 6 },
      }}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={categories.length > 5}
      className="rounded-xl overflow-hidden px-1"
    >
      {categories.map((category) => (
        <SwiperSlide key={category.id}>
          <CategoryCard category={category} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
