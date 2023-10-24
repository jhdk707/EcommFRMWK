import React from "react";
import Container from "../../../components/Container";
import ProductCard from "./ProductCard";
import products from "../products.json";
import styles from "./Products.module.css";

export default function Products() {
	return (
		<Container>
			<div className="product-list">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</Container>
	);
}
