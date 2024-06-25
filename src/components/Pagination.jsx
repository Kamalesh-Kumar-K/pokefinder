import React, { useState } from 'react';
import './Pagination.css';

const Pagination = ({ totalPosts, postsPerPage, onChangePage }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => {
        onChangePage(prevPage - 1);
        return prevPage - 1;
      });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => {
        onChangePage(prevPage + 1);
        return prevPage + 1;
      });
    }
  };

  return (
    <div className='pagination'>
      {totalPosts > 0 && (
        <>
          <button onClick={handlePrevious}>Previous</button>
          <span>{currentPage} of {totalPages}</span>
          <button onClick={handleNext}>Next</button>
        </>
      )}
    </div>
  );
};

export default Pagination;