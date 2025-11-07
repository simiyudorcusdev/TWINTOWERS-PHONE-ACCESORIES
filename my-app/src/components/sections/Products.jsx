import { useState } from "react";

export default function Products() {
    const categories = ["All", "Smartphones", "Laptops", "Audio Gear", "Wearables"];

    const products = [
        {
            id: 1,
            name: "iPhone 15 Pro",
            price: 1299,
            category: "Smartphones",
            img: "https://images.unsplash.com/photo-1703434123142-1b41a1b1055b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aXBob25lJTIwJTIwMTV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        },

        {
            id: 2,
            name: "Samsung Galaxy S24 Ultra",
            price: 1199,
            category: "Smartphones",
            img: "https://images.unsplash.com/photo-1706300896423-7d08346e8dbb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftc3VuZyUyMHMyNHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        },

        {
            id: 3,
            name: "MacBook Air M3",
            price: 1499,
            category: "Laptops",
            img: "https://images.unsplash.com/photo-1710905129498-e7d0c21ac011?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFjYm9vayUyMGFpciUyMG0zfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
        },

        {
            id: 4,
            name: "ASUS ROG Zephyrus G14",
            price: 1799,
            category: "Laptops",
            img: "https://images.unsplash.com/photo-1508965493703-4823ac484045?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFzdXMlMjByb2clMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        },

        {
            id: 5,
            name: "Sony WH-1000XM5",
            price: 399,
            category: "Audio Gear",
            img: "https://images.unsplash.com/photo-1641048930621-ab5d225ae5b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29ueSUyMHdofGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
        },

        {
            id: 6,
            name: "JBL Flip 6 Speaker",
            price: 149,
            category: "Audio Gear",
            img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amJsJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        },

        {
            id: 7,
            name: "Apple Watch Series 9",
            price: 499,
            category: "Wearables",
            img: "https://images.unsplash.com/photo-1624096104992-9b4fa3a279dd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        },

       {
    id: 8,
    name: "Fitbit Charge 6",
    price: 199,
    category: "Wearables",
    img: "https://images.unsplash.com/photo-1724758122365-cba651a928e3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGZpdGJpdCUyMGNoYXJnZSUyMDZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  },
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts =
        selectedCategory === "All"
            ? products
            : products.filter((p) => p.category === selectedCategory);

    return (
        <section className="py-24 bg-white" id="products">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
                    Our <span className="text-primary">Products</span>
                </h2>
                <p className="text-neutral-dark/70 max-w-2xl mx-auto mb-12">
                    Explore the latest tech and gadgets — all at unbeatable prices.
                </p>

                {/* Category Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${selectedCategory === cat
                                ? "bg-primary text-white border-primary"
                                : "bg-white text-neutral-dark border-neutral-300 hover:bg-primary/10"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {filteredProducts.map((p) => (
                        <div
                            key={p.id}
                            className="bg-neutral-light rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition group"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={p.img}
                                    alt={p.name}
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-5 text-left">
                                <h3 className="text-lg font-semibold text-neutral-dark">{p.name}</h3>
                                <p className="text-primary font-bold mt-1">${p.price}</p>
                                <button className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/80 transition">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
