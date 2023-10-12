"use client";
import About from "@/components/About";
import AsideMenu from "@/components/AsideMenu";
import BackgroundTexture from "@/components/BackgroundTexture";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useState } from "react";

const Home = () => {
  const [isAsideVisible, setAsideVisible] = useState<boolean>(false);
  useIntersectionObserver();

  return (
    <div className="container">
      <Header setIsAsideVisible={setAsideVisible} />
      <AsideMenu
        isThisVisible={isAsideVisible}
        setIsThisVisible={setAsideVisible}
      />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackgroundTexture />
    </div>
  );
};

export default Home;
