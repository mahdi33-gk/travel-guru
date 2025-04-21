import React from "react";
import BannerImg from "../images/Rectangle 1.png";
import Nav from "../Nav/Nav";
import { FaLongArrowAltRight } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'animate.css';

const Contact = () => {
    const popUp =()=> toast('We received your message.Thanks for reaching us.')
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
                  <h1 className="font-bebas text-6xl md:text-8xl text-white">
                    Travel Guru Agency
                  </h1>
                  <p className="text-white text-[15px] md:text-[18px] font-monster">
                    We are Bangladesh’s first all-in-one travel agency. Whether
                    you’re booking a hotel in your dream destination or need a
                    personal car to pick you up—we’ve got you covered. Trusted,
                    comfortable, and always on time.
                  </p>
                </div>
              </div>
              <div className="z-50 w-full mt-8 rounded-lg bg-white bg-opacity-90 backdrop-blur-md md:col-span-5">
                <form class="space-y-5 bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-xl shadow-lg">
                  <div>
                    <label class="block text-gray-700 font-semibold mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      class="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div>
                    <label class="block text-gray-700 font-semibold mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      class="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div>
                    <label class="block text-gray-700 font-semibold mb-1">
                      Your Message
                    </label>
                    <textarea
                      rows="4"
                      class="textarea textarea-bordered w-full"
                      placeholder="Tell us what you need..."
                      required
                    ></textarea>
                  </div>
                  <button onClick={popUp} class="btn bg-primary w-full text-lg">
                    Send Message
                  </button>
                  <ToastContainer
                  position="top-center"
                  autoClose={1000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick={false}
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                  
                  ></ToastContainer>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Contact;
