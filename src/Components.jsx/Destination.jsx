import React from "react";
import BannerImg from "../images/Rectangle 1.png";
import Nav from "../Nav/Nav";
import { FaLongArrowAltRight } from "react-icons/fa";
import Swiper from "./SwiperComponent";
import LeftHero from "./LeftHero";
import DestinationCard from "./DestinationCard";

const Destination = () => {
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

            <div className="grid grid-cols-1 md:grid-cols-12 justify-center items-center w-11/12 mx-auto mt-28 md:mt-5">
              <div className="z-20 md:col-span-7 justify-center flex flex-col gap-5">
                <div className="space-y-3">
                  <LeftHero></LeftHero>
                  <p className="text-white text-[15px] md:text-[18px] font-monster">
                  Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s  known <br className=" hidden md:flex " />for its very long, sandy beachfront, stretching from Sea Beach in the<br className=" hidden md:flex " /> north to Kolatoli Beach in the south. Aggameda Khyang monastery <br className=" hidden md:flex "/>is home to bronze statues and centuries-old Buddhist manuscripts.<br className=" hidden md:flex "/> South of town, the tropical rainforest of Himchari National Park has  <br className=" hidden md:flex "/>waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.
                  </p>
                  
                </div>
              </div>
              <div className="z-50 w-full text-white  md:col-span-5">
                <DestinationCard></DestinationCard>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Destination;
