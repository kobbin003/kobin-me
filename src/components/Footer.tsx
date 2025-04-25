import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
					<div>
						<h3 className="text-lg font-bold mb-4">Duyu Kobin</h3>
						<p className="text-gray-600 mb-4">
							A passionate developer creating beautiful and functional web
							experiences.
						</p>
						<div className="flex space-x-4">
							<SocialLink
								href="https://github.com/kobbin003"
								icon={<Github size={20} />}
								label="GitHub"
							/>
							<SocialLink
								href="https://www.linkedin.com/in/kobin3/"
								icon={<Linkedin size={20} />}
								label="LinkedIn"
							/>
							<SocialLink
								href="mailto:kobin369@gmail.com"
								icon={<Mail size={20} />}
								label="Email"
							/>
						</div>
					</div>

					<div>
						<h3 className="text-lg font-bold mb-4">Navigation</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="#"
									className="text-gray-600 hover:text-gray-900 transition-colors"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="#projects"
									className="text-gray-600 hover:text-gray-900 transition-colors"
								>
									Projects
								</Link>
							</li>
							<li>
								<Link
									href="#contact"
									className="text-gray-600 hover:text-gray-900 transition-colors"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-bold mb-4">Let's Connect</h3>
						<p className="text-gray-600 mb-4">
							I'm always open to discussing new projects, creative ideas or
							opportunities to be part of your vision.
						</p>
						<Link
							href="#contact"
							className="inline-flex items-center text-gray-900 font-medium hover:underline"
						>
							Get in touch
							<ExternalLink size={16} className="ml-1" />
						</Link>
					</div>
				</div>

				<div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-600 text-sm">
						© {currentYear} Duyu Kobin. All rights reserved.
					</p>
					<p className="text-gray-600 text-sm mt-2 md:mt-0">
						Designed & Built with ♥
					</p>
				</div>
			</div>
		</footer>
	);
}

// Helper component for social links
function SocialLink({
	href,
	icon,
	label,
}: {
	href: string;
	icon: React.ReactNode;
	label: string;
}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="p-2 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-900 hover:text-white transition-colors"
			aria-label={label}
		>
			{icon}
		</a>
	);
}
// import React from "react";

// type Props = {};

// const Footer = (props: Props) => {
// 	return (
// 		<footer className="bg-gray-900 text-white py-8">
// 			<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
// 				<p className="text-sm">
// 					&copy; {new Date().getFullYear()} Duyu Kobin. All rights reserved.
// 				</p>
// 				<div className="flex space-x-4 mt-4 md:mt-0">
// 					<a
// 						href="https://github.com/kobbin003"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						className="hover:text-gray-400"
// 					>
// 						GitHub
// 					</a>
// 					<a
// 						href="https://www.linkedin.com/in/kobin3/"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						className="hover:text-gray-400"
// 					>
// 						LinkedIn
// 					</a>
// 					<a
// 						href="mailto:youremail@example.com"
// 						className="hover:text-gray-400"
// 					>
// 						Email
// 					</a>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// };

// export default Footer;
