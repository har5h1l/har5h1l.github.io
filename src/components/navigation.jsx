import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ThemeToggle } from './theme-toggle'
import harshilImage1 from '../assets/images/harshil_pfp.jpeg'

export function Navigation() {
  const location = useLocation()
  const [isExpanded, setIsExpanded] = useState(location.pathname !== '/')
  const [isScrolled, setIsScrolled] = useState(false)
  const heroRef = useRef(null)
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    if (!isHomePage) {
      setIsExpanded(true)
      return
    }

    // Only set up scroll listener for home page
    heroRef.current = document.getElementById('hero-section')
    
    const handleScroll = () => {
      const scrolled = window.scrollY > 10
      setIsScrolled(scrolled)
      
      if (heroRef.current) {
        const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight
        setIsExpanded(window.scrollY > heroBottom - 70)
      }
    }
    
    // Initial check in case we load the page already scrolled
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll, { passive: true })
  }, [isHomePage])

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
      <div className={`max-w-6xl mx-auto px-6 transition-all duration-300 ${
        isExpanded ? 'py-2' : 'py-4'
      }`}>
        <div className={`flex items-center transition-all duration-300 ${
          isExpanded ? 'gap-4' : 'justify-between'
        }`}>
          {/* Profile Image - Always visible on non-home pages, or when expanded on home page */}
          {(isExpanded || !isHomePage) && (
            <Link to="/" className="shrink-0">
              <img
                src={harshilImage1}
                alt="Harshil Shah"
                className="w-10 h-10 rounded-full object-cover border-2 border-primary"
              />
            </Link>
          )}
          
          {/* Name and description - Always visible on non-home pages, or when expanded on home page */}
          <div className={`transition-all duration-300 ${
            isExpanded || !isHomePage ? 'max-w-2xl opacity-100' : 'max-w-0 opacity-0 overflow-hidden'
          }`}>
            <Link to="/" className="block">
              <h2 className="text-lg font-bold gradient-text">Harshil Shah</h2>
              <p className="text-sm gradient-text font-normal truncate opacity-80">
                researcher, developer, learner
              </p>
            </Link>
          </div>
          
          {/* Logo - Only visible on home page when not expanded */}
          {isHomePage && (
            <Link 
              to="/" 
              className={`font-bold gradient-text hover:opacity-80 transition-all duration-300 ${
                isExpanded ? 'hidden' : 'text-xl'
              }`}
            >
              Harshil Shah
            </Link>
          )}

          {/* Navigation Links */}
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

          {/* Mobile menu button */}
          <div className={`md:hidden ml-auto ${isExpanded ? 'hidden' : 'block'}`}>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4 pt-4 border-t border-border">
          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

