import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFilter,
  searched,
  typed,
} from "../../features/filters/filtersSlice";

type FiltersTypes = {
  filters: {
    search: string;
    type: string;
  };
};

const FilterFrom = () => {
  const { search, type: filterType } = useSelector(
    (state: FiltersTypes) => state.filters
  );
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    setName(search);
    setType(filterType);
  }, [search, filterType]);

  // const handleChange = (value: string) => {
  //   setName(value);
  //   dispatch(searched(name));
  // };

  // const handleType = (value: string) => {
  //   setType(value);
  //   dispatch(typed(type));
  // };

  useEffect(() => {
    dispatch(searched(name));
  }, [name, dispatch]);

  useEffect(() => {
    dispatch(typed(type));
  }, [dispatch, type]);

  const handleClear = () => {
    setName("");
    setType("");
    // dispatch(pagination(1));
    dispatch(clearFilter({}));
  };

  return (
    <>
      <div className="bg-[#f5f5f5] p-5 relative">
        <span>
          {(name || type) && (
            <button
              className="absolute right-5 rounded-sm bg-green-800 text-white px-2 py-1 mb-1"
              onClick={handleClear}
            >
              Clear filter
            </button>
          )}
        </span>
        <h3 className="text-xl font-medium">Filter transaction</h3>
        <form>
          <div className="flex gap-7 my-3">
            <label>Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter title"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-1 py-1 border-[1px] border-current rounded-sm w-full"
            />
          </div>
          <div className="flex gap-8 my-3">
            <label>Type</label>
            <div className="flex gap-2 justify-center">
              <input
                required
                type="radio"
                value="income"
                name="type"
                checked={type === "income"}
                onChange={(e) => setType(e.target.value)}
              />
              <label>Income</label>
            </div>
            <div className="flex gap-2 justify-center">
              <input
                type="radio"
                value="expense"
                name="type"
                placeholder="Expense"
                checked={type === "expense"}
                onChange={(e) => setType(e.target.value)}
              />
              <label>Expense</label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FilterFrom;
