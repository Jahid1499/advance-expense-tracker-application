const Balance = () => {
  // const calculateIncome = (transactions) => {
  //   let income = 0;
  //   transactions.forEach((transaction) => {
  //     const { type, amount } = transaction;
  //     console.log(typeof amount);
  //     if (type === "income") {
  //       income += amount;
  //     } else {
  //       income -= amount;
  //     }
  //   });

  //   return income;
  // };

  return (
    <div className="bg-[#4338ca] text-white px-2 py-5">
      <p>Your Current Balance</p>
      <h3 className="text-3xl font-bold">
        <span className="text-4xl">৳</span> 120
        {/* {transactions?.length > 0 ? (
          <span>{numberWithCommas(calculateIncome(transactions))}</span>
        ) : (
          0
        )} */}
      </h3>
    </div>
  );
};

export default Balance;
