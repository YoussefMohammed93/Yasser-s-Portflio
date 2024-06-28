import { useState, useEffect } from "react";
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
    mainImage: HeavenlyImgOneOne,
    images: [
      HeavenlyImgOneOne,
      HeavenlyImgOneTwo,
      HeavenlyImgOneThree,
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
    mainImage: SpideImgOne,
    images: [SpideImgOne, SpideImgTwo, SpideImgThree, SpideImgFour],
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
    mainImage: SprayImgOne,
    images: [SprayImgOne, SprayImgTwo, SprayImgThree, SprayImgFour],
  },
  {
    id: 8,
    name: "Strike Fear",
    mainImage: StrikeOne,
    images: [StrikeOne, StrikeTwo, StrikeThree, StrikeFour],
  },
];

export default function Rabid() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const [popupTransition, setPopupTransition] = useState(false);

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
    if (isPopupOpen) {
      setTimeout(() => {
        setPopupTransition(true);
      }, 10); // Small delay to ensure transition class is applied
    }
  }, [isPopupOpen]);

  return (
    <div>
      <div>
        <h1 className="main-title text-4xl sm:text-5xl text-center font-black text-[var(--text-color)] uppercase">
          Rabid
        </h1>
      </div>
      <main className="rabid p-main">
        <div className="grid grid-cols-12 mt-8 gap-5">
          {rabidItems.map((item) => (
            <div
              key={item.id}
              className="rabid-card col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-lg bg-[var(--bg-second)]"
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
              <h3 className="text-center text-2xl font-bold uppercase text-[var(--text-color)] mt-3 mb-3">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </main>
      {isPopupOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300  ${
            popupTransition ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`bg-[var(--bg-second)] p-4 rounded-lg w-full sm:w-2/3 md:w-1/2 lg:w-5/12 xl:w-4/12 transform transition-transform duration-300 ${
              popupTransition ? "scale-100" : "scale-95"
            }`}
          >
            <img
              src={mainImage}
              alt="Main"
              className="w-full h-96 mb-4 rounded-lg"
            />
            <div className="flex justify-between space-x-4 overflow-x-scroll sm:overflow-x-auto">
              {currentImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Small ${index}`}
                  className="w-full h-28 sm:h-20 cursor-pointer rounded-lg"
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
