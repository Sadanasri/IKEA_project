import React, { useState, useMemo, useEffect } from 'react';
import Filters from './Filters';
import SortDropdown from './SortDropdown';
import Pagination from './Pagination';
import ProductCard from './ProductCard';
import { productDB } from '../data/products';

export default function PLP({ addToCart }) {
    const [products] = useState(productDB);
    const [filters, setFilters] = useState({
        category: [],
        minPrice: 0,
        maxPrice: 100000
    });
    const [sortValue, setSortValue] = useState('relevance');
    const [currentPage, setCurrentPage] = useState(1);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const itemsPerPage = 8;

    // Memoize the filtered and sorted products
    const filteredProducts = useMemo(() => {
        let temp = [...products];

        // Filter by Category
        if (filters.category.length > 0) {
            temp = temp.filter(p => filters.category.includes(p.category));
        }

        // Filter by Price
        temp = temp.filter(p => p.price >= filters.minPrice && p.price <= filters.maxPrice);

        // Sort
        switch (sortValue) {
            case 'price-low':
                temp.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                temp.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                temp.sort((a, b) => (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1);
                break;
            case 'name-asc':
                temp.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default: // 'relevance' - keep default order from DB
                break;
        }

        return temp;
    }, [products, filters, sortValue]);

    // Reset pagination when data changes
    useEffect(() => {
        setCurrentPage(1);
    }, [filteredProducts.length]);

    // Get current page items
    const startIdx = (currentPage - 1) * itemsPerPage;
    const paginatedItems = filteredProducts.slice(startIdx, startIdx + itemsPerPage);

    const handleRemoveCategory = (catToRemove) => {
        setFilters(prev => ({
            ...prev,
            category: prev.category.filter(c => c !== catToRemove)
        }));
    };

    const getCategoryName = (catValue) => {
        const mapping = {
            'sofas': 'Fabric sofas',
            'armchairs': 'Armchairs',
            'sofabeds': 'Sofa-beds'
        };
        return mapping[catValue] || catValue;
    };

    const handleResetAll = () => {
        setFilters({ category: [], minPrice: 0, maxPrice: 100000 });
        setSortValue('relevance');
        setCurrentPage(1);
        const minPriceInput = document.getElementById('min-price');
        const maxPriceInput = document.getElementById('max-price');
        if (minPriceInput) minPriceInput.value = 0;
        if (maxPriceInput) maxPriceInput.value = 100000;
        document.querySelectorAll('.category-filter').forEach(cb => cb.checked = false);
    };

    return (
        <main className="main-content">
            <div className="breadcrumbs">
                <a href="#">Products</a> &gt; <span>Sofas & armchairs</span>
            </div>

            <div className="page-header">
                <h1>Sofas & armchairs</h1>
                <p className="subtitle">Comfort that looks as good as it feels. Explore our wide range of seating options.</p>
            </div>

            {/* Tool Bar: Filter & Sort */}
            <div className="toolbar">
                <div className="toolbar-left">
                    <button id="mobile-filter-btn" className="toolbar-btn primary-outline" onClick={() => setIsMobileOpen(true)}>
                        <span>Sort & Filter</span> <i className='bx bx-slider-alt'></i>
                    </button>
                    <div className="desktop-filters">
                        <SortDropdown sortValue={sortValue} setSortValue={setSortValue} />
                        <button className="toolbar-btn secondary-btn" data-filter="Size">Size <i className='bx bx-chevron-down'></i></button>
                        <button className="toolbar-btn secondary-btn" data-filter="Color">Color <i className='bx bx-chevron-down'></i></button>
                        <button className="toolbar-btn secondary-btn" data-filter="Price">Price <i className='bx bx-chevron-down'></i></button>
                        <button className="toolbar-btn secondary-btn" data-filter="Category">Category <i className='bx bx-chevron-down'></i></button>
                    </div>
                </div>
                <div className="toolbar-right">
                    <span id="product-count">{filteredProducts.length} items</span>
                </div>
            </div>

            {/* Layout */}
            <div className="plp-layout">
                {/* Sidebar / Applied Filters Summary (For Desktop) */}
                <Filters
                    filters={filters}
                    setFilters={setFilters}
                    isMobileOpen={isMobileOpen}
                    setIsMobileOpen={setIsMobileOpen}
                />

                {/* Product Grid Area */}
                <div className="product-area">
                    <div className="active-filters">
                        {filters.category.map(cat => (
                            <div className="filter-chip" key={cat}>
                                <span>{getCategoryName(cat)}</span>
                                <button onClick={() => handleRemoveCategory(cat)}><i className='bx bx-x'></i></button>
                            </div>
                        ))}
                        {(filters.category.length > 0 || filters.minPrice > 0 || filters.maxPrice < 100000 || sortValue !== 'relevance') && (
                            <button className="clear-all-filters" onClick={handleResetAll} style={{ fontWeight: 'bold' }}>
                                Reset/Clear Filters
                            </button>
                        )}
                    </div>

                    <div className="product-grid" id="product-grid">
                        {paginatedItems.length === 0 ? (
                            <div style={{ gridColumn: '1/-1', padding: '4rem 2rem', textAlign: 'center', background: 'var(--bg-sec)', borderRadius: '8px', margin: '2rem 0' }}>
                                <i className='bx bx-search' style={{ fontSize: '3rem', color: 'var(--text-sec)', marginBottom: '1rem' }}></i>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>No products found</h3>
                                <p style={{ color: 'var(--text-sec)', marginBottom: '1.5rem' }}>Try adjusting your filters or search criteria to find what you're looking for.</p>
                                <button
                                    onClick={handleResetAll}
                                    style={{ background: 'var(--text-main)', color: 'white', padding: '0.75rem 1.5rem', border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.875rem' }}
                                >
                                    Clear all filters
                                </button>
                            </div>
                        ) : (
                            paginatedItems.map(product => (
                                <ProductCard key={product.id} product={product} addToCart={addToCart} />
                            ))
                        )}
                    </div>

                    {/* Pagination */}
                    {filteredProducts.length > 0 && (
                        <Pagination
                            currentPage={currentPage}
                            totalItems={filteredProducts.length}
                            itemsPerPage={itemsPerPage}
                            onPageChange={(page) => {
                                setCurrentPage(page);
                                window.scrollTo({ top: document.querySelector('.page-header').offsetTop - 100, behavior: 'smooth' });
                            }}
                        />
                    )}
                </div>
            </div>
        </main>
    );
}
