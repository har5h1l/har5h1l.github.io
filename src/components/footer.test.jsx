import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { Footer } from './footer'

describe('Footer', () => {
  it('points the projects navigation entry to the consolidated research page', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )

    expect(screen.getByRole('link', { name: /^projects$/i })).toHaveAttribute('href', '/research')
  })
})
