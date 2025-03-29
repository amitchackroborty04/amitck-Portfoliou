"use client"

import { Star } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface Testimonial {
    id: number
    name: string
    company: string
    content: string
    rating: number
    avatar: string
}

export default function Reveiws() {
    // Sample testimonial data with the image from the provided screenshot
    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Dianne Russell",
            company: "Starbucks",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
            rating: 5,
            avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Testimonial-RQcLiw9MTc1GDuV2dHSaPNp5T3ijDD.png", // Using the provided image URL
        },
        {
            id: 2,
            name: "Kristin Watson",
            company: "Louis Vuitton",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
            rating: 5,
            avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Testimonial-RQcLiw9MTc1GDuV2dHSaPNp5T3ijDD.png", // Using the provided image URL
        },
        {
            id: 3,
            name: "Kathryn Murphy",
            company: "McDonald's",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
            rating: 5,
            avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Testimonial-RQcLiw9MTc1GDuV2dHSaPNp5T3ijDD.png", // Using the provided image URL
        },
        {
            id: 4,
            name: "Jacob Jones",
            company: "Google",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
            rating: 5,
            avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Testimonial-RQcLiw9MTc1GDuV2dHSaPNp5T3ijDD.png", // Using the provided image URL
        },
        {
            id: 5,
            name: "Leslie Alexander",
            company: "Apple",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
            rating: 5,
            avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Testimonial-RQcLiw9MTc1GDuV2dHSaPNp5T3ijDD.png", // Using the provided image URL
        },
    ]

    // State to track viewport size
    const [slidesPerView, setSlidesPerView] = useState(3)

    // Update slides per view based on viewport width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlidesPerView(1)
            } else if (window.innerWidth < 1024) {
                setSlidesPerView(2)
            } else {
                setSlidesPerView(3)
            }
        }

        // Set initial value
        handleResize()

        // Add event listener
        window.addEventListener("resize", handleResize)

        // Clean up
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <section className="py-12 px-4 md:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="text-center mb-10">
                    <h3 className="text-base font-medium text-gray-600 mb-2">Clients Feedback</h3>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Customer testimonials</h2>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {testimonials.map((testimonial) => (
                            <CarouselItem
                                key={testimonial.id}
                                className={`pl-4 ${slidesPerView === 1 ? "basis-full" : slidesPerView === 2 ? "basis-1/2" : "basis-1/3"
                                    }`}
                            >
                                <Card className="border rounded-lg h-full">
                                    <CardContent className="p-6 flex flex-col h-full">
                                        <div className="flex mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 fill-teal-600 text-teal-600" />
                                            ))}
                                        </div>
                                        <p className="text-gray-700 mb-6 flex-grow">"{testimonial.content}"</p>
                                        <div className="flex items-center">
                                            <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                                                <Image
                                                    src={ "/placeholder.svg"}
                                                    alt={testimonial.name}
                                                    width={48}
                                                    height={48}
                                                    className="object-cover rounded-full"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                                                <p className="text-gray-600">{testimonial.company}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-center gap-2 mt-8">
                        <CarouselPrevious className="relative " />
                        <CarouselNext className="relative " />
                    </div>
                </Carousel>
            </div>
        </section>
    )
}

