import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import Research from './Research'

vi.mock('framer-motion', () => ({
  motion: new Proxy({}, { get: (_, key) => key }),
}))

afterEach(cleanup)

describe('Research', () => {
  it('uses current research topics in page metadata', () => {
    render(<MemoryRouter><Research /></MemoryRouter>)

    expect(document.querySelector('meta[name="description"]')).toHaveAttribute('content', expect.stringContaining('partner-specific affective precision'))
    expect(document.querySelector('meta[name="keywords"]')).toHaveAttribute('content', expect.stringContaining('biomedical machine learning'))
  })

  it('renders affective-precision role, badges, and publication heading', () => {
    render(<MemoryRouter><Research /></MemoryRouter>)

    const entry = screen.getByRole('heading', { name: 'Partner-Specific Affective Precision in Social Active Inference' }).closest('article')
    expect(within(entry).getByText('CO-AUTHOR')).toBeInTheDocument()
    expect(within(entry).getByText('FULL PAPER')).toBeInTheDocument()
    expect(within(entry).getAllByText('IWAI 2026')).toHaveLength(2)
    expect(within(entry).getByText('FORTHCOMING')).toBeInTheDocument()
    expect(within(entry).getByRole('heading', { name: 'Publications and features' })).toBeInTheDocument()
  })

  it('labels SocialLearning status as current status', () => {
    render(<MemoryRouter><Research /></MemoryRouter>)

    const entry = screen.getByRole('heading', { name: 'Social Learning Without Imitation in Active Inference' }).closest('article')
    expect(within(entry).getByRole('heading', { name: 'Current status' })).toBeInTheDocument()
  })
})
