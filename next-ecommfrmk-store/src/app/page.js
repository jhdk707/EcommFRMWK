// "use client";

// /* @jsxImportSource react */
// import Image from "next/image";
// import styles from "./page.module.css";
// import Container from "../components/Container";
// // import Nav from "../components/Nav";
// import products from "products.json";
// import Warlock from "../../public/images/the-web-warlock.png";
// // import { useEffect } from "react";

// function Home() {
// 	return (
// 		<main className={styles.main}>
// 			{/* <Nav /> */}
// 			<div className={styles.description}>
// 				<p>Ecommerce Framework 10-22-2023&nbsp;</p>
// 				<div>
// 					<p>By Web Warlocks</p>
// 				</div>
// 			</div>
// 			<div>
// 				<Image
// 					src={Warlock}
// 					alt="Web Warlock"
// 					width={440}
// 					height={440}
// 					style={{
// 						objectFit: "cover",
// 						borderRadius: "100px",
// 					}}
// 				/>
// 			</div>
// 			<Container className={styles.homeContainer}>
// 				<div className={styles.grid}>
// 					{products.map((product) => {
// 						return (
// 							<div key={product.id} className={styles.card}>
// 								<h3>{product.title}</h3>
// 								<p>{product.description}</p>
// 								<p>${product.price}</p>
// 								<p>
// 									<button
// 										className="snipcart-add-item"
// 										data-item-id={product.id}
// 										data-item-image={product.image}
// 										data-item-name={product.title}
// 										data-item-price={product.price}
// 									>
// 										Add to Cart
// 									</button>
// 								</p>
// 							</div>
// 						);
// 					})}
// 				</div>
// 			</Container>
// 			<footer>
// 				<p>footer</p>
// 			</footer>
// 			<script
// 				async
// 				src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js"
// 			/>
// 			<div
// 				hidden
// 				id="snipcart"
// 				data-api-key="ZWE3ZTM4YjktNjZiYS00OTI4LWI5N2UtNTY4MGQyZWI3ZGEwNjM4MzM2MjA1ODc2Nzg2MzYx"
// 			/>
// 		</main>
// 	);
// }

// export default Home;

"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Warlock from "../../public/images/the-web-warlock.png";
import { useState, useEffect } from "react";


function Home() {
	const [total, setTotal] = useState(0);

	useEffect(() => {
		if (typeof window !== "undefined" && window.Snipcart) {
			setTotal(window.Snipcart.store.getState().cart.total);
		}
	}, []);


	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<p>Ecommerce Framework 10-22-2023&nbsp;</p>
				<div>
					<p>By Web Warlocks</p>
				</div>
			</div>
			<div>
				<Image
					src={Warlock}
					alt="Web Warlock"
					width={440}
					height={440}
					style={{
						objectFit: "cover",
						borderRadius: "100px",
					}}
				/>
			</div>
			{/* <div className="product-list">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div> */}
		</main>
	);

}

export default Home;
