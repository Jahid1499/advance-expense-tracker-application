import { useGetTransactionsQuery } from "../features/transactions/transactionsApi";
import numberWithCommas from "../utils/numberWithCommas";

type TransactionTypes = {
  amount: number;
  id: 3;
  name: string;
  type: "expense" | "income";
};

const Balance = () => {
  const { data } = useGetTransactionsQuery({});

  const calculateIncome = () => {
    let income = 0;
    data.forEach((transaction: TransactionTypes) => {
      const { type, amount } = transaction;
      if (type === "income") {
        income += amount;
      } else {
        income -= amount;
      }
    });
    return income;
  };

  return (
    <div className="bg-[#4338ca] text-white px-2 py-5">
      <p>Your Current Balance</p>
      <h3 className="text-3xl font-bold">
        <span className="text-4xl">৳ </span>
        {data?.length > 0 ? (
          <span>{numberWithCommas(calculateIncome())}</span>
        ) : (
          0
        )}
      </h3>
    </div>
  );
};

export default Balance;
