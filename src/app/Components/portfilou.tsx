"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Dribbble, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Dummy project data
const projects = [
    {
        id: 1,
        title: "Ahuse",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: "/placeholder.svg?height=600&width=800",
        link: "https://dribbble.com",
    },
    {
        id: 2,
        title: "App Dashboard",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: "/placeholder.svg?height=600&width=800",
        link: "https://dribbble.com",
    },
    {
        id: 3,
        title: "Easy Rent",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: "/placeholder.svg?height=600&width=800",
        link: "https://dribbble.com",
    },
]

export default function Portfolio() {
    return (
        <div className="">
            <div className="container mx-auto">
                {/* Header section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div>
                        <p className="text-slate-400 mb-2">Recent Projects</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-200">My Portfolio</h1>
                    </div>
                    <Button className="mt-4 md:mt-0 bg-pink-500 hover:bg-pink-600 text-white rounded-lg px-6 py-6 h-auto">
                        <Github className="mr-2 h-5 w-5" />
                        Visit My Github
                    </Button>
                </div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    )
}

interface ProjectCardProps {
    project: {
        id: number
        title: string
        description: string
        image: string
        link: string
    }
}

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="bg-slate-900 border-slate-800 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 w-full overflow-hidden">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
            </div>
            <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-slate-100">{project.title}</h2>
                <p className="text-slate-400">{project.description}</p>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
                <Link
                    href={project.link}
                    className="text-slate-300 hover:text-white flex items-center border-b border-slate-700 pb-1 transition-colors"
                >
                    View Project
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
            </CardFooter>
        </Card>
    )
}

