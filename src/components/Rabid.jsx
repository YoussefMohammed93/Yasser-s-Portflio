import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import TerminatorOne from "/src/assets/terminator1.png";
import TerminatorTwo from "/src/assets/terminator2.png";
import TerminatorThree from "/src/assets/terminator3.png";
import TerminatorFour from "/src/assets/terminator4.png";
import RabidImgOneOne from "/src/assets/dragon1.png";
import RabidImgOneTwo from "/src/assets/dragon2.png";
import RabidImgOneThree from "/src/assets/dragon3.png";
import RabidImgOneFour from "/src/assets/dragon4.png";
import HeavenlyImgOneOne from "/src/assets/Heavenly1.png";
import HeavenlyImgOneTwo from "/src/assets/Heavenly2.png";
import HeavenlyImgOneThree from "/src/assets/Heavenly3.png";
import HeavenlyImgOneFour from "/src/assets/Heavenly4.png";
import HimImgOne from "/src/assets/him1.png";
import HimImgTwo from "/src/assets/him2.png";
import HimImgThree from "/src/assets/him3.png";
import HimImgFour from "/src/assets/him4.png";
import SpideImgOne from "/src/assets/spider1.png";
import SpideImgTwo from "/src/assets/spider2.png";
import SpideImgThree from "/src/assets/spider3.png";
import SpideImgFour from "/src/assets/spider4.png";
import StarsOneImg from "/src/assets/stars1.png";
import StarsTwoImg from "/src/assets/stars2.png";
import StarsThreeImg from "/src/assets/stars3.png";
import StarsFourImg from "/src/assets/stars4.png";
import SnakeOneImg from "/src/assets/snake1.png";
import SnakeTwoImg from "/src/assets/snake2.png";
import SnakeThreeImg from "/src/assets/snake3.png";
import SnakeFourImg from "/src/assets/snake4.png";
import SprayImgOne from "/src/assets/spray1.png";
import SprayImgTwo from "/src/assets/spray2.png";
import SprayImgThree from "/src/assets/spray3.png";
import SprayImgFour from "/src/assets/spray4.png";
import StrikeOne from "/src/assets/strike1.png";
import StrikeTwo from "/src/assets/strike2.png";
import StrikeThree from "/src/assets/strike3.png";
import StrikeFour from "/src/assets/strike4.png";
import VisualOne from "/src/assets/visual1.png";
import VisualTwo from "/src/assets/visual2.png";
import VisualThree from "/src/assets/visual3.png";
import VisualFour from "/src/assets/visual4.png";
import YinOne from "/src/assets/yinyang1.png";
import YinTwo from "/src/assets/yinyang2.png";
import YinThree from "/src/assets/yinyang3.png";
import YinFour from "/src/assets/yinyang4.png";

const rabidItems = [
  {
    id: 1,
    name: "Dragon",
    mainImage: RabidImgOneOne,
    images: [RabidImgOneOne, RabidImgOneTwo, RabidImgOneThree, RabidImgOneFour],
  },
  {
    id: 2,
    name: "Heavenly",
    mainImage: HeavenlyImgOneThree,
    images: [
      HeavenlyImgOneThree,
      HeavenlyImgOneOne,
      HeavenlyImgOneTwo,
      HeavenlyImgOneFour,
    ],
  },
  {
    id: 3,
    name: "Him",
    mainImage: HimImgOne,
    images: [HimImgOne, HimImgTwo, HimImgThree, HimImgFour],
  },
  {
    id: 4,
    name: "RRspider",
    mainImage: SpideImgThree,
    images: [SpideImgThree, SpideImgTwo, SpideImgOne, SpideImgFour],
  },
  {
    id: 5,
    name: "Silent Stars",
    mainImage: StarsOneImg,
    images: [StarsOneImg, StarsTwoImg, StarsThreeImg, StarsFourImg],
  },
  {
    id: 6,
    name: "Snakes",
    mainImage: SnakeTwoImg,
    images: [SnakeTwoImg, SnakeOneImg, SnakeThreeImg, SnakeFourImg],
  },
  {
    id: 7,
    name: "Spray Your Truth",
    mainImage: SprayImgFour,
    images: [SprayImgFour, SprayImgTwo, SprayImgThree, SprayImgOne],
  },
  {
    id: 8,
    name: "Strike Fear",
    mainImage: StrikeFour,
    images: [StrikeFour, StrikeTwo, StrikeThree, StrikeOne],
  },
  {
    id: 9,
    name: "Terminator 76 - 77",
    mainImage: TerminatorOne,
    images: [TerminatorOne, TerminatorTwo, TerminatorThree, TerminatorFour],
  },
  {
    id: 10,
    name: "VisualCraze",
    mainImage: VisualThree,
    images: [VisualThree, VisualTwo, VisualOne, VisualFour],
  },
  {
    id: 11,
    name: "Yin Yang",
    mainImage: YinFour,
    images: [YinFour, YinTwo, YinThree, YinOne],
  },
];

