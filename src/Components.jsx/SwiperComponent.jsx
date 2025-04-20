import { useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Cox from '../images/Sreemongol.png'
import Sajek from '../images/Sajek.png'
import Bandarban from '../images/sundorbon.png'
import Cox2 from '../images/Rectangle 1.png'

const destinations = [
  
  {
    name: 'SUNDARBANS',
    image: Bandarban,
  },
  {
    name: 'SREEMANGAL',
    image: Sajek,
  },
  {
    name: "COX'S BAZAR",
    image: Cox2, // Replace with real paths
  },
  {
    name: 'BANDARBAN',
    image: Cox,
  },
];

const SwiperComponent = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full max-w-6xl mx-auto py-10 text-white relative z-10">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1.6, // 👈 mobile
          },
          640: {
            slidesPerView: 1.5, // 👈 small tablets
          },
          768: {
            slidesPerView: 2.3, // 👈 md and up
          },
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
        onSlideChange={() => console.log('slide changed')}
      >
        {destinations.map((dest, idx) => (
          <SwiperSlide key={idx} className='flex justify-center'>
            <div
              className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-105"
              style={{
                backgroundImage: `url(${dest.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-xl font-bold z-10">
                {dest.name}
              </div>
              {/* Yellow border effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          ref={prevRef}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-yellow-400 transition"
        >
          ⬅
        </button>
        <button
          ref={nextRef}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-yellow-400 transition"
        >
          ➡
        </button>
      </div>
    </div>
  );
};

export default SwiperComponent;
