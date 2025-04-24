import Image from "next/image";
import * as motion from "motion/react-client";

const projects = [
	{
		title: "Project 1",
		description: "A brief description of project 1",
		image: "/placeholder.svg?height=400&width=600",
		tags: ["React", "Next.js", "Tailwind CSS"],
	},
	{
		title: "Project 2",
		description: "A brief description of project 2",
		image: "/placeholder.svg?height=400&width=600",
		tags: ["TypeScript", "Node.js", "Express"],
	},
	{
		title: "Project 3",
		description: "A brief description of project 3",
		image: "/placeholder.svg?height=400&width=600",
		tags: ["Vue.js", "Vuex", "Firebase"],
	},
];

export default function Projects() {
	return (
		<section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-3xl font-bold mb-12 text-center">
					Featured Projects
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="group"
						>
							<div className="relative overflow-hidden rounded-lg shadow-lg">
								<Image
									src={project.image || "/placeholder.svg"}
									alt={project.title}
									width={600}
									height={400}
									className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
									<div className="text-white text-center p-4">
										<h3 className="text-2xl font-semibold mb-2">
											{project.title}
										</h3>
										<p className="mb-4">{project.description}</p>
										<div className="flex flex-wrap justify-center gap-2">
											{project.tags.map((tag, tagIndex) => (
												<span
													key={tagIndex}
													className="px-2 py-1 bg-white/20 rounded-full text-sm"
												>
													{tag}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
