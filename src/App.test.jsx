import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('@/components/theme-provider', () => ({
  ThemeProvider: ({ children }) => children,
}))

vi.mock('@/components/navigation', () => ({
  Navigation: () => <div>Navigation</div>,
}))

vi.mock('@/components/footer', () => ({
  Footer: () => <div>Footer</div>,
}))

vi.mock('@/components/ScrollToTop', () => ({
  default: () => null,
}))

vi.mock('@/pages/Home', () => ({
  default: () => <div>Home Page</div>,
}))

vi.mock('@/pages/Research', () => ({
  default: () => <div>Research Page</div>,
}))

vi.mock('@/pages/Projects', () => ({
  default: () => <div>Projects Page</div>,
}))

vi.mock('@/pages/Blog', () => ({
  default: () => <div>Blog Page</div>,
}))

vi.mock('@/pages/Publications', () => ({
  default: () => <div>Publications Page</div>,
}))

import App from './App'

describe('App routing', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/')
  })

  it('redirects the archived projects route to the consolidated research page', () => {
    window.history.pushState({}, '', '/projects')

    render(<App />)

    expect(screen.getByText('Research Page')).toBeInTheDocument()
  })
})
