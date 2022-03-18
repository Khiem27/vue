import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

Pagination.propTypes = {};

function Pagination(props) {
  const {
    postsPerPage,
    totalPosts,
    paginate,
    indexPagination,
    handleActivePagination,
  } = props;

  const [value, setValue] = useState([]);

  const pageNumbers = [];

  useEffect(() => {
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    setValue(pageNumbers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postsPerPage, totalPosts]);

  const doubleFuncInc = (index) => {
    if (index + 2 <= 5) {
      handleActivePagination("increase");
      paginate(index + 2);
    }
  };

  const doubleFuncDec = (index) => {
    if (index >= 1) {
      handleActivePagination("decrease");
      paginate(index);
    }
  };

  return (
    <div class="row">
      <div class="col-12">
        <div class="basic-pagination basic-pagination-2 text-center">
          <ul>
            <li>
              <Link onClick={() => doubleFuncDec(indexPagination)} to="#">
                <i class="fas fa-angle-double-left"></i>
              </Link>
            </li>
            {value.map((number, index) => (
              <li
                onClick={() => handleActivePagination(index)}
                key={index}
                class={indexPagination === index ? "active" : " "}
              >
                <Link onClick={() => paginate(index + 1)} to="#">
                  {index + 1}
                </Link>
              </li>
            ))}
            <li>
              <Link onClick={() => doubleFuncInc(indexPagination)} to="#">
                <i class="fas fa-angle-double-right"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