const CustomSwiper = styled(Swiper)`
  position: relative;
  width: 100%;

  .swiper-button-next,
  .swiper-button-prev {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    padding: 10px;
  }

  .swiper-button-next {
    right: 20px; /* Adjust this value as needed */
  }

  .swiper-button-prev {
    left: 20px; /* Adjust this value as needed */
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 45px;
  }

  @media (max-width: 768px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }

  &.hide-arrows .swiper-button-next,
  &.hide-arrows .swiper-button-prev {
    display: none;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  .swiper-pagination-bullet {
    background: #c6c6c6;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: var(--main-color);
  }
`;

export default function Rapid() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const [popupTransition, setPopupTransition] = useState(false);
  const [hideArrows, setHideArrows] = useState(false);

  const handleImageClick = (images) => {
    setCurrentImages(images);
    setMainImage(images[0]);
    setIsPopupOpen(true);
  };

  const handleSmallImageClick = (image) => {
    setMainImage(image);
  };

  const handleClosePopup = () => {
    setPopupTransition(false);
    setTimeout(() => {
      setIsPopupOpen(false);
    }, 300); // Duration of the transition
  };

  useEffect(() => {
    const handleScroll = () => {
      setHideArrows(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isPopupOpen) {
      setTimeout(() => {
        setPopupTransition(true);
      }, 10); // Small delay to ensure transition class is applied
    }
  }, [isPopupOpen]);

  return (
    <div>
      <div className="pt-24 bg-[var(--bg-main)]">
        <h1 className="main-title text-4xl sm:text-5xl text-center font-black text-[var(--text-color)] uppercase">
          Rapid
        </h1>
      </div>
      <main className="rabid p-main pb-10 bg-[var(--bg-main)]">
        <div style={{ position: "relative", width: "100%" }}>
          <CustomSwiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true, el: ".custom-pagination" }}
            className={`pt-10 ${hideArrows ? "hide-arrows" : ""}`}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {rabidItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="rabid-card rounded-lg bg-[var(--bg-second)] shadow-lg"
                  style={{ border: "1px solid #cbcbcb" }}
                >
                  <img
                    src={item.mainImage}
                    alt={item.name}
                    onClick={() => handleImageClick(item.images)}
                    className="cursor-pointer"
                    style={{
                      borderTopLeftRadius: "8px",
                      borderTopRightRadius: "8px",
                    }}
                  />
                  <div className="overlay flex flex-col">
                    <h3 className="text-center text-2xl font-bold uppercase text-white">
                      {item.name}
                    </h3>
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="text-white mr-2 flex items-center mt-8 bg-[var(--main-color)] font-bold py-1 px-4 rounded-full border-2 border-transparent hover:text-[var(--text-color)] transition-all duration-300"
                        onClick={() => handleImageClick(item.images)}
                      >
                        View
                      </button>
                    </div>
                  </div>
                  <h3 className="text-center text-2xl font-bold uppercase text-[var(--text-color)] mt-3 mb-3">
                    {item.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </CustomSwiper>
          <PaginationContainer className="custom-pagination" />
        </div>
      </main>
      {isPopupOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300  ${
            popupTransition ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`bg-[var(--bg-second)] p-4 rounded-lg w-full sm:w-2/3 md:w-1/2 lg:w-5/12 xl:w-4/12 transform transition-transform duration-500 ${
              popupTransition ? "scale-100" : "scale-95"
            }`}
          >
            <img
              src={mainImage}
              alt="Main"
              className="rapid-img w-full h-[26rem] mb-4 rounded-lg"
            />
            <div className="flex justify-between space-x-4 overflow-x-scroll sm:overflow-x-auto">
              {currentImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Small ${index}`}
                  className="rapid-img-small w-full h-28 sm:h-24 cursor-pointer rounded-lg"
                  onClick={() => handleSmallImageClick(image)}
                />
              ))}
            </div>
            <button
              onClick={handleClosePopup}
              className="mt-4 py-1 px-3 flex items-center bg-red-500 hover:bg-red-600 transition-all duration-300 text-white rounded"
            >
              Close
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={20}
                height={20}
                fill={"none"}
                className="ml-1"
              >
                <path
                  d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
