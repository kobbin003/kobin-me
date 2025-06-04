import Link from "next/link";
import * as motion from "motion/react-client";

export default function Header() {
	return (
		<motion.header
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="py-6 px-4 sm:px-6 lg:px-8 backdrop-blur-sm bg-white/30 sticky top-0 z-10"
		>
			<nav className="flex justify-between items-center max-w-7xl mx-auto">
				<Link
					href="/"
					className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
				>
					<span
						className=" inline-block text-2xl font-[allura] font-thin"
						style={{ transform: "rotate(-15deg)" }}
					>
						Kobin__
					</span>
					{/* <img src="/cropped-kobin.svg" alt="logo" height={100} width={100} /> */}
				</Link>
				<div className="space-x-8">
					{["Projects", "Contact"].map((item) => (
						<Link
							key={item}
							href={`#${item.toLowerCase()}`}
							className="relative group text-sm font-medium uppercase tracking-wider"
						>
							<span className="text-gray-600 hover:text-gray-900 transition-colors">
								{item}
							</span>
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all group-hover:w-full"></span>
						</Link>
					))}
				</div>
			</nav>
		</motion.header>
	);
}
