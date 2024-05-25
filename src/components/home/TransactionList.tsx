import { useGetTransactionsQuery } from "../../features/transactions/transactionsApi";
import Error from "../../ui/Error";
import Transaction from "../../ui/Transaction";

type TransactionTypes = {
  amount: number;
  id: 3;
  name: string;
  type: "expense" | "income";
};

const TransactionList = () => {
  const { data, isLoading, isError } = useGetTransactionsQuery({});

  let content = null;

  if (isLoading) {
    content = <h1>Loading........</h1>;
  }

  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }

  if (!isLoading && !isError && data?.length === 0) {
    content = <Error message="No transaction found!" />;
  }

  if (!isLoading && !isError && data?.length > 0) {
    content = data.map((transaction: TransactionTypes) => (
      <Transaction key={transaction.id} transaction={transaction} />
    ));
  }

  return (
    <>
      <p className="text-xl font-medium text-center my-4 ">Your Transactions</p>
      <ul>{content}</ul>
    </>
  );
};

export default TransactionList;
