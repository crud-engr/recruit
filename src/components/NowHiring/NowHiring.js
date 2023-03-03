import { FcGoogle } from "react-icons/fc";
import { FaBookmark } from "react-icons/fa";
import kpmg from "../../assets/kpmg.svg";
import oracle from "../../assets/Oracle.svg";

const NowHiring = () => {
  return (
    <div className="mt-10">
      <h2 className="text-purple font-medium text-2xl mb-3">Now Hiring</h2>
      <div className="bg-white px-8 py-4 rounded-lg">
        <div className="card w-full bg-lightgrey shadow-md rounded mb-10">
          <div className="flex justify-between items-center px-3 py-2">
            <div className="flex items-center gap-2 px-3 py-2">
              <div>
                <FcGoogle size={30} />
              </div>
              <div className="font-bold text-dark">Google.co</div>
              <div className="font-medium bg-orange text-dark rounded-md px-3">
                Full-Time
              </div>
            </div>
            <div>
              <FaBookmark color="#979797" size={25} />
            </div>
          </div>
          <div className="flex justify-center items-center font-medium text-sm text-grey mb-10">
            <div className="flex justify-between gap-3">
              <div>5 days ago</div>
              <div>VI, Lagos</div>
              <div>NGN 300,000/month</div>
            </div>
          </div>
          <div className="text-sm text-grey px-9 font-light">
            In this role, you'll be responsible for the delivery of the regular
            testing of key controls and files, and the completion of targeted
            control reviews for a franchise or function as well as team
            leadership
          </div>
          <div className="card-actions justify-end p-3">
            <button className="btn bg-orange text-dark hover:text-dark hover:bg-orange border-orange normal-case font-medium">
              Apply Now
            </button>
          </div>
        </div>

        <div className="card w-full bg-lightgrey shadow-md rounded mb-10">
          <div className="flex justify-between items-center px-3 py-2">
            <div className="flex items-center gap-2 px-3 py-2">
              <div>
                <img src={kpmg} alt="kpmg" />
              </div>
              <div className="font-bold text-dark">KPMG</div>
              <div className="font-medium bg-orange text-dark rounded-md px-3">
                Full-Time
              </div>
            </div>
            <div>
              <FaBookmark color="#979797" size={25} />
            </div>
          </div>
          <div className="flex justify-center items-center font-medium text-sm text-grey mb-10">
            <div className="flex justify-between gap-3">
              <div>3 months ago</div>
              <div>0jo road, Ogun</div>
              <div>NGN 250,000/month</div>
            </div>
          </div>
          <div className="text-sm text-grey px-9 font-light">
            In this role, you'll be responsible for the delivery of the regular
            testing of key controls and files, and the completion of targeted
            control reviews for a franchise or function as well as team
            leadership
          </div>
          <div className="card-actions justify-end p-3">
            <button className="btn bg-orange text-dark hover:text-dark hover:bg-orange border-orange normal-case font-medium">
              Apply Now
            </button>
          </div>
        </div>

        <div className="card w-full bg-lightgrey shadow-md rounded">
          <div className="flex justify-between items-center px-3 py-2">
            <div className="flex items-center gap-2 px-3 py-2">
              <div>
                <img src={oracle} alt="oracle" />
              </div>
              <div className="font-bold text-dark">ORACLE</div>
              <div className="font-medium bg-orange text-dark rounded-md px-3">
                Full-Time
              </div>
            </div>
            <div>
              <FaBookmark color="#979797" size={25} />
            </div>
          </div>
          <div className="flex justify-center items-center font-medium text-sm text-grey mb-10">
            <div className="flex justify-between gap-3">
              <div>3 months ago</div>
              <div>0jo road, Ogun</div>
              <div>NGN 250,000/month</div>
            </div>
          </div>
          <div className="text-sm text-grey px-9 font-light">
            In this role, you'll be responsible for the delivery of the regular
            testing of key controls and files, and the completion of targeted
            control reviews for a franchise or function as well as team
            leadership
          </div>
          <div className="card-actions justify-end p-3">
            <button className="btn bg-orange text-dark hover:text-dark hover:bg-orange border-orange normal-case font-medium">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowHiring;
