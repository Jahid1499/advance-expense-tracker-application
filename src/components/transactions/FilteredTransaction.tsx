import { useSelector } from "react-redux";
import { useGetFilteredTransactionsQuery } from "../../features/transactions/transactionsApi";
import Transaction from "../../ui/Transaction";
import Pagination from "./Pagination";

const FilteredTransaction = () => {
  const { search, type } = useSelector((state) => state.filters);
  const { pageNumber } = useSelector((state) => state.pagination);

  const {
    data: transactions,
    isLoading,
    isError,
  } = useGetFilteredTransactionsQuery({
    search,
    type,
    pageNumber,
  });

  let content = null;
  if (isLoading) content = <p>Loading...</p>;

  if (!isLoading && isError)
    content = <p className="error">There was an error occured</p>;

  if (!isLoading && !isError && transactions?.data?.length > 0) {
    content = transactions?.data?.map((transaction) => (
      <Transaction key={transaction.id} transaction={transaction} />
    ));
  }

  return (
    <>
      <p className="text-xl font-medium text-center my-4 ">Your Transactions</p>
      <ul>{content}</ul>
      <div>
        <Pagination total={transactions?.totalCount} />
      </div>
    </>
  );
};

export default FilteredTransaction;