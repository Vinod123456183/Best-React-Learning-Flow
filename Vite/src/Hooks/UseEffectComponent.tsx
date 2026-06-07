import React, { useEffect, useState } from "react";

// 1. Define TypeScript types for the product
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // 3. Render products
  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            width: "200px",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", height: "150px", objectFit: "contain" }}
          />
          <h3 style={{ fontSize: "16px" }}>{product.title}</h3>
          <p>${product.price}</p>
          <p style={{ fontSize: "12px" }}>Rating: {product.rating.rate} ⭐</p>
        </div>
      ))}
    </div>
  );
};

export default App;