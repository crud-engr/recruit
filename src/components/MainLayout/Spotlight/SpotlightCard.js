import { FcGoogle } from "react-icons/fc";
import { FaBookmark } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import dominos from "../../../assets/dominos.svg";
import spotify from "../../../assets/spotify.svg";

const SpotlightCard = () => {
  return (
    <div>
      <h2 className="text-purple font-medium text-2xl mb-3">Spotlight</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:gap-10 lg:gap-10 xl:gap-10 gap-3">
        <div className="card md:w-40 lg:w-40 xl:w-40 bg-white shadow-xl p-4 border border-grey">
          <div className="">
            <div className="flex justify-between items-center gap-1">
              <div className="">
                <FcGoogle size={20} />
              </div>
              <div className="text-grey font-medium">Google.com</div>
              <div className="">
                <FaBookmark color="#979797" />
              </div>
            </div>
            <div className="my-4 flex justify-between items-center text-sm">
              <div className="flex items-center gap-1">
                <AiFillStar size={20} color="#FFCC33" />
                <span>4.5</span>
              </div>
              <div>V. Island</div>
            </div>
            <div className="flex justify-center">
              <button className="btn btn-dark btn-xs lowercase font-light">
                Check available offers
              </button>
            </div>
          </div>
        </div>

        <div className="card md:w-40 lg:w-40 xl:w-40 bg-white shadow-xl p-4 border border-grey">
          <div className="">
            <div className="flex justify-between items-center gap-1">
              <div className="">
                <img src={dominos} alt="dominos" width={20} />
              </div>
              <div className="text-grey font-medium">Domino’s</div>
              <div className="">
                <FaBookmark color="#979797" />
              </div>
            </div>
            <div className="my-4 flex justify-between items-center text-sm">
              <div className="flex items-center gap-1">
                <AiFillStar size={20} color="#FFCC33" />
                <span>4.5</span>
              </div>
              <div>Ikeja</div>
            </div>
            <div className="flex justify-center">
              <button className="btn btn-dark btn-xs lowercase font-light">
                Check available offers
              </button>
            </div>
          </div>
        </div>

        <div className="card md:w-40 lg:w-40 xl:w-40 bg-white shadow-xl p-4 border border-grey">
          <div className="">
            <div className="flex justify-between items-center gap-1">
              <div className="">
                <img src={spotify} alt="spotify" width={20} />
              </div>
              <div className="text-grey font-medium">Spotify</div>
              <div className="">
                <FaBookmark color="#979797" />
              </div>
            </div>
            <div className="my-4 flex justify-between items-center text-sm">
              <div className="flex items-center gap-1">
                <AiFillStar size={20} color="#FFCC33" />
                <span>4.5</span>
              </div>
              <div>Ogun</div>
            </div>
            <div className="flex justify-center">
              <button className="btn btn-dark btn-xs lowercase font-light">
                Check available offers
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotlightCard;
