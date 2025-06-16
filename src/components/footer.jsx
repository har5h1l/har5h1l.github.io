import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Reading', href: '/reading' },
  { name: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-custom py-8">
        <div className="flex flex-col items-center">

          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Harshil Shah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

