import React from 'react';

const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN').format(price);
};

export default function ProductCard({ product, addToCart }) {
    const hasOriginalPrice = product.originalPrice && product.originalPrice > product.price;
    const mainBadge = product.badge ? (
        <span className={`badge ${product.badge.toLowerCase().includes('drop') ? 'price-drop' : product.badge.toLowerCase() === 'new' ? 'new' : ''}`}>
            {product.badge}
        </span>
    ) : null;

    const [isAdding, setIsAdding] = React.useState(false);

    const handleAdd = (e) => {
        e.stopPropagation();
        addToCart(product);
        setIsAdding(true);
        setTimeout(() => setIsAdding(false), 800);
    };

    const renderEmptyStars = (rating) => {
        let stars = [];
        const fullStars = Math.floor(rating);
        const hasHalf = rating % 1 !== 0;
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) stars.push(<i key={i} className='bx bxs-star'></i>);
            else if (i === fullStars && hasHalf) stars.push(<i key={i} className='bx bxs-star-half'></i>);
            else stars.push(<i key={i} className='bx bx-star'></i>);
        }
        return stars;
    };

    const renderColorOptions = (colors) => {
        if (!colors || colors.length === 0) return null;
        const maxToDisplay = 4;
        return (
            <div className="color-options">
                {colors.slice(0, maxToDisplay).map((color, idx) => (
                    <div key={idx} className="color-swatch" style={{ backgroundColor: color }}></div>
                ))}
                {colors.length > maxToDisplay && (
                    <span style={{ fontSize: '12px', color: 'var(--text-sec)', display: 'flex', alignItems: 'center' }}>
                        +{colors.length - maxToDisplay}
                    </span>
                )}
            </div>
        );
    };

    return (
        <div className="product-card">
            <div className="badges">
                {mainBadge}
            </div>
            <div className="product-image-wrapper">
                <img src={product.image} loading="lazy" alt={product.name} className="product-image" />
                <img src={product.hoverImage} loading="lazy" alt={`${product.name} alternate`} className="product-image hover-img" />
                <button
                    className="add-to-cart-quick"
                    aria-label="Add to bag"
                    onClick={handleAdd}
                    style={isAdding ? { background: '#2e8b57', transform: 'translateY(0) scale(1.1)', opacity: 1 } : {}}
                >
                    <i className={isAdding ? 'bx bx-check' : 'bx bx-shopping-bag'}></i>
                </button>
            </div>
            <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-desc">{product.desc}</p>
                <div className="product-price">
                    <span className="price-symbol">Rs.</span>
                    <span>{formatPrice(product.price)}</span>
                    {hasOriginalPrice && <span className="price-regular">Rs. {formatPrice(product.originalPrice)}</span>}
                </div>
                <div className="rating">
                    {renderEmptyStars(product.rating)}
                    <span className="rating-count">({product.reviews})</span>
                </div>
                {renderColorOptions(product.colors)}
            </div>
        </div>
    );
}
