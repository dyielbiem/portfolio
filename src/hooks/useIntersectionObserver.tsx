"use client";
import { useEffect } from "react";

const useIntersectionObserver = () => {
  const animateElement: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      const target = entry.target;

      if (entry.isIntersecting) {
        if (target.classList.contains("slide-down")) {
          target.classList.remove("slide-down");
          target.classList.add("animate-slide-down");
        } else if (target.classList.contains("slide-up")) {
          target.classList.remove("slide-up");
          target.classList.add("animate-slide-up");
        } else if (
          target.classList.contains("slide-left") ||
          target.classList.contains("slide-right")
        ) {
          target.classList.add("animate-slide-left-or-right");
        }

        observer.unobserve(target);
      }
    });
  };

  let observer: IntersectionObserver | null = null;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    observer = new IntersectionObserver(animateElement, {
      root: null,
      rootMargin: "-5% 0px -10% 0px",
      threshold: 0.2,
    });
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      setTimeout(observeElement, 3500);
    }
  }, [observeElement]);
};

export default useIntersectionObserver;
