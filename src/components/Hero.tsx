import * as motion from "motion/react-client";

export default function Hero() {
	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-5xl mx-auto">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter mb-6"
				>
					{/* Creative
					<br />
					Developer */}
					Web Developer
					<br />& UI Builder
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="text-xl text-gray-600 max-w-2xl"
				>
					I'm Kobin, a passionate developer creating beautiful and functional
					web experiences. Let's build something amazing together.
				</motion.p>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					className="mt-10"
				>
					<a
						href="#projects"
						className="px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors inline-flex items-center group"
					>
						View My Work
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</a>
				</motion.div>
			</div>
		</section>
	);
}
