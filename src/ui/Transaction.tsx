import { useDispatch } from "react-redux";
import deleteImage from "../assets/images/delete.svg";
import editImage from "../assets/images/edit.svg";
import { useDeleteTransactionMutation } from "../features/transactions/transactionsApi";
import { editActive } from "../features/transactions/transactionsSlice";
import numberWithCommas from "../utils/numberWithCommas";

type TransactionTypes = {
  transaction: {
    amount: number;
    id: 3;
    name: string;
    type: "expense" | "income";
  };
};

const Transaction = ({ transaction }: TransactionTypes) => {
  const { id, name, amount, type } = transaction;
  const [deleteTransaction] = useDeleteTransactionMutation();
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editActive(transaction));
  };

  const handleDelete = () => {
    const result = confirm("Want to delete?");
    if (result) {
      deleteTransaction(id);
    }
  };

  return (
    <>
      <li
        className={`m-auto text-white px-2 py-2 my-3 flex justify-between items-center ${
          type === "expense" ? "bg-[#e6425e]" : "bg-[#4338ca]"
        }`}
      >
        <p>{name}</p>
        <div className="flex justify-between items-center gap-2">
          <p>৳ {numberWithCommas(Number(amount))}</p>
          <button className="text-white cursor-pointer" onClick={handleEdit}>
            <img alt="Edit" className="w-[14px]" src={editImage} />
          </button>
          <button className="text-white cursor-pointer" onClick={handleDelete}>
            <img alt="Delete" className="w-[14px]" src={deleteImage} />
          </button>
        </div>
      </li>
    </>
  );
};

export default Transaction;
