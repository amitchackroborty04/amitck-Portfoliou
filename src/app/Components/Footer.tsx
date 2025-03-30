import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
    return (
        <footer className="w-full">
            <div className="container mx-auto px-4 py-6">
                {/* Navigation and social icons */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="flex items-center mb-4 md:mb-0">
                        <div className="font-bold text-xl flex items-center">
                            <span className="text-primary mr-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="4" fill="currentColor" />
                                    <circle cx="16" cy="16" r="4" fill="currentColor" />
                                    <circle cx="16" cy="8" r="4" fill="currentColor" opacity="0.5" />
                                </svg>
                            </span>
                            logoipsum<span className="text-primary">*</span>
                        </div>
                    </div>

                    <nav className="flex flex-wrap justify-center mb-4 md:mb-0">
                        <Link href="/" className="px-3 py-2 text-sm">
                            Home
                        </Link>
                        <Link href="/portfolio" className="px-3 py-2 text-sm">
                            Portfolio
                        </Link>
                        <Link href="/about" className="px-3 py-2 text-sm">
                            About me
                        </Link>
                        <Link href="/contact" className="px-3 py-2 text-sm">
                            Contact
                        </Link>
                        <Link href="/testimonials" className="px-3 py-2 text-sm">
                            Testimonials
                        </Link>
                    </nav>

                    <div className="flex space-x-4">
                        <Link href="#" aria-label="Facebook">
                            <Facebook size={20} />
                        </Link>
                        <Link href="#" aria-label="Instagram">
                            <Instagram size={20} />
                        </Link>
                        <Link href="#" aria-label="Twitter">
                            <Twitter size={20} />
                        </Link>
                        <Link href="#" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </Link>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-6"></div>

                {/* Footer bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm">
                            Made with <span className="text-red-500">❤️</span> by Amit Chakraborty
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center">
                        <Link href="/privacy" className="px-3 py-1 text-sm">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="px-3 py-1 text-sm">
                            Terms of Service
                        </Link>
                        <Link href="/cookies" className="px-3 py-1 text-sm">
                            Cookies Settings
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

