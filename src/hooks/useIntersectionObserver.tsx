"use client";
import { useEffect } from "react";

const useIntersectionObserver = () => {
  const animateElement: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      const target = entry.target;

      if (
        target.classList.contains("slide-left") ||
        target.classList.contains("slide-right")
      ) {
        target.classList.toggle(
          "animate-slide-left-or-right",
          entry.isIntersecting
        );
      } else if (
        entry.isIntersecting &&
        getComputedStyle(target).opacity === "0"
      ) {
        if (
          target.classList.contains("slide-down") ||
          target.classList.contains("slide-down-exit")
        ) {
          target.classList.remove("slide-down");
          target.classList.remove("slide-down-exit");
          target.classList.add("animate-slide-down");
        } else if (
          target.classList.contains("slide-up") ||
          target.classList.contains("slide-up-exit")
        ) {
          target.classList.remove("slide-up");
          target.classList.remove("slide-up-exit");
          target.classList.add("animate-slide-up");
        }
        observer.unobserve(target);
        setTimeout(() => {
          observer.observe(target);
        }, 1000);
      } else if (
        !entry.isIntersecting &&
        getComputedStyle(target).opacity === "1"
      ) {
        if (target.classList.contains("animate-slide-down")) {
          target.classList.remove("animate-slide-down");
          target.classList.add("slide-down-exit");
        } else if (target.classList.contains("animate-slide-up")) {
          target.classList.remove("animate-slide-up");
          target.classList.add("slide-up-exit");
        }
        observer.unobserve(target);
        setTimeout(() => {
          observer.observe(target);
        }, 1000);
      }
    });
  };

  let observer: IntersectionObserver | null = null;

  useEffect(() => {
    observer = new IntersectionObserver(animateElement, {
      root: null,
      rootMargin: "-2% 0px -20% 0px",
    });
  }, []);

  const observeElement = () => {
    if (observer) {
      document
        .querySelectorAll(".slide-up, .slide-down, .slide-left, .slide-right")
        .forEach((child) => {
          observer!.observe(child);
        });
    }
  };

  useEffect(() => {
    if (document.readyState !== "loading") {
      setTimeout(observeElement, 5000);
    }
  }, []);
};

export default useIntersectionObserver;
