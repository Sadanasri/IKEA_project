export const products = [
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
export const productDB = [
    ...products,
    ...products.map(p => ({ ...p, id: p.id + '-2' })),
    ...products.map(p => ({ ...p, id: p.id + '-3' }))
];
