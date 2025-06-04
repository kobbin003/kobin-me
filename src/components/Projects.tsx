import Image from "next/image";
import * as motion from "motion/react-client";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";

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
								<h3 className="relative top-8 text-lg text-black/80 text-center">
									{project.title}
								</h3>
								<Image
									src={project.image || "/placeholder.svg"}
									alt={project.title}
									width={500}
									height={400}
									className=" h-64 aspect-square rounded object-contain transition-transform duration-300 group-hover:scale-110"
									// className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
									<div className="text-white text-center p-4 flex flex-col gap-2 items-center">
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
										<a
											href={project.liveURL}
											target="_blank"
											className="flex items-center gap-1  w-fit border border-white py-1 px-2 rounded-full mt-2 hover:scale-105"
										>
											<ExternalLink />
											<span>visit</span>
										</a>
										{/* this last <p> is necessary to add a gap at the bottom */}
										<p>&nbsp;</p>
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
