import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FilterFrom from "../components/transactions/FilterFrom";
import FilteredTransaction from "../components/transactions/FilteredTransaction";
import Form from "../ui/Form";

type EditingTypes = {
  transaction: {
    editing: {
      id: number;
      name: string;
      amount: number;
      type: string;
    };
  };
};

const Transaction = () => {
  const { editing } =
    useSelector((state: EditingTypes) => state.transaction) || {};

  return (
    <>
      <button className="font-bold cursor-pointer mb-3 text-white mt-2 px-4 py-2 border-0 bg-[#42855B] mx-auto block rounded-sm">
        <Link to="/">Back</Link>
      </button>

      {editing?.id ? <Form /> : <FilterFrom />}

      <FilteredTransaction />
    </>
  );
};

export default Transaction;
