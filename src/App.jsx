import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import ScrollToTop from '@/components/ScrollToTop'
import Home from '@/pages/Home'
import Research from '@/pages/Research'
import Projects from '@/pages/Projects'
import Blog from '@/pages/Blog'
import Reading from '@/pages/Reading'
import '@fontsource-variable/inter';
import './App.css'

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="harshil-theme">
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-sans text-foreground">
          <Navigation />
          <main className="flex-1 pt-14 sm:pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/research" element={<Research />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/reading" element={<Reading />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

