import Image from "next/image";
import styles from "./page.module.css";
import products from "products.json";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<p>
					Get started by editing&nbsp;
					<code className={styles.code}>src/app/page.js</code>
				</p>
				<div>
					<a
						href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						By{" "}
						<Image
							src="/vercel.svg"
							alt="Vercel Logo"
							className={styles.vercelLogo}
							width={100}
							height={24}
							priority
						/>
					</a>
				</div>
			</div>

			<div className={styles.center}>
				<Image
					className={styles.logo}
					src="/next.svg"
					alt="Next.js Logo"
					width={180}
					height={37}
					priority
				/>
			</div>

			<div className={styles.grid}>
				{products.map((product) => {
					return (
						<div key={product.id} className={styles.card}>
							<img src={product.image} alt={`Preview of ${product.title}`} />
							<h3>{product.title}</h3>
							<p>{product.description}</p>
							<p>${product.price}</p>
							<p>
								<button>Add to Cart</button>
							</p>
						</div>
					);
				})}
			</div>
		</main>
	);
}
