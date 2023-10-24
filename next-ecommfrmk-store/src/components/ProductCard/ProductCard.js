// components/ProductCard.js

import React from "react";

const ProductCard = ({ product }) => {
	return (
		<div className="product-card">
			<img src={product.image} alt={product.title} />
			<h3>{product.title}</h3>
			<p>{product.description}</p>
			<p>${product.price}</p>
			<button
				className="snipcart-add-item"
				data-item-id={product.id}
				data-item-image={product.image}
				data-item-name={product.title}
				data-item-price={product.price}
			>
				Add to Cart
			</button>
		</div>
	);
};

export default ProductCard;
