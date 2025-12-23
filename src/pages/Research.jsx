import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { allProjects } from '@/data/projects'
import { ProjectModal } from '@/components/ProjectModal'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, PlayCircle } from 'lucide-react'
import { ProjectActions } from '@/components/ProjectActions'
import { useLocation } from 'react-router-dom'
import { getResearchAnchorId } from '@/lib/utils'

// Helper to filter research projects
const getResearchProjects = (category) => {
    return allProjects.filter(p => p.research && p.category === category)
}

// Custom component for DroneSuite in Research page
const DroneSuiteSection = ({ project, onShowLinks, isLast = false }) => {
    const descriptionMatch = project.description.match(/^\*\*(.+?)\*\*\n\n(.+)$/s)
    const paperTitle = descriptionMatch ? descriptionMatch[1] : null
    
    // Condensed description
    const enhancedDescription = "This research integrates hierarchical active inference with affordance theory to address autonomous drone navigation. Our framework introduces a latent suitability state that represents how the environment affords safety and navigability, bridging low-level perception with high-level planning. The system balances exploration with goal-directed behavior, effectively filtering viable waypoints for scalable policy selection. Preliminary experiments in Microsoft AirSim show near 100% success rates, demonstrating robustness and real-time efficiency on CPU-based edge systems."

    return (
        <div id="dronesuite" className={isLast ? "mb-0" : "mb-16"}>
            <div className="mb-3">
                <h3 className="text-3xl font-bold text-foreground tracking-tight">
                    {project.title}
                </h3>
            </div>

            {/* Two-column layout: Image (left) with buttons below, Title + Text (right) */}
            <div className="grid md:grid-cols-2 gap-8 mb-4 items-start">
                <div className="flex flex-col">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto rounded-lg object-contain mb-3"
                    />
                    {/* Buttons under image */}
                    <div>
                        <ProjectActions project={project} onShowLinks={onShowLinks} />
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    {paperTitle && (
                        <h4 className="text-xl font-bold text-foreground/90 mb-3 tracking-tight">
                            {paperTitle}
                        </h4>
                    )}
                    <p className="text-lg text-foreground/80 leading-relaxed">
                        {enhancedDescription}
                    </p>
                </div>
            </div>

            {/* Recognition/Links section */}
            {project.recognition && (
                <div className="mt-6">
                    <h4 className="text-xl font-bold mb-3 text-foreground">Publications and Features</h4>
                    <ul className="space-y-3 list-disc pl-4 text-foreground/90">
                        {/* IWAI 2025 */}
                        {project.recognition.find(item => item.text === "IWAI 2025") && (
                            <li>
                                <a href="https://iwaiworkshop.github.io/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline font-medium">
                                    International Workshop on Active Inference (IWAI) 2025:
                                </a>{" "}
                                <a href="https://www.shahmaitraresearch.com/project" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">
                                    Poster & Extended Abstract
                                </a>
                            </li>
                        )}

                        {/* 5th Active Inference Symposium */}
                        {project.recognition.find(item => item.text === "5th Active Inference Symposium") && (
                            <li>
                                <a href="https://www.activeinference.institute/symposium" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline font-medium">
                                    5th Active Inference Symposium
                                </a>
                                <ul className="list-[circle] pl-4 mt-2 space-y-2">
                                    {project.recognition
                                        .find(item => item.text === "5th Active Inference Symposium")
                                        ?.links?.filter(link => link.text !== "Symposium Page")
                                        .map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">
                                                {link.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        )}

                        {/* Active Inference Institute Features */}
                        {project.recognition.find(item => item.text === "Institute Features") && (
                            <li>
                                <a href="https://activeinference.org/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline font-medium">
                                    Active Inference Institute
                                </a>{" "}
                                <span className="font-medium">Features</span>
                                <ul className="list-[circle] pl-4 mt-2 space-y-2">
                                    {project.recognition
                                        .find(item => item.text === "Institute Features")
                                        ?.links?.map((link, linkIndex) => {
                                            // Map Livestream Highlights to correct Quarterly Roundtable numbers based on URLs
                                            let displayText = link.text
                                            if (link.text === "Livestream Highlight 1") {
                                                displayText = "Quarterly Roundtable #2"
                                            } else if (link.text === "Livestream Highlight 2") {
                                                displayText = "Quarterly Roundtable #3"
                                            } else if (link.text === "Livestream Highlight 3") {
                                                displayText = "Quarterly Roundtable #4"
                                            }
                                            return (
                                                <li key={linkIndex}>
                                                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">
                                                        {displayText}
                                                    </a>
                                                </li>
                                            )
                                        })}
                                </ul>
                            </li>
                        )}
                    </ul>
                </div>
            )}

            {!isLast && <hr className="border-border/50 mt-16 mb-0 max-w-2xl" />}
        </div>
    )
}

// Custom component for An Active Inference Approach in Research page
const ActiveInferenceApproachSection = ({ project, onShowLinks, isLast = false }) => {
    return (
        <div id="active-inference-approach" className={isLast ? "mb-0" : "mb-16"}>
            <div className="mb-3">
                <h3 className="text-3xl font-bold text-foreground tracking-tight">
                    {project.title}
                </h3>
            </div>

            {/* Two-column layout: Image (left) with buttons below, Text (right) */}
            <div className="grid md:grid-cols-2 gap-8 mb-4 items-start">
                <div className="flex flex-col">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto rounded-lg object-contain mb-3"
                    />
                    {/* Buttons under image */}
                    <div>
                        <ProjectActions project={project} onShowLinks={onShowLinks} />
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                        {project.description}
                    </p>
                    {project.researchQuestions && project.researchQuestions.length > 0 && (
                        <div className="mt-4">
                            <h4 className="font-semibold text-foreground mb-3 text-lg">Research questions:</h4>
                            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                                {project.researchQuestions.map((q, i) => (
                                    <li key={i} className="leading-relaxed text-base whitespace-pre-line">{q}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Recognition/Links section */}
            {project.recognition && (
                <div className="mt-6">
                    <h4 className="text-xl font-bold mb-3 text-foreground">Publications and Features</h4>
                    <ul className="space-y-3 list-disc pl-4 text-foreground/90">
                        {/* ACSEF 2025 */}
                        {project.recognition.find(item => item.text === "2nd in Comp Bio @ ACSEF 2025") && (
                            <li>
                                <span className="font-medium">2nd in Comp Bio @ ACSEF 2025</span>
                            </li>
                        )}

                        {/* Active Inference Institute Features */}
                        {project.recognition.find(item => item.text === "Active Inference Institute Features") && (
                            <li>
                                <a href="https://activeinference.org/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline font-medium">
                                    Active Inference Institute
                                </a>{" "}
                                <span className="font-medium">Features</span>
                                <ul className="list-[circle] pl-4 mt-2 space-y-2">
                                    {project.recognition
                                        .find(item => item.text === "Active Inference Institute Features")
                                        ?.links?.map((link, linkIndex) => (
                                            <li key={linkIndex}>
                                                <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">
                                                    {link.text}
                                                </a>
                                            </li>
                                        ))}
                                </ul>
                            </li>
                        )}

                        {/* Project Presentation Slides */}
                        {project.recognition.find(item => item.text === "Project Presentation Slides") && (
                            <li>
                                <a 
                                    href={project.recognition.find(item => item.text === "Project Presentation Slides")?.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="hover:text-primary underline font-medium"
                                >
                                    Poster
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            )}

            {!isLast && <hr className="border-border/50 mt-16 mb-0 max-w-2xl" />}
        </div>
    )
}

// Local component for a clean "Research Statement" style project section
const ProjectSection = ({ project, onShowLinks, children, isLast = false }) => {
    // Extract bolded text from description for Research page subheader
    const descriptionMatch = project.description.match(/^\*\*(.+?)\*\*\n\n(.+)$/s)
    const paperTitle = descriptionMatch ? descriptionMatch[1] : null
    const descriptionText = descriptionMatch ? descriptionMatch[2] : project.description
    const isDroneSuite = project.title.includes("DroneSuite")
    const isActiveInferenceApproach = project.title.includes("An Active Inference Approach")
    const hasMoreInfo = isActiveInferenceApproach

    // Generate anchor ID for all research projects
    const anchorId = getResearchAnchorId(project.title)

    return (
        <div id={anchorId} className={isLast ? "mb-0" : "mb-16"}>
            <div className="mb-4">
                <h3 className="text-3xl font-bold text-foreground tracking-tight">
                    {project.title}
                </h3>
                {paperTitle && (
                    <h4 className="text-xl font-bold text-foreground/90 mt-2 tracking-tight">
                        {paperTitle}
                    </h4>
                )}
            </div>

            {children}

            {/* Two-column layout for projects with More Info: Image and Text */}
            {hasMoreInfo && project.image ? (
                <>
                    <div className="grid md:grid-cols-2 gap-8 mb-6 items-start">
                        <div className="flex-shrink-0">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full max-w-[85%] h-auto rounded-lg object-contain"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-lg text-foreground/80 leading-relaxed">
                                {descriptionText}
                            </p>
                            {project.researchQuestions && project.researchQuestions.length > 0 && (
                                <div className="mt-6">
                                    <h4 className="font-semibold text-foreground mb-3 text-lg">Research questions:</h4>
                                    <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                                        {project.researchQuestions.map((q, i) => (
                                            <li key={i} className="leading-relaxed text-base">{q}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <p className="text-lg text-foreground/80 leading-relaxed max-w-4xl mb-6">
                        {descriptionText}
                    </p>
                    {project.title.includes("Modelling Trust") && (
                        <p className="text-lg text-foreground/80 leading-relaxed max-w-4xl mb-6">
                            <a href="/#contact" className="text-primary hover:underline font-semibold">Email me</a> if you can provide mentorship or advice in multi-agent active inference with theory of mind.
                        </p>
                    )}
                    {project.researchQuestions && project.researchQuestions.length > 0 && (
                        <div className="mb-6 max-w-4xl">
                            <h4 className="font-semibold text-foreground mb-3 text-lg">Research questions:</h4>
                            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                                {project.researchQuestions.map((q, i) => (
                                    <li key={i} className="whitespace-pre-line leading-relaxed text-base">{q}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </>
            )}

            {/* Buttons Row - Identical to ProjectCard logic */}
            <ProjectActions project={project} onShowLinks={onShowLinks} />

            {/* Recognition/Links section for projects with More Info */}
            {hasMoreInfo && project.recognition && (
                <div className="mt-8 pt-6 border-t border-border">
                    <h4 className="text-xl font-bold mb-4 text-foreground">More Info</h4>
                    <ul className="space-y-3 list-disc pl-4 text-foreground/90">
                        {project.recognition.map((item, index) => (
                            <li key={index}>
                                {item.url ? (
                                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary underline font-medium">
                                        {item.text}
                                    </a>
                                ) : (
                                    <span className="font-medium">{item.text}</span>
                                )}

                                {item.links && (
                                    <ul className="list-[circle] pl-4 mt-2 space-y-2">
                                        {item.links.map((link, linkIndex) => (
                                            <li key={linkIndex}>
                                                <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">
                                                    {link.text}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {!isLast && <hr className="border-border/50 mt-16 mb-0 max-w-2xl" />}
        </div>
    )
}

const Research = () => {
    const [selectedProject, setSelectedProject] = useState(null)
    const location = useLocation()

    // Specific order filtering for Active Inference
    const activeInfProjectsRaw = getResearchProjects("Active Inference")
    const droneSuite = activeInfProjectsRaw.find(p => p.title.includes("DroneSuite"))
    const approach = activeInfProjectsRaw.find(p => p.title.includes("An Active Inference Approach"))
    const trust = activeInfProjectsRaw.find(p => p.title.includes("Modelling Trust"))

    // Ensure we have exactly these 3 in this order
    const activeInfProjects = [droneSuite, approach, trust].filter(Boolean)

    const biomedProjects = getResearchProjects("Biomedicine")

    const handleShowLinks = (project) => {
        setSelectedProject(project)
    }

    const handleCloseModal = () => {
        setSelectedProject(null)
    }

    // Handle scroll to anchor on mount if hash is present
    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                const element = document.getElementById(location.hash.substring(1))
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
            }, 100)
        }
    }, [location.hash])

    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16 max-w-[900px]">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight">Research</h1>
                    <p className="text-xl text-foreground/90 leading-relaxed mb-6 font-light">
                        My research focuses on developing more intelligent AI systems that can operate robustly in uncertain, real-world environments. I work primarily within the Active Inference framework, applying it to autonomous navigation problems and multi-agent systems with theory of mind. I'm also exploring how deep learning can advance our understanding of biological systems, particularly through graph neural networks for computational biology and foundational models for neuroscience. My approach emphasizes handling uncertainty explicitly, building systems that can adapt under pressure, and bridging theoretical frameworks with practical applications.
                    </p>

                    <p className="text-foreground/80 font-medium">
                        If you can review DroneSuite or give feedback on multi-agent social learning, <a href="mailto:28hshah@gmail.com" className="text-primary hover:underline font-semibold">contact me</a>.
                    </p>
                </motion.div>

                {/* Section 1: Active Inference */}
                <section className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Active Inference</h2>
                    </motion.div>

                    <div>
                        {activeInfProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                {project.title.includes("DroneSuite") ? (
                                    <DroneSuiteSection
                                        project={project}
                                        onShowLinks={handleShowLinks}
                                        isLast={index === activeInfProjects.length - 1}
                                    />
                                ) : project.title.includes("An Active Inference Approach") ? (
                                    <ActiveInferenceApproachSection
                                        project={project}
                                        onShowLinks={handleShowLinks}
                                        isLast={index === activeInfProjects.length - 1}
                                    />
                                ) : (
                                    <ProjectSection
                                        project={project}
                                        onShowLinks={handleShowLinks}
                                        isLast={index === activeInfProjects.length - 1}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Section 2: Deep Learning in Biology, Medicine, and Neuroscience */}
                <section className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Deep Learning in Biology, Medicine, and Neuroscience</h2>
                    </motion.div>

                    <div>
                        {biomedProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <ProjectSection
                                    project={project}
                                    onShowLinks={handleShowLinks}
                                    isLast={index === biomedProjects.length - 1}
                                />
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
            <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        </div>
    )
}

export default Research
