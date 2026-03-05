import React from 'react';

export default function Pagination({ currentPage, totalItems, itemsPerPage, onPageChange }) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (totalPages <= 1) return null;

    const start = (currentPage - 1) * itemsPerPage + 1;
    const end = Math.min(start + itemsPerPage - 1, totalItems);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const getPages = () => {
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
                pages.push(
                    <button
                        key={i}
                        className={`page-btn ${i === currentPage ? 'active' : ''}`}
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </button>
                );
            } else if (i === 2 || i === totalPages - 1) {
                // To avoid multiple ellipsis right next to each other
                if (pages[pages.length - 1].key !== `ellipsis-${i - 1}`) {
                    pages.push(<span key={`ellipsis-${i}`} style={{ display: 'flex', alignItems: 'flex-end' }}>...</span>);
                }
            }
        }
        return pages;
    };

    return (
        <div className="pagination-container">
            <div className="pagination-info">
                Showing <span id="page-start">{start}</span> - <span id="page-end">{end}</span> of <span id="total-count">{totalItems}</span>
            </div>
            <div className="pagination" id="pagination">
                <button
                    className="page-btn"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    <i className='bx bx-chevron-left'></i>
                </button>

                {getPages()}

                <button
                    className="page-btn"
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    <i className='bx bx-chevron-right'></i>
                </button>
            </div>
        </div>
    );
}
