import { cleanup, render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Home from './Home'
import { updates } from '@/data/updates'

const researchDirection = {
  directions: [
    {
      title: 'How can we build and understand intelligent systems?',
      body:
        'Many abilities that biological organisms perform effortlessly—adapting continuously, acting under uncertainty, and coordinating with others—remain difficult for current AI systems. The Free Energy Principle and Active Inference offer a framework for thinking about how cognition emerges through perception, learning, and action. I’m interested in understanding cognition more deeply and applying its principles and constraints to build more adaptive AI systems. So far, I’ve explored these ideas through autonomous robotics, multi-agent systems, and affective and social inference.',
    },
    {
      title: 'How can we run them efficiently at scale?',
      body:
        'Conventional digital computing has come a long way, but it can become costly or inefficient for many difficult inference and optimization problems. It is largely designed to suppress noise and randomness, yet I’ve come to understand that stochasticity can also be a valuable computational resource. I’m beginning to explore probabilistic and thermodynamic computing as approaches that harness uncertainty and physical dynamics rather than simply fighting them. Long term, I’m interested in how these methods could enable more efficient and scalable intelligent systems.',
    },
  ],
}

const beyondTheLabParagraphs = [
  'Research is a major part of my life, but not the only one. I compete in public forum debate, play tennis for my school team, and lead R.I.S.E. Tennis and SkillSprout.',
  'I also enjoy reading, listening to podcasts, experimenting with recipes and drinks, and following questions wherever they lead. Whether through debate, tennis, or research, I’m drawn to activities that require curiosity, adaptation, and a willingness to reconsider my assumptions.',
]

vi.mock('framer-motion', () => ({
  motion: new Proxy(
    {},
    {
      get: (_, key) => key,
    }
  ),
}))

function renderHome() {
  return render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )
}

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})

describe('Home', () => {
  it('derives exactly the four newest homepage updates from centralized data', () => {
    renderHome()

    expect(updates.length).toBeGreaterThan(4)
    expect(screen.getByRole('heading', { name: 'Recent updates' })).toBeInTheDocument()
    expect(screen.getAllByTestId('homepage-update')).toHaveLength(4)
    expect(screen.getByRole('link', { name: 'View all updates' })).toHaveAttribute('href', '/updates')
  })

  it('uses the compact writing destinations rather than article previews', () => {
    renderHome()

    expect(screen.getByRole('heading', { name: 'Notes and essays' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read on Substack' })).toHaveAttribute('href', 'https://substack.com/@harshilshah28')
    expect(screen.getByRole('link', { name: 'Browse Medium' })).toHaveAttribute('href', 'https://medium.com/@harshilshah28')
  })
  it('links the Research Direction call-to-action to the research section', () => {
    renderHome()

    expect(screen.getByRole('link', { name: 'Research Direction' })).toHaveAttribute('href', '#research-direction')
  })

  it('renders the exact two-paragraph hero introduction', () => {
    renderHome()

    expect(screen.getByText('intelligence, cognition, computation')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: "Hi, I'm Harshil..." })).toBeInTheDocument()
    expect(screen.getByText(/I’m a student researcher from the Bay Area/)).toBeInTheDocument()
    expect(screen.getByText(/My work draws from Active Inference/)).toBeInTheDocument()
  })

  it('uses intelligent-systems and efficient-computing keywords in runtime metadata', () => {
    renderHome()

    expect(document.querySelector('meta[name="keywords"]')).toHaveAttribute(
      'content',
      'Harshil Shah, NeuroAI, Active Inference, embodied intelligence, robotics, multi-agent cognition, efficient computing, probabilistic computing, neuromorphic computing'
    )
  })

  it('keeps exact research copy in the research section and personal copy in Beyond the lab', () => {
    renderHome()

    const research = screen.getByRole('heading', { name: 'The bigger picture' }).closest('section')
    const beyondTheLab = screen.getByRole('heading', { name: 'Beyond the lab' }).closest('section')

    for (const direction of researchDirection.directions) {
      expect(within(research).getByRole('heading', { name: direction.title })).toBeInTheDocument()
      expect(within(research).getByText((_, element) => element.textContent === direction.body)).toBeInTheDocument()
    }
    expect(within(research).queryByText(/public forum debate/i)).not.toBeInTheDocument()

    for (const paragraph of beyondTheLabParagraphs) {
      expect(within(beyondTheLab).getByText((_, element) => element.textContent === paragraph)).toBeInTheDocument()
    }
  })

  it('renders the new research and personal anchors in homepage order', () => {
    const { container } = renderHome()

    expect(screen.getByRole('heading', { name: 'The bigger picture' }).closest('section')).toHaveAttribute('id', 'research-direction')
    expect(screen.getByRole('heading', { name: 'Beyond the lab' }).closest('section')).toHaveAttribute('id', 'beyond-the-lab')
    expect(screen.queryByRole('link', { name: /still curious/i })).not.toBeInTheDocument()

    const orderedIds = [...container.querySelectorAll('section')].map((section) => section.id || section.getAttribute('aria-labelledby'))
    expect(orderedIds).toEqual(
      expect.arrayContaining(['research-direction', 'beyond-the-lab', 'updates', 'selected-work', 'writing', 'contact'])
    )
    expect(orderedIds.indexOf('research-direction')).toBeLessThan(orderedIds.indexOf('beyond-the-lab'))
    expect(orderedIds.indexOf('beyond-the-lab')).toBeLessThan(orderedIds.indexOf('updates'))
    expect(orderedIds.indexOf('updates')).toBeLessThan(orderedIds.indexOf('selected-work'))
    expect(orderedIds.indexOf('selected-work')).toBeLessThan(orderedIds.indexOf('writing'))
    expect(orderedIds.indexOf('writing')).toBe(orderedIds.indexOf('contact') - 1)
    expect(screen.queryByRole('heading', { name: 'Recent recognition' })).not.toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Writing and reflections' })).not.toBeInTheDocument()
  })

  it('keeps R.I.S.E. Tennis inline in Beyond the lab and retains the publications destination', () => {
    renderHome()

    const beyondTheLab = screen.getByRole('heading', { name: 'Beyond the lab' }).closest('section')
    expect(within(beyondTheLab).getByRole('link', { name: 'R.I.S.E. Tennis' })).toHaveAttribute('href', 'https://risetennis.org/')
    expect(within(beyondTheLab).getByRole('link', { name: 'SkillSprout' })).toHaveAttribute('href', 'https://www.skill-sprout.org/')
    expect(screen.getAllByRole('link', { name: 'Publications' })[0]).toHaveAttribute('href', '/publications')
    expect(screen.getByRole('link', { name: 'View all updates' })).toHaveAttribute('href', '/updates')
  })
})
