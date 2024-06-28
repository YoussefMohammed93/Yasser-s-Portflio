import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY >= 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top relative z-40">
      <div className="flex items-center justify-center">
        <button
          type="button"
          className={`px-2 bg-[var(--main-color)] text-white rounded-sm border-2 border-transparent ${
            isVisible ? "active" : ""
          }`}
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            fill={"none"}
            className="text-white my-1"
          >
            <path
              d="M18 11.5C18 11.5 13.5811 5.50001 12 5.5C10.4188 5.49999 6 11.5 6 11.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 18.5C18 18.5 13.5811 12.5 12 12.5C10.4188 12.5 6 18.5 6 18.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ScrollToTop;
