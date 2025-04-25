import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Your Name - Portfolio",
	description: "A stylish minimalist portfolio showcasing my work",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta
					name="facebook-domain-verification"
					content="lfecbg7yemxmqvuq0giotjg3t4ilxb"
				/>
			</head>
			<body
				className={`${inter.className} bg-[#f0f0f0] text-gray-900 min-h-screen`}
			>
				<div className="fixed inset-0 -z-10 bg-[#f0f0f0]">
					<div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
				</div>
				{children}
			</body>
		</html>
	);
}
