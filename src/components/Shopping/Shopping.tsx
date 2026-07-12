import { useState } from "react";
import "./Shopping.css";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.png";

type Product = {
  id: number;
  image: string;
  title: string;
  price: string;
};

const products: Product[] = [
  {
    id: 1,
    image: img4,
    title: "Black Suit",
    price: "12000 DZ",
  },
  {
    id: 2,
    image: img3,
    title: "White Shirt",
    price: "8000 DZ",
  },
  {
    id: 3,
    image: img2,
    title: "Casual Polo",
    price: "9000 DZ",
  },
  {
    id: 4,
    image: img1,
    title: "Formal Shirt",
    price: "10000 DZ",
  },
  {
    id: 5,
    image: img5,
    title: "Blue Shirt",
    price: "8500 DZ",
  },
  {
    id: 6,
    image: img6,
    title: "Black Shirt",
    price: "9500 DZ",
  },
  {
    id: 7,
    image: img7,
    title: "Classic Suit",
    price: "15000 DZ",
  },
];

const Shopping = () => {
  const [activeId, setActiveId] = useState(4);

  return (
    <section className="product-section">
      <h2 className="product-title">FEATURED COLLECTION</h2>

      <div className="product-gallery">
        {products.map((product) => (
          <div
            key={product.id}
            className={`product-card ${
              activeId === product.id ? "active" : ""
            }`}
            onClick={() => setActiveId(product.id)}
          >
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />

            {activeId === product.id && (
              <>
                <span className="buy-badge">BUY</span>

                <span className="price-badge">{product.price}</span>

                <button className="circle-btn" aria-label="Buy product">
                  ☝
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shopping;
