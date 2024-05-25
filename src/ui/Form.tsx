import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useAddTransactionMutation,
  useUpdateTransactionMutation,
} from "../features/transactions/transactionsApi";
import { editInActive } from "../features/transactions/transactionsSlice";
import Error from "./Error";
import Success from "./Success";

const Form = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const { editing } = useSelector((state) => state.transaction) || {};

  const [
    addTransaction,
    { isLoading: addLoading, isError: addIsError, isSuccess: addIsSuccess },
  ] = useAddTransactionMutation();

  const [
    updateTransaction,
    {
      isLoading: updateLoading,
      isError: updateIsError,
      isSuccess: updateIsSuccess,
    },
  ] = useUpdateTransactionMutation();

  useEffect(() => {
    console.log(editing);
    const { id, name, amount, type } = editing || {};
    if (id) {
      setEditMode(true);
      setName(name);
      setType(type);
      setAmount(amount);
    } else {
      setEditMode(false);
      reset();
    }
  }, [editing]);

  const reset = () => {
    setName("");
    setType("");
    setAmount(0);
    setError("");
    setError("");
  };

  const checkError = () => {
    if (name.length < 3) {
      setError("Name length must be greater than 3 letter");
      return false;
    }

    if (type === null) {
      setError("Type must be selected");
      return false;
    }

    if (amount === 0) {
      setError("Must be insert amount");
      return false;
    }
    return true;
  };

  const handleCreate = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (checkError()) {
      addTransaction({
        name,
        type,
        amount: Number(amount),
      });

      reset();
    }
  };

  const handleUpdate = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (checkError()) {
      updateTransaction({
        id: editing.id,
        data: {
          name,
          type,
          amount,
        },
      });

      setEditMode(false);
      reset();
    }
  };

  const cancelEditMode = () => {
    reset();
    dispatch(editInActive());
    setEditMode(false);
  };

  useEffect(() => {
    if (addIsSuccess) {
      setSuccess("Transaction is successfully added");
    } else if (updateIsSuccess) {
      setSuccess("Transaction is successfully updated");
    }
  }, [updateIsSuccess, addIsSuccess]);

  useEffect(() => {
    if (success.length > 1) {
      setTimeout(() => {
        setSuccess("");
      }, 5000);
    }
  }, [success]);

  return (
    <div className="bg-[#f5f5f5] p-5">
      {success.length > 1 && <Success message={success} />}
      {error.length > 1 && <Error message={error} />}
      <h3 className="text-xl font-medium">Add new transaction</h3>

      <form onSubmit={editMode ? handleUpdate : handleCreate}>
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
              onChange={() => setType("income")}
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
              onChange={() => setType("expense")}
            />
            <label>Expense</label>
          </div>
        </div>

        <div className="flex gap-3 my-3">
          <label>Amount</label>
          <input
            type="number"
            required
            placeholder="Enter amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="px-1 py-1 border-[1px] border-current rounded-sm w-full"
          />
        </div>

        <button
          disabled={addLoading || updateLoading}
          className="w-[100%] border-0 cursor-pointer p-2 text-white bg-[#4338ca] hover:bg-[#094d3d]"
          type="submit"
        >
          {editMode ? "Update Transaction" : "Add Transaction"}
        </button>

        {!addLoading && !updateLoading && (addIsError || updateIsError) && (
          <p className="error">Something went wrong</p>
        )}
      </form>

      {editMode && (
        <button
          className="w-[100%] border-0 cursor-pointer p-2 mt-3 text-white bg-[#ec3d5ade] hover:bg-[#e64242]"
          onClick={cancelEditMode}
        >
          Cancel Edit
        </button>
      )}
    </div>
  );
};

export default Form;
