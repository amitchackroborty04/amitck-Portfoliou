"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Dribbble, Github } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import imag from "@/../public/imge/portfoliou.png";
import { motion, useInView } from "motion/react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function PortfolioCarousel() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const projects: Project[] = [
    {
      id: 1,
      title: "Ahuse",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "App Dashboard",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Easy Rent",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Design System",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Mobile App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ];

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#04016C]/80 to-[#4A16BD]/80 dark:from-[#1A1A29] dark:to-[#1A1A29] py-10">
          <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="container">
        <div className="flex flex-col space-y-4 mb-10">
          <p className="text-white">Recent Projects</p>
          <div className="flex justify-between items-center">
            <h2 className="text-[32px]  text-white font-semibold">
              My <span className="text-[#4BE5CA]">Portfolio</span>
            </h2>
            <Button className="hidden md:flex items-center gap-2 bg-pink-500 hover:bg-pink-600 rounded-full px-6 py-5">
              <Github className="h-5 w-5" />
              <span>Visit My Github</span>
            </Button>
          </div>
        </div>

        <Carousel setApi={setApi} className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className={`pl-2 md:pl-4 ${
                  slidesPerView === 1
                    ? "basis-full"
                    : slidesPerView === 2
                    ? "basis-1/2"
                    : "basis-1/3"
                }`}
              >
                <div className="bg-white rounded-lg overflow-hidden  shadow-lg h-full">
                  <div className="relative h-64 md:h-72 lg:h-80">
                    <Image
                      src={imag || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl text-black font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-black mb-4">{project.description}</p>
                    <a
                      href="#"
                      className="inline-flex items-center text-black hover:text-gray-600 border-b border-gray-500 pb-1 transition-colors"
                    >
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 md:justify-end gap-2">
            <CarouselPrevious className="static transform-none rounded-full border-gray-700 bg-gray-900 text-white hover:bg-gray-800" />
            <CarouselNext className="static transform-none rounded-full border-gray-700 bg-gray-900 text-white hover:bg-gray-800" />
          </div>
        </Carousel>

        {/* Mobile Dribbble button */}
        <div className="mt-8 flex justify-center md:hidden">
          <Button className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 rounded-full px-6">
            <Github className="h-5 w-5" />
            <span>Visit My Github</span>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
