// Dummy Product Data
const products = [
    {
        id: "p1",
        name: "KIVIK",
        desc: "3-seat sofa, Tibbleby beige/grey",
        price: 35990,
        originalPrice: 42990,
        badge: "Price Drop",
        rating: 4.5,
        reviews: 128,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600",
        hoverImage: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=600",
        category: "sofas",
        colors: ["#d2cdb8", "#5b5c5e", "#2c3e50"],
        isNew: false
    },
    {
        id: "p2",
        name: "FRIHETEN",
        desc: "Corner sofa-bed with storage, Skiftebo dark grey",
        price: 49990,
        badge: "Best Seller",
        rating: 4.8,
        reviews: 842,
        image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=600",
        hoverImage: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&q=80&w=600",
        category: "sofabeds",
        colors: ["#5b5c5e", "#7b3d3d", "#1e3d59"],
        isNew: false
    },
    {
        id: "p3",
        name: "STRANDMON",
        desc: "Wing chair, Nordvalla dark grey",
        price: 19990,
        badge: "New",
        rating: 4.9,
        reviews: 215,
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=600",
        hoverImage: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=600",
        category: "armchairs",
        colors: ["#5b5c5e", "#3a5f40", "#f0e6d2"],
        isNew: true
    },
    {
        id: "p4",
        name: "LANDSKRONA",
        desc: "2-seat sofa, Gunnared light green",
        price: 45990,
        rating: 4.2,
        reviews: 45,
        image: "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&q=80&w=600",
        hoverImage: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&q=80&w=600",
        category: "sofas",
        colors: ["#8b9d83", "#5b5c5e", "#e8d8c8"],
        isNew: false
    },
    {
        id: "p5",
        name: "MORABO",
        desc: "Sofa, Grann/Bomstad brown",
        price: 65990,
        badge: "",
        rating: 4.6,
        reviews: 76,
        image: "https://images.unsplash.com/photo-1605680016499-dc136398bffe?auto=format&fit=crop&q=80&w=600",
        hoverImage: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&q=80&w=600",
        category: "sofas",
        colors: ["#654321", "#000000", "#e8d8c8"],
        isNew: false
    },
    {
        id: "p6",
        name: "POÄNG",
        desc: "Armchair, Birch veneer/Hillared beige",
        price: 8990,
        originalPrice: 10990,
        badge: "Price Drop",
        rating: 4.8,
        reviews: 1204,
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=600",
        hoverImage: "https://images.unsplash.com/photo-1506898667547-42e22a46e125?auto=format&fit=crop&q=80&w=600",
        category: "armchairs",
        colors: ["#e8d8c8", "#5b5c5e", "#990000"],
        isNew: false
    },
    {
        id: "p7",
        name: "SÖDERHAMN",
        desc: "3-seat section, Viarp beige/brown",
        price: 39990,
        badge: "New",
        rating: 4.3,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&q=80&w=600",
        hoverImage: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=600",
        category: "sofas",
        colors: ["#a0937d", "#5b5c5e"],
        isNew: true
    },
    {
        id: "p8",
        name: "EKTORP",
        desc: "2-seat sofa, Hallarp beige",
        price: 26990,
        rating: 4.7,
        reviews: 350,
        image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=600",
        hoverImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600",
        category: "sofas",
        colors: ["#e8d8c8", "#ffffff", "#5b5c5e"],
        isNew: false
    }
];

// Replicate data to have more pages for demonstration
let productDB = [...products, ...products.map(p => ({...p, id: p.id+'-2'})), ...products.map(p => ({...p, id: p.id+'-3'}))];

// State
let state = {
    products: productDB,
    filteredProducts: productDB,
    currentPage: 1,
    itemsPerPage: 8,
    sortValue: 'relevance',
    filters: {
        category: ['sofas'],
        minPrice: 0,
        maxPrice: 100000
    }
};

// DOM Elements
const gridEl = document.getElementById('product-grid');
const countEl = document.getElementById('product-count');
const sortDropdownBtn = document.querySelector('[data-filter="Sort"]');
const sortDropdownMenu = document.getElementById('sort-dropdown');
const sortRadios = document.querySelectorAll('input[name="sort"]');
const categoryFilters = document.querySelectorAll('.category-filter');
const activeFiltersEl = document.getElementById('active-filters');
const paginationEl = document.getElementById('pagination');

// Initialization
function init() {
    updateFiltersFromDOM();
    applyFilters();
    setupEventListeners();
}

// Function to format price
const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN').format(price);
};

