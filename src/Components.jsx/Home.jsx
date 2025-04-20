import React from "react";
import BannerImg from "../images/Rectangle 1.png";
import Nav from "../Nav/Nav";

const Home = () => {
  return (
    <section>
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
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Home;
