import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import Home from './Home'

vi.mock('framer-motion', () => ({
  motion: new Proxy(
    {},
    {
      get: (_, key) => key,
    }
  ),
}))

describe('Home', () => {
  it('routes the projects call-to-action to the consolidated research page', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    expect(screen.getByRole('link', { name: /view all projects/i })).toHaveAttribute('href', '/research')
  })

  it('routes the still curious call-to-action to the contact section', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    const [stillCuriousLink] = screen.getAllByRole('link', { name: /still curious\\?/i })

    expect(stillCuriousLink).toHaveAttribute('href', '#contact')
  })
})
