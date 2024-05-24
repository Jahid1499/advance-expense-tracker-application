import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [editMode, setEditMode] = useState(false);

  const reset = () => {
    setName("");
    setType("");
    setAmount("");
  };

  const handleCreate = (e) => {
    e.preventDefault();
    // dispatch(
    //   createTransaction({
    //     name,
    //     type,
    //     amount: Number(amount),
    //   })
    // );
    reset();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // dispatch(
    //   changeTransaction({
    //     id: editing?.id,
    //     data: {
    //       name: name,
    //       amount: amount,
    //       type: type,
    //     },
    //   })
    // );
    setEditMode(false);
    reset();
  };

  const cancelEditMode = () => {
    reset();
    setEditMode(false);
  };

  return (
    <div className="bg-[#f5f5f5] p-5">
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
            onChange={(e) => setAmount(e.target.value)}
            className="px-1 py-1 border-[1px] border-current rounded-sm w-full"
          />
        </div>

        <button
          disabled={false}
          className="w-[100%] border-0 cursor-pointer p-2 text-white bg-[#4338ca] hover:bg-[#094d3d]"
          type="submit"
        >
          {editMode ? "Update Transaction" : "Add Transaction"}
        </button>

        {/* {!isLoading && isError && (
          <p className="error">There was an error occured</p>
        )} */}
      </form>

      {editMode && (
        <button className="btn cancel_edit" onClick={cancelEditMode}>
          Cancel Edit
        </button>
      )}
    </div>
  );
};

export default Form;
