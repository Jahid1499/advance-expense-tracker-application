import { useSelector } from "react-redux";
import Button from "./Button";

type PaginationTypes = {
  total: number;
};

const Pagination = ({ total }: PaginationTypes) => {
  const { pageNumber } = useSelector((state) => state.pagination);

  const pages = [];
  if (total > 0) {
    for (
      let i = 1;
      i <=
      Math.ceil(total / import.meta.env.VITE_ENVIRONMENT_PAGE_PER_TRANSACTION);
      i++
    ) {
      pages.push(i);
    }
  }

  console.log(pages);

  return (
    <>
      {pages.length > 0 &&
        pages.map((page) => (
          <Button key={page} buttonStatus={pageNumber === page} title={page} />
          // <button
          //   key={page}
          //   style={pageNumber === index + 1 ? styleOne : styleTwo}
          //   onClick={() => paginateHandler(page)}
          // >
          //   {page}
          // </button>
        ))}
    </>
  );
};

export default Pagination;
