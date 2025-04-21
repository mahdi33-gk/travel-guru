import React from "react";
import BannerImg from "../images/Rectangle 1.png";
import Nav from "../Nav/Nav";
import { FaLongArrowAltRight } from "react-icons/fa";
import Swiper from "./SwiperComponent";
import LeftHero from "./LeftHero";
import DestinationCard from "./DestinationCard";

const Blog = () => {
  return (
    <section className="font-monster">
      <header className="w-11/12 max-w-screen-xl mx-auto">
        <Nav></Nav>
      </header>
      <main>
        <div>
          <div
            className="hero min-h-screen relative"
            style={{
              backgroundImage: `url(${BannerImg})`,
            }}
          >
            <div className="absolute inset-0  bg-black bg-opacity-70 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 justify-center items-center w-11/12 mx-auto mt-28 md:mt-5">
              <div className="z-50 w-full pb-3 text-white  md:col-span-5">
                <iframe
                  className="w-full h-[400px] border-primary border-2"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49130.60481763212!2d91.95166076766866!3d21.436731606363157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!5e1!3m2!1sen!2sbd!4v1745256884392!5m2!1sen!2sbd"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Blog;
