const FilterByRole = () => {
  return (
    <div className="mb-5 text-dark">
      <h1 className="py-2">
        {" "}
        <span className="text-purple">Role</span>
      </h1>
      <div>
        <div className="flex items-center gap-8 mb-2">
          <label class="input-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>{" "}
          Assistant
        </div>
        <div className="flex items-center gap-8 mb-2">
          <label class="input-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>{" "}
          Real Estate Manager
        </div>
        <div className="flex items-center gap-8 mb-2">
          <label class="input-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>{" "}
          Web Developer
        </div>
        <div className="flex items-center gap-8 mb-2">
          <label class="input-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>{" "}
          UX Designer
        </div>
        <div className="flex items-center gap-8 mb-2">
          <label class="input-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>{" "}
          Teacher
        </div>
        <div className="flex items-center gap-8">
          <label class="input-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>{" "}
          Doctor
        </div>
      </div>
    </div>
  );
};

export default FilterByRole;
