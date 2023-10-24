/* @jsxImportSource react */
import Image from "next/image";
import styles from "./page.module.css";
import products from "products.json";
import Warlock from "../../public/images/the-web-warlock.png";
import Link from "next/link";;
import Container from "../components/Container";

// Rest of the component code

export default function Home() {
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
      <h1 className={styles.title}>
        Try <Link href="/pages/first-category">this page!</Link>
      </h1>
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
      );
      <div className={styles.grid}>
        {products.map((product) => {
          return (
            <div key={product.id} className={styles.card}>
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
