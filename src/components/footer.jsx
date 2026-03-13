import { Link } from 'react-router-dom'
import { profileLinks } from '@/data/siteContent'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research' },
  { label: 'Publications', href: '/publications' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">Navigate</h3>
              <div className="mt-4 flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <Link key={link.href} to={link.href} className="text-sm text-foreground hover:no-underline hover:text-primary">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">Profiles</h3>
              <div className="mt-4 flex flex-col gap-2">
                {profileLinks.slice(0, 4).map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:no-underline hover:text-primary">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
        </div>

        <p className="mt-10 text-xs text-muted-foreground">© {new Date().getFullYear()} Harshil Shah</p>
      </div>
    </footer>
  )
}
