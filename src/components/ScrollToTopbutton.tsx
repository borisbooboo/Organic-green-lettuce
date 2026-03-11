import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTopButton() {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      className={`fixed bottom-24 right-6 z-50 flex items-center justify-center
      w-12 h-12 rounded-full backdrop-blur-md shadow-lg
      transition-all duration-300
      bg-white/70 text-gray-800 hover:scale-110
      dark:bg-gray-900/70 dark:text-white
      ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"}`}
    >
      <FiArrowUp size={20} />
    </button>
  );
}