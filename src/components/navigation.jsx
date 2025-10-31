import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ThemeToggle } from './theme-toggle'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react'
import harshilImage1 from '../assets/images/harshil_pfp.jpg'

export function Navigation() {
    const location = useLocation()
    const [isExpanded, setIsExpanded] = useState(location.pathname !== '/')
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const heroRef = useRef(null)
    const isHomePage = location.pathname === '/'

    useEffect(() => {
        if (!isHomePage) {
            setIsExpanded(true)
            return
        }

        // only set up scroll listener for home page
        heroRef.current = document.getElementById('hero-section')
        
        const handleScroll = () => {
            const scrolled = window.scrollY > 10
            setIsScrolled(scrolled)
            
            if (heroRef.current) {
                const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight
                setIsExpanded(window.scrollY > heroBottom - 70)
            }
        }
        
        // initial check in case we load the page already scrolled
        handleScroll()
        
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll, { passive: true })
    }, [isHomePage])

    // close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [location.pathname])

    const navItems = [
        { name: 'Projects', path: '/projects' },
        { name: 'Blog', path: '/blog' },
        { name: 'Reading', path: '/reading' },
    ]

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isHomePage 
                ? (isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent')
                : 'bg-background/80 backdrop-blur-md border-b border-border'
        }`}>
            <div className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-300 ${
                isExpanded ? 'py-2' : 'py-3 sm:py-4'
            }`}>
                <div className={`flex items-center transition-all duration-300 ${
                    isExpanded ? 'gap-4' : 'justify-between'
                }`}>
                    {/* profile image - always visible on non-home pages, or when expanded on home page */}
                    {(isExpanded || !isHomePage) && (
                        <Link to="/" className="shrink-0">
                            <img
                                src={harshilImage1}
                                alt="Harshil Shah"
                                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-primary"
                            />
                        </Link>
                    )}
                    
                    {/* name and description - always visible on non-home pages, or when expanded on home page */}
                    <div className={`transition-all duration-300 ${
                        isExpanded || !isHomePage ? 'max-w-2xl opacity-100' : 'max-w-0 opacity-0 overflow-hidden'
                    }`}>
                        <Link to="/" className="block">
                            <h2 className="text-base sm:text-lg font-bold gradient-text">Harshil Shah</h2>
                            <p className="text-xs sm:text-sm gradient-text font-normal truncate opacity-80">
                                researcher, learner, thinker
                            </p>
                        </Link>
                    </div>
                    
                    {/* logo - only visible on home page when not expanded */}
                    {isHomePage && (
                        <Link 
                            to="/" 
                            className={`font-bold gradient-text hover:opacity-80 transition-all duration-300 ${
                                isExpanded ? 'hidden' : 'text-lg sm:text-xl'
                            }`}
                        >
                            Harshil Shah
                        </Link>
                    )}

                    {/* desktop navigation links */}
                    <div className="hidden md:flex items-center space-x-6 ml-auto">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${
                                    location.pathname === item.path 
                                        ? 'text-primary' 
                                        : 'text-foreground hover:opacity-80'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="ml-4">
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* mobile menu - hamburger button and sheet */}
                    <div className="md:hidden ml-auto flex items-center gap-2">
                        <ThemeToggle />
                        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                            <SheetTrigger asChild>
                                <button
                                    className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
                                    aria-label="open menu"
                                >
                                    <Menu className="h-5 w-5" />
                                </button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                                <div className="flex flex-col gap-6 mt-8">
                                    <Link
                                        to="/"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center gap-3"
                                    >
                                        <img
                                            src={harshilImage1}
                                            alt="Harshil Shah"
                                            className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                                        />
                                        <div>
                                            <h2 className="text-lg font-bold gradient-text">Harshil Shah</h2>
                                            <p className="text-sm gradient-text font-normal opacity-80">
                                                researcher, learner, thinker
                                            </p>
                                        </div>
                                    </Link>
                                    <nav className="flex flex-col gap-4">
                                        {navItems.map((item) => (
                                            <Link
                                                key={item.path}
                                                to={item.path}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={`text-base font-medium transition-colors py-2 px-3 rounded-md ${
                                                    location.pathname === item.path 
                                                        ? 'text-primary bg-muted' 
                                                        : 'text-foreground hover:bg-muted'
                                                }`}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    )
}

