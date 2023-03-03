import FilterBySalary from "../FilterBy/FilterBySalary";
import FilterByAvailabilty from "../FilterBy/FilterByAvailability";
import FilterByRole from "../FilterBy/FilterByRole";

const MainFilter = () => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-purple font-medium text-2xl mb-3">Filter</h2>
      <FilterBySalary />
      <FilterByAvailabilty />
      <FilterByRole />
    </div>
  );
};

export default MainFilter;
