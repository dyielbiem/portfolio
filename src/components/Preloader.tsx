import { useEffect, useState } from "react";

const Preloader = () => {
  const [isWindowLoading, setIsWindowLoading] = useState<boolean>(true);

  useEffect(() => {
    if (document.readyState !== "loading") {
      setIsWindowLoading(false);
      document.body.style.overflow = "visible";
    }
  }, []);

  return (
    <div className={`pre-loader ${isWindowLoading ? "" : "hide-pre-loader"}`}>
      <div className="logo">
        <div className="animation"></div>
      </div>
    </div>
  );
};

export default Preloader;
