"use client";
import * as motion from "motion/react-client";

export default function Contact() {
	// const formRef = useRef(null);
	// const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();
	// 	console.log(e.target);
	// 	const formEl = e.target as HTMLFormElement;
	// 	console.log(formEl.title);
	// 	// const name = e.target["name"];
	// 	const formData = new FormData(formEl);
	// 	const entries = formData.entries();
	// 	// console.log("formData: ", formData);
	// 	// console.log(formData.get("name"));
	// 	// console.log("entries: ", entries);
	// 	// for (const [key, value] of formData.entries()) {
	// 	// 	console.log(`${key}: ${value}`);
	// 	// }
	// 	const email = formData.get("email") as string;
	// 	const name = formData.get("name") as string;
	// 	const message = formData.get("message") as string;
	// 	console.log(email, "", name, "", message);
	// };
	return (
		<section
			id="contact"
			className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white"
		>
			<div className="max-w-3xl mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
				<motion.form
					className="space-y-6"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					// onSubmit={handleSubmit}
					// ref={formRef}
					target="_blank"
					action="https://formsubmit.co/kobin369@gmail.com"
					method="POST"
				>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						<div>
							<label htmlFor="name" className="block text-sm font-medium mb-1">
								Name
							</label>
							<input
								id="name"
								name="name"
								type="text"
								required
								className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
							/>
						</div>
						<div>
							<label htmlFor="email" className="block text-sm font-medium mb-1">
								Email
							</label>
							<input
								id="email"
								name="email"
								type="email"
								required
								className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
							/>
						</div>
					</div>
					<div>
						<label htmlFor="message" className="block text-sm font-medium mb-1">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							rows={4}
							required
							className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
						></textarea>
					</div>
					<div>
						<button
							type="submit"
							className="w-full px-4 py-3 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-colors"
						>
							Send Message
						</button>
					</div>
				</motion.form>
			</div>
		</section>
	);
}
