"use client";

import type React from "react";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, ExternalLink, BookOpen } from "lucide-react";

export default function Education() {
	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="learning">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-12"
				>
					<h2 className="text-3xl font-bold mb-4">Currently Learning</h2>
					{/* <p className="text-gray-600 max-w-2xl mx-auto">
						I believe in continuous learning and staying updated with the latest
						technologies and best practices.
					</p> */}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="max-w-4xl mx-auto"
				>
					<div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
						<div className="flex flex-col md:flex-row items-start md:items-center gap-6">
							<div className="flex-shrink-0">
								<div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center">
									<GraduationCap className="w-8 h-8 text-white" />
								</div>
							</div>

							<div className="flex-grow">
								<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
									<h3 className="text-2xl font-bold text-gray-900">
										Crio Bootcamp
									</h3>
									{/* <div className="flex items-center text-gray-600 mt-2 md:mt-0">
										<Calendar className="w-4 h-4 mr-2" />
										<span className="text-sm">Currently Enrolled</span>
									</div> */}
									<div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-lg">
										<Calendar className="w-4 h-4 mr-2" />
										<span className="font-medium">Currently Enrolled</span>
									</div>
								</div>

								<p className="text-gray-700 mb-4">
									Intensive full-stack development bootcamp focusing on hands-on
									project-based learning. Building real-world applications using
									modern technologies and industry best practices.
								</p>

								<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
									<SkillBadge skill="JavaScript" />
									<SkillBadge skill="React.js" />
									<SkillBadge skill="Node.js" />
									<SkillBadge skill="REST APIs" />
									<SkillBadge skill="Git/GitHub" />
									{/* <SkillBadge skill="MongoDB" /> */}
									<SkillBadge skill="Express.js" />
									{/* <SkillBadge skill="System Design" /> */}
								</div>

								<div className="flex flex-col sm:flex-row gap-4">
									<a
										href="https://www.crio.do/learn/portfolio/kobin369/"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
									>
										<ExternalLink className="w-4 h-4 mr-2" />
										Explore My Work @ Crio
									</a>
									{/* <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-lg">
										<BookOpen className="w-4 h-4 mr-2" />
										<span className="font-medium">Active Learner</span>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
{
	/* Additional learning highlights */
}
{
	/* <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
>
    <LearningHighlight
        icon={<BookOpen className="w-6 h-6" />}
        title="Project-Based Learning"
        description="Building real-world applications with industry-standard practices"
    />
    <LearningHighlight
        icon={<GraduationCap className="w-6 h-6" />}
        title="Mentorship"
        description="Learning from experienced developers and industry professionals"
    />
    <LearningHighlight
        icon={<ExternalLink className="w-6 h-6" />}
        title="Industry Exposure"
        description="Working on projects that mirror real industry challenges"
    />
</motion.div> */
}
// Helper component for skill badges
function SkillBadge({ skill }: { skill: string }) {
	return (
		<span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700">
			{skill}
		</span>
	);
}

// Helper component for learning highlights
function LearningHighlight({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) {
	return (
		<div className="text-center p-6">
			<div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
				{icon}
			</div>
			<h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
			<p className="text-gray-600 text-sm">{description}</p>
		</div>
	);
}
