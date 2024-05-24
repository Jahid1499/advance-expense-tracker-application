import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Transaction from "./pages/Transaction";

function App() {
  return (
    <>
      <div className="flex min-w-full flex-col">
        <div className="p-[20px] text-center bg-[#4338ca] text-white text-4xl font-bold">
          <h1>Expense Tracker</h1>
        </div>
        <div className="min-w-[26%] mx-auto my-5">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/transactions" element={<Transaction />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
