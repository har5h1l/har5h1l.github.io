import { cleanup, render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Home from './Home'
import { updates } from '@/data/updates'

const heroParagraphs = [
  'I’m a student researcher from the Bay Area interested in two connected questions: How can we build and understand intelligent systems, and how can we run them efficiently at scale?',
  'My work draws from NeuroAI, Active Inference, cognitive science, robotics, and multi-agent systems to study how agents learn, reason, and act under uncertainty. I’m also beginning to explore probabilistic, thermodynamic, and neuromorphic computing as alternative foundations for more efficient artificial intelligence.',
]

const researchDirection = {
  intro:
    'I’m interested in intelligence at two interconnected levels: the principles that allow biological and artificial systems to behave adaptively, and the computational machinery needed to implement those principles efficiently.',
  directions: [
    {
      title: 'Building and understanding intelligent systems',
      body:
        'Many behaviors that appear effortless in biological organisms—adapting to unfamiliar environments, acting with incomplete information, coordinating with others, and learning continuously from experience—remain difficult for modern AI systems. I’m interested in how insights from computational neuroscience and cognitive science can help us build systems with stronger forms of adaptation, generalization, and autonomy.\n\nThis has led me toward NeuroAI, the Free Energy Principle, Active Inference, embodied and enactive cognition, affordance theory, and multi-agent intelligence. Rather than treating biological plausibility as an end in itself, I’m interested in using it as a source of useful principles and constraints for artificial systems. My current work applies these ideas to autonomous robotics, affective and social inference, and agents that must form and revise beliefs about uncertain environments and other agents.',
    },
    {
      title: 'Making intelligent systems efficient and scalable',
      body:
        'Understanding intelligence is only part of the problem. We must also determine how increasingly capable systems can be implemented without relying indefinitely on greater amounts of conventional computation and energy.\n\nI’m beginning to explore probabilistic, thermodynamic, and neuromorphic computing as alternative ways of performing inference, optimization, and learning. These approaches use uncertainty, stochasticity, physical dynamics, or brain-inspired hardware as computational resources rather than treating them purely as obstacles. Long term, I’m interested in how new algorithms and computational substrates can make intelligent systems more efficient, scalable, and physically grounded.',
    },
  ],
  closing:
    'These directions are closely related. Models of biological intelligence can suggest new computational principles, while emerging hardware and probabilistic computing paradigms can make those principles practical. I hope to work across this boundary: developing better theories and architectures for intelligent behavior while studying the systems needed to realize them.',
}

const beyondTheLabParagraphs = [
  'Research is a major part of my life, but not the only one. I compete in public forum debate, play tennis for my school team, and lead R.I.S.E. Tennis, a youth-run nonprofit focused on expanding access to the sport through clinics, equipment drives, and fundraising.',
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
    const hero = screen.getByRole('heading', { name: "Hi, I'm Harshil..." }).closest('section')
    expect(within(hero).getAllByText((_, element) => heroParagraphs.includes(element.textContent))).toHaveLength(2)
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

    expect(within(research).getByText(researchDirection.intro)).toBeInTheDocument()
    for (const direction of researchDirection.directions) {
      expect(within(research).getByRole('heading', { name: direction.title })).toBeInTheDocument()
      expect(within(research).getByText((_, element) => element.textContent === direction.body)).toBeInTheDocument()
    }
    expect(within(research).getByText(researchDirection.closing)).toBeInTheDocument()
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
    expect(screen.getAllByRole('link', { name: 'Publications' })[0]).toHaveAttribute('href', '/publications')
    expect(screen.getByRole('link', { name: 'View all updates' })).toHaveAttribute('href', '/updates')
  })
})
