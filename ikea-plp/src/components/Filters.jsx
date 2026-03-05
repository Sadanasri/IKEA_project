import React, { useState } from 'react';

export default function Filters({ filters, setFilters, isMobileOpen, setIsMobileOpen }) {
    const [collapsed, setCollapsed] = useState({ category: false, price: false });

    const toggleSection = (section) => {
        setCollapsed(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const handleCategoryChange = (e) => {
        const { value, checked } = e.target;
        setFilters(prev => {
            const newCategories = checked
                ? [...prev.category, value]
                : prev.category.filter(c => c !== value);
            return { ...prev, category: newCategories };
        });
    };

    const handlePriceApply = () => {
        const min = parseInt(document.getElementById('min-price').value) || 0;
        const max = parseInt(document.getElementById('max-price').value) || 100000;
        setFilters(prev => ({ ...prev, minPrice: min, maxPrice: max }));
    };

    const handleClearAll = () => {
        setFilters({ category: [], minPrice: 0, maxPrice: 100000 });
        document.getElementById('min-price').value = 0;
        document.getElementById('max-price').value = 100000;
        if (isMobileOpen) {
            setIsMobileOpen(false);
        }
    };

    return (
        <>
            <aside className={`sidebar ${isMobileOpen ? 'open' : ''}`} id="filter-sidebar">
                <div className="sidebar-header mobile-only">
                    <h2>Filter and sort</h2>
                    <button id="close-sidebar-btn" aria-label="Close filters" onClick={() => setIsMobileOpen(false)}>
                        <i className='bx bx-x'></i>
                    </button>
                </div>

                <div className="filter-section">
                    <div className={`filter-header ${collapsed.category ? 'collapsed' : ''}`} onClick={() => toggleSection('category')}>
                        <h3>Category</h3>
                        <i className='bx bx-chevron-up'></i>
                    </div>
                    <div className="filter-content">
                        <label className="checkbox-container">
                            <input type="checkbox" value="sofas" className="category-filter" checked={filters.category.includes('sofas')} onChange={handleCategoryChange} />
                            <span className="checkmark"></span>
                            Fabric sofas
                        </label>
                        <label className="checkbox-container">
                            <input type="checkbox" value="armchairs" className="category-filter" checked={filters.category.includes('armchairs')} onChange={handleCategoryChange} />
                            <span className="checkmark"></span>
                            Armchairs
                        </label>
                        <label className="checkbox-container">
                            <input type="checkbox" value="sofabeds" className="category-filter" checked={filters.category.includes('sofabeds')} onChange={handleCategoryChange} />
                            <span className="checkmark"></span>
                            Sofa-beds
                        </label>
                    </div>
                </div>

                <div className="filter-section">
                    <div className={`filter-header ${collapsed.price ? 'collapsed' : ''}`} onClick={() => toggleSection('price')}>
                        <h3>Price</h3>
                        <i className='bx bx-chevron-up'></i>
                    </div>
                    <div className="filter-content">
                        <div className="price-range">
                            <div className="price-inputs">
                                <div className="input-group">
                                    <span className="currency">₹</span>
                                    <input type="number" id="min-price" defaultValue={filters.minPrice} min="0" />
                                </div>
                                <span className="separator">-</span>
                                <div className="input-group">
                                    <span className="currency">₹</span>
                                    <input type="number" id="max-price" defaultValue={filters.maxPrice} min="0" />
                                </div>
                            </div>
                            <button className="apply-btn" id="apply-price-btn" onClick={handlePriceApply}>Apply</button>
                        </div>
                    </div>
                </div>

                <div className="filter-actions mobile-only">
                    <button className="clear-btn" id="clear-filters-btn" onClick={handleClearAll}>Clear all</button>
                    <button className="show-results-btn" id="show-results-btn" onClick={() => setIsMobileOpen(false)}>Show products</button>
                </div>
            </aside>

            {/* Overlay for Sidebar */}
            <div className={`overlay ${isMobileOpen ? 'show' : ''}`} id="sidebar-overlay" onClick={() => setIsMobileOpen(false)}></div>
        </>
    );
}
