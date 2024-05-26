import { useDispatch } from "react-redux";
import { pagination } from "../../features/pagination/paginationSlice";

type ButtonTypes = {
  title: number;
  buttonStatus: boolean;
};

//   padding: "8px 20px",
//   color: "#fff",
//   cursor: "pointer",
//   border: "none",
//   margin: "10px 4px",
//   fontWeight: "bold",
//   borderRadius: "4px",

// 5800FF
// 0096FF

const Button = ({ title, buttonStatus }: ButtonTypes) => {
  const dispatch = useDispatch();

  const paginateHandler = (number: number) => {
    dispatch(pagination(number));
  };

  return (
    <button
      className={`px-4 py-2 text-white cursor-pointer mx-2 my-1 font-bold rounded-sm ${
        buttonStatus ? "bg-[#5800FF]" : "bg-[#0096FF]"
      }`}
      onClick={() => paginateHandler(title)}
    >
      {title}
    </button>
  );
};

export default Button;
