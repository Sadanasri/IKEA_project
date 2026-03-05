import React, { useRef, useEffect, useState } from 'react';

export default function SortDropdown({ sortValue, setSortValue }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleChange = (e) => {
        setSortValue(e.target.value);
        setIsOpen(false);
    };

    return (
        <div ref={dropdownRef} style={{ position: 'relative' }}>
            <button
                className={`toolbar-btn secondary-btn ${isOpen ? 'active' : ''}`}
                data-filter="Sort"
                onClick={() => setIsOpen(!isOpen)}
            >
                Sort <i className='bx bx-chevron-down'></i>
            </button>
            <div className={`dropdown-menu ${isOpen ? 'show' : ''}`} id="sort-dropdown" style={{ left: 0 }}>
                <ul>
                    <li><label><input type="radio" name="sort" value="relevance" checked={sortValue === 'relevance'} onChange={handleChange} /> Best match</label></li>
                    <li><label><input type="radio" name="sort" value="price-low" checked={sortValue === 'price-low'} onChange={handleChange} /> Price: low to high</label></li>
                    <li><label><input type="radio" name="sort" value="price-high" checked={sortValue === 'price-high'} onChange={handleChange} /> Price: high to low</label></li>
                    <li><label><input type="radio" name="sort" value="newest" checked={sortValue === 'newest'} onChange={handleChange} /> Newest</label></li>
                    <li><label><input type="radio" name="sort" value="name-asc" checked={sortValue === 'name-asc'} onChange={handleChange} /> Name</label></li>
                </ul>
            </div>
        </div>
    );
}
