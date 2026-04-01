import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import ScrollToTop from '@/components/ScrollToTop'
import Home from '@/pages/Home'
import Research from '@/pages/Research'
import Blog from '@/pages/Blog'
import Publications from '@/pages/Publications'
import '@fontsource-variable/inter';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="harshil-theme">
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-sans text-foreground">
          <Navigation />
          <main className="flex-1 pt-24 sm:pt-28">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/research" element={<Research />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/projects" element={<Navigate to="/research" replace />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
