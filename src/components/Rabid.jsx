import { useState, useEffect } from "react";
import RabidImgOneOne from "/src/assets/dragon1.png";
import RabidImgOneTwo from "/src/assets/dragon2.png";
import RabidImgOneThree from "/src/assets/dragon3.png";
import RabidImgOneFour from "/src/assets/dragon4.png";

const rabidItems = [
  {
    id: 1,
    name: "Dragon",
    mainImage: RabidImgOneOne,
    images: [RabidImgOneOne, RabidImgOneTwo, RabidImgOneThree, RabidImgOneFour],
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
        <div className="grid grid-cols-12 mt-8">
          {rabidItems.map((item) => (
            <div key={item.id} className="col-span-3 rabid-card">
              <img
                src={item.mainImage}
                alt={item.name}
                onClick={() => handleImageClick(item.images)}
                className="cursor-pointer"
              />
              <h3 className="text-center text-2xl font-bold uppercase text-[var(--text-color)] mt-3">
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
            <div className="flex justify-between space-x-4">
              {currentImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Small ${index}`}
                  className="w-full h-20 cursor-pointer rounded-lg"
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
