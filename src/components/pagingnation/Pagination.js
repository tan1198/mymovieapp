import React from 'react';
import ReactPaginate from 'react-paginate';
const Pagination = props => {

    return (
        <ReactPaginate
            onPageChange={props.handlePageClick}
            pageCount={props.pageCount}
            renderOnZeroPageCount={null}
            pageRangeDisplayed={1}
            breakLabel="..."
            containerClassName='pagination-container'
            nextLinkClassName='pagination-item'
            previousLinkClassName='pagination-item'
            disabledLinkClassName="hidden"
            pageLinkClassName='pagination-item'
            breakLinkClassName="inline-block px-[6px] py-[15px] text-[rgb(24,49,83)]"
            activeLinkClassName="!text-white !bg-[rgb(20,110,190)]"
        ></ReactPaginate>
    );
};

export default Pagination;