// Render Products
function renderProducts() {
    gridEl.innerHTML = '';
    
    // Pagination logic
    const startIdx = (state.currentPage - 1) * state.itemsPerPage;
    const endIdx = startIdx + state.itemsPerPage;
    const paginatedItems = state.filteredProducts.slice(startIdx, endIdx);

    if (paginatedItems.length === 0) {
        gridEl.innerHTML = '<div style="grid-column: 1/-1; padding: 3rem; text-align: center; color: var(--text-sec); font-size: 1.125rem;">No products found matching your criteria.</div>';
    }

    paginatedItems.forEach(product => {
        const hasOriginalPrice = product.originalPrice && product.originalPrice > product.price;
        const mainBadge = product.badge ? `<span class="badge ${product.badge.toLowerCase().includes('drop') ? 'price-drop' : product.badge.toLowerCase() === 'new' ? 'new' : ''}">${product.badge}</span>` : '';
        
        const cardHTML = `
            <div class="product-card">
                <div class="badges">
                    ${mainBadge}
                </div>
                <div class="product-image-wrapper">
                    <img src="${product.image}" loading="lazy" alt="${product.name}" class="product-image">
                    <img src="${product.hoverImage}" loading="lazy" alt="${product.name} alternate" class="product-image hover-img">
                    <button class="add-to-cart-quick" aria-label="Add to bag">
                        <i class='bx bx-shopping-bag'></i>
                    </button>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-desc">${product.desc}</p>
                    <div class="product-price">
                        <span class="price-symbol">Rs.</span>
                        <span>${formatPrice(product.price)}</span>
                        ${hasOriginalPrice ? `<span class="price-regular">Rs. ${formatPrice(product.originalPrice)}</span>` : ''}
                    </div>
                    <div class="rating">
                        ${getStaticStars(product.rating)}
                        <span class="rating-count">(${product.reviews})</span>
                    </div>
                    ${renderColorOptions(product.colors)}
                </div>
            </div>
        `;
        gridEl.insertAdjacentHTML('beforeend', cardHTML);
    });

    updatePaginationInfo();
    renderPaginationControls();
    countEl.textContent = `${state.filteredProducts.length} items`;
}

function getStaticStars(rating) {
    let starsHTML = '';
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    for(let i=0; i<5; i++) {
        if(i < fullStars) starsHTML += "<i class='bx bxs-star'></i>";
        else if(i === fullStars && hasHalf) starsHTML += "<i class='bx bxs-star-half'></i>";
        else starsHTML += "<i class='bx bx-star'></i>";
    }
    return starsHTML;
}

function renderColorOptions(colors) {
    if(!colors || colors.length === 0) return '';
    const maxToDisplay = 4;
    let html = '<div class="color-options">';
    colors.slice(0, maxToDisplay).forEach(color => {
        html += `<div class="color-swatch" style="background-color: ${color}"></div>`;
    });
    if(colors.length > maxToDisplay) {
        html += `<span style="font-size: 12px; color: var(--text-sec); display: flex; align-items:center;">+${colors.length - maxToDisplay}</span>`;
    }
    html += '</div>';
    return html;
}

// Logic: Filtering & Sorting
function updateFiltersFromDOM() {
    // Categories
    state.filters.category = Array.from(categoryFilters)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    
    // Price
    state.filters.minPrice = parseInt(document.getElementById('min-price').value) || 0;
    state.filters.maxPrice = parseInt(document.getElementById('max-price').value) || 100000;
}

function applyFilters() {
    let temp = [...state.products];

    // Filter by Category
    if (state.filters.category.length > 0) {
        temp = temp.filter(p => state.filters.category.includes(p.category));
    }

    // Filter by Price
    temp = temp.filter(p => p.price >= state.filters.minPrice && p.price <= state.filters.maxPrice);

    // Sort
    switch (state.sortValue) {
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
        default: // 'relevance' - default order
            break;
    }

    state.filteredProducts = temp;
    state.currentPage = 1; // Reset to page 1
    
    renderActiveFilterChips();
    renderProducts();
}

function renderActiveFilterChips() {
    activeFiltersEl.innerHTML = '';
    let hasFilters = false;

    // Categories
    state.filters.category.forEach(cat => {
        hasFilters = true;
        const name = document.querySelector(`.category-filter[value="${cat}"]`).parentNode.innerText.trim();
        activeFiltersEl.insertAdjacentHTML('beforeend', `
            <div class="filter-chip">
                <span>${name}</span>
                <button onclick="removeFilter('category', '${cat}')"><i class='bx bx-x'></i></button>
            </div>
        `);
    });

    if (hasFilters) {
        activeFiltersEl.insertAdjacentHTML('beforeend', `
            <button class="clear-all-filters" onclick="clearAllFilters()">Clear all</button>
        `);
    }
}

