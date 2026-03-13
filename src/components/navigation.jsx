import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import harshilImage from '@/assets/images/harshil_pfp.jpg'
import { ThemeToggle } from '@/components/theme-toggle'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navItems = [
  { name: 'Research & Projects', path: '/research' },
  { name: 'Publications', path: '/publications' },
  { name: 'Blog', path: '/blog' },
]

export function Navigation() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/92 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3 hover:no-underline">
          <img src={harshilImage} alt="Harshil Shah" className="h-11 w-11 rounded-full object-cover ring-1 ring-border" />
          <div className="leading-[1.15]">
            <p className="editorial-heading m-0 block text-xl text-primary">
              Harshil Shah
              <br />
              <span className="font-sans text-sm font-normal text-primary/85 not-italic">researcher, learner, thinker</span>
            </p>
          </div>
        </Link>

        <div className="ml-auto hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = location.pathname === item.path

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground hover:no-underline ${
                  active ? 'bg-muted text-foreground' : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            )
          })}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[310px]">
              <div className="mt-8 space-y-6">
                <Link to="/" className="flex items-center gap-3 hover:no-underline">
                  <img src={harshilImage} alt="Harshil Shah" className="h-12 w-12 rounded-full object-cover ring-1 ring-border" />
                  <div className="leading-[1.15]">
                    <p className="editorial-heading m-0 block text-xl text-primary">
                      Harshil Shah
                      <br />
                      <span className="font-sans text-sm font-normal text-primary/85 not-italic">researcher, learner, thinker</span>
                    </p>
                  </div>
                </Link>

                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`rounded-2xl px-4 py-3 text-base font-medium hover:no-underline ${
                        location.pathname === item.path ? 'bg-muted text-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
