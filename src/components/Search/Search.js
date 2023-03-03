import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const Search = () => {
  return (
    <div className="flex justify-center">
      <div className="form-control">
        <div className="relative w-96">
          <div className="opacity-50 absolute top-4 left-3">
            <div className="flex justify-between items-center font-bold text-dark text-sm gap-1">
              <FaMapMarkerAlt />
              <select>
                <option>Lagos</option>
                <option>Abuja</option>
              </select>
            </div>
          </div>
          <input
            type="text"
            placeholder="search jobs"
            autocomplete="off"
            className=" input input-bordered w-full noselect text-dark text-sm bg-white shadow focus:outline-0 hover:shadow-lg"
            style={{ paddingLeft: "6rem" }}
          />
          <div className="opacity-50 absolute top-4 right-3">
            <FaSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