window.removeFilter = function(type, value) {
    if (type === 'category') {
        const cb = document.querySelector(`.category-filter[value="${value}"]`);
        if(cb) cb.checked = false;
        updateFiltersFromDOM();
        applyFilters();
    }
};

window.clearAllFilters = function() {
    categoryFilters.forEach(cb => cb.checked = false);
    document.getElementById('min-price').value = 0;
    document.getElementById('max-price').value = 100000;
    updateFiltersFromDOM();
    applyFilters();
};

window.toggleSection = function(headerElem) {
    headerElem.classList.toggle('collapsed');
};

// Pagination Logic
function updatePaginationInfo() {
    const total = state.filteredProducts.length;
    if(total === 0) {
        document.getElementById('page-start').textContent = 0;
        document.getElementById('page-end').textContent = 0;
        document.getElementById('total-count').textContent = 0;
        return;
    }
    const start = (state.currentPage - 1) * state.itemsPerPage + 1;
    const end = Math.min(start + state.itemsPerPage - 1, total);
    
    document.getElementById('page-start').textContent = start;
    document.getElementById('page-end').textContent = end;
    document.getElementById('total-count').textContent = total;
}

function renderPaginationControls() {
    const totalPages = Math.ceil(state.filteredProducts.length / state.itemsPerPage);
    paginationEl.innerHTML = '';
    
    if (totalPages <= 1) return;

    // Prev
    const prevBtn = `<button class="page-btn" ${state.currentPage === 1 ? 'disabled' : ''} onclick="changePage(${state.currentPage - 1})"><i class='bx bx-chevron-left'></i></button>`;
    paginationEl.insertAdjacentHTML('beforeend', prevBtn);

    // Dynamic Pages
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= state.currentPage - 1 && i <= state.currentPage + 1)) {
            const pageBtn = `<button class="page-btn ${i === state.currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
            paginationEl.insertAdjacentHTML('beforeend', pageBtn);
        } else if (i === 2 || i === totalPages - 1) {
            paginationEl.insertAdjacentHTML('beforeend', `<span style="display:flex; align-items:end;">...</span>`);
        }
    }

    // Next
    const nextBtn = `<button class="page-btn" ${state.currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${state.currentPage + 1})"><i class='bx bx-chevron-right'></i></button>`;
    paginationEl.insertAdjacentHTML('beforeend', nextBtn);
}

window.changePage = function(page) {
    const totalPages = Math.ceil(state.filteredProducts.length / state.itemsPerPage);
    if(page >= 1 && page <= totalPages) {
        state.currentPage = page;
        renderProducts();
        window.scrollTo({ top: document.querySelector('.page-header').offsetTop - 100, behavior: 'smooth' });
    }
}

// Events
function setupEventListeners() {
    // Sort Dropdown Toggle
    if (sortDropdownBtn) {
        sortDropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sortDropdownMenu.classList.toggle('show');
            sortDropdownBtn.classList.toggle('active', sortDropdownMenu.classList.contains('show'));
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        sortDropdownMenu.classList.remove('show');
        if(sortDropdownBtn) sortDropdownBtn.classList.remove('active');
    });

    sortDropdownMenu.addEventListener('click', (e) => e.stopPropagation());

    // Sort Radios Change
    sortRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            state.sortValue = e.target.value;
            sortDropdownMenu.classList.remove('show');
            if(sortDropdownBtn) sortDropdownBtn.classList.remove('active');
            applyFilters();
        });
    });

    // Filtering inputs change
    categoryFilters.forEach(cb => {
        cb.addEventListener('change', () => {
            updateFiltersFromDOM();
            applyFilters();
        });
    });

    document.getElementById('apply-price-btn').addEventListener('click', () => {
        updateFiltersFromDOM();
        applyFilters();
    });

    // Mobile Sidebar Setup
    const mobileFilterBtn = document.getElementById('mobile-filter-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');
    const sidebar = document.getElementById('filter-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const showResultsBtn = document.getElementById('show-results-btn');
    const clearFiltersBtn = document.getElementById('clear-filters-btn');

    const toggleSidebar = () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('show');
        document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
    };

    if(mobileFilterBtn) mobileFilterBtn.addEventListener('click', toggleSidebar);
    if(closeSidebarBtn) closeSidebarBtn.addEventListener('click', toggleSidebar);
    if(overlay) overlay.addEventListener('click', toggleSidebar);
    if(showResultsBtn) {
        showResultsBtn.addEventListener('click', () => {
            toggleSidebar();
            window.scrollTo({ top: document.querySelector('.page-header').offsetTop - 100, behavior: 'smooth' });
        });
    }

    if(clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            window.clearAllFilters();
            toggleSidebar();
        });
    }
}

// Start
document.addEventListener('DOMContentLoaded', init);
