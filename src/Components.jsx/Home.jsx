import React from "react";
import BannerImg from "../images/Rectangle 1.png";
import Nav from "../Nav/Nav";

const Home = () => {
  return (
    <section className="font-monster">
      <header className="w-11/13 mx-auto">
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
            <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
            <div>

            </div>
            <div></div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Home;
