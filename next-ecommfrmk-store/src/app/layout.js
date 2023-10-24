import { Inter } from "next/font/google";
// import Script from "next/script"; // Import the Script component
import "./globals.css";
import Head from "next/head";
import { metadata } from "./metadata.js";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
				<link rel="preconnect" href="https://app.snipcart.com" />
				<link rel="preconnect" href="https://cdn.snipcart.com" />
				<link
					rel="stylesheet"
					href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css"
				/>
				{/* <script
					async
					src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js"
				/>
				<div
					hidden
					id="snipcart"
					data-api-key="ZWE3ZTM4YjktNjZiYS00OTI4LWI5N2UtNTY4MGQyZWI3ZGEwNjM4MzM2MjA1ODc2Nzg2MzYx"
				/> */}
			</Head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
