import { Link } from "react-router-dom";

import EmailIcon from "/src/assets/gmail.png";
import YoutubeIcon from "/src/assets/youtube.png";
import XIcon from "/src/assets/twitter.png";
import BuyMeCoffe from "/src/assets/buymecoffe.png";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-main)] text-[var(--text-color)] p-5 p-main border-t border-gray-200">
      <div className="main-padding mx-auto">
        <div className="sm:flex justify-between items-center">
          <div className="mb-6 sm:mb-0">
            <h2 className="text-2xl font-bold">Yaser Galal</h2>
            <div className="pt-5">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  color={"#000000"}
                  fill={"none"}
                  className="mr-2 text-[var(--text-color)]"
                >
                  <path
                    d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 2C16.8706 2 21 6.03298 21 10.9258C21 15.8965 16.8033 19.3847 12.927 21.7567C12.6445 21.9162 12.325 22 12 22C11.675 22 11.3555 21.9162 11.073 21.7567C7.2039 19.3616 3 15.9137 3 10.9258C3 6.03298 7.12944 2 12 2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                Mansoura, Egypt
              </p>
              <Link
                to="mailto:theyasergalal@gmail.com"
                className="flex items-center mt-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  color={"#000000"}
                  fill={"none"}
                  className="mr-2 text-[var(--text-color)]"
                >
                  <path
                    d="M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.5 19.5C10.0337 19.4939 9.56682 19.485 9.09883 19.4732C5.95033 19.3941 4.37608 19.3545 3.24496 18.2184C2.11383 17.0823 2.08114 15.5487 2.01577 12.4814C1.99475 11.4951 1.99474 10.5147 2.01576 9.52843C2.08114 6.46113 2.11382 4.92748 3.24495 3.79139C4.37608 2.6553 5.95033 2.61573 9.09882 2.53658C11.0393 2.4878 12.9607 2.48781 14.9012 2.53659C18.0497 2.61574 19.6239 2.65532 20.755 3.79141C21.8862 4.92749 21.9189 6.46114 21.9842 9.52844C21.9939 9.98251 21.9991 10.1965 21.9999 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 17C19 17.8284 18.3284 18.5 17.5 18.5C16.6716 18.5 16 17.8284 16 17C16 16.1716 16.6716 15.5 17.5 15.5C18.3284 15.5 19 16.1716 19 17ZM19 17V17.5C19 18.3284 19.6716 19 20.5 19C21.3284 19 22 18.3284 22 17.5V17C22 14.5147 19.9853 12.5 17.5 12.5C15.0147 12.5 13 14.5147 13 17C13 19.4853 15.0147 21.5 17.5 21.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                theyasergalal@gmail.com
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:flex sm:space-x-8">
            <div>
              <h3 className="font-bold text-lg pb-2">Fast Links</h3>
              <ul className="resources">
                <li>
                  <Link
                    to="https://www.youtube.com/@rationalized"
                    target="_blank"
                  >
                    Youtube
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="https://buymeacoffee.com/rationalized"
                    target="_blank"
                  >
                    Buy Me A Coffee
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 sm:mt-4">
          <div className="pt-5 footer-links flex justify-center space-x-4 mt-4">
            <Link
              to="mailto:theyasergalal@gmail.com"
              target="_blank"
              className="flex items-center mt-3"
            >
              <img src={EmailIcon} alt="Email" className="w-7 h-7 mr-3" />
            </Link>
            <Link
              to="https://www.youtube.com/@rationalized"
              target="_blank"
              className="flex items-center mt-3"
            >
              <img src={YoutubeIcon} alt="Email" className="w-7 h-7 mr-3" />
            </Link>
            <Link
              to="https://x.com/RationalizedYT"
              target="_blank"
              className="flex items-center mt-3"
            >
              <img src={XIcon} alt="Email" className="w-7 h-7 mr-3" />
            </Link>
            <Link
              to="https://buymeacoffee.com/rationalized"
              target="_blank"
              className="flex items-center mt-3"
            >
              <img src={BuyMeCoffe} alt="Email" className="w-9 h-9 mr-1" />
            </Link>
          </div>
        </div>
        <p className="text-[var(--text-p)] text-center text-sm mt-8 pb-4">
          © 2024 Yaser, All rights reserved.
        </p>
      </div>
    </footer>
  );
}
