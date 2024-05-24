import { Link } from "react-router-dom";
import TransactionList from "../components/home/TransactionList";
import Balance from "../ui/Balance";
import Form from "../ui/Form";

const Home = () => {
  return (
    <>
      <Balance />
      <Form />
      <TransactionList />
      <button className="font-bold cursor-pointer text-white mt-2 px-4 py-2 border-0 bg-[#42855B] mx-auto block rounded-sm">
        <Link to="/transactions">View all transaction</Link>
      </button>
    </>
  );
};

export default Home;
