import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Saurons Sales",
	description: "Ecommerce Framework created with Next.Js/React and Snipcart",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Head>
				<link rel="preconnect" href="https://app.snipcart.com" />
				<link rel="preconnect" href="https://cdn.snipcart.com" />
				<link
					rel="stylesheet"
					href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css"
				/>
			</Head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
