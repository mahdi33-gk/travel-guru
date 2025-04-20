import React from "react";
import BannerImg from "../images/Rectangle 1.png";
import Nav from "../Nav/Nav";
import { FaLongArrowAltRight } from "react-icons/fa";
import Swiper from "./SwiperComponent";

const Home = () => {
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

            <div className="grid grid-cols-1 md:grid-cols-12 justify-center items-center w-11/12 mx-auto mt-5">
              <div className="z-50 md:col-span-7 justify-center flex flex-col gap-5">
                <h1 className="font-bebas text-8xl text-white">Cox's bazar</h1>
                <p className="text-white">
                  Cox's Bazar is a city, fishing port, tourism centre and <br />{" "}
                  district headquarters in southeastern Bangladesh. It is <br />{" "}
                  famous mostly for its long natural sandy beach, and it ...
                </p>
                <div>
                  <button className="btn bg-primary border-transparent">
                    Booking <FaLongArrowAltRight></FaLongArrowAltRight>
                  </button>
                </div>
              </div>
              <div className="z-50 w-full text-white  md:col-span-5">
                <Swiper></Swiper>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Home;
