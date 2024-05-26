import { useSelector } from "react-redux";
import Button from "./Button";

type PaginationPropsTypes = {
  total: number;
};

type PaginationTypes = {
  pagination: {
    pageNumber: number;
  };
};

const Pagination = ({ total }: PaginationPropsTypes) => {
  const { pageNumber } = useSelector(
    (state: PaginationTypes) => state.pagination
  );

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
