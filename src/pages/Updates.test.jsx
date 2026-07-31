import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import Updates from './Updates'

vi.mock('framer-motion', () => ({ motion: new Proxy({}, { get: (_, key) => key }) }))

describe('Updates', () => {
  it('uses one semantic page heading and h2 archive cards', () => {
    render(<MemoryRouter><Updates /></MemoryRouter>)

    expect(screen.getByRole('heading', { level: 1, name: 'Updates' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 2 }).length).toBeGreaterThan(0)
  })
})
