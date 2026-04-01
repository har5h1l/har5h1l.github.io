import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import Publications from './Publications'

vi.mock('framer-motion', () => ({
    motion: new Proxy(
        {},
        {
            get: (_, key) => key,
        }
    ),
}))

describe('Publications', () => {
    it('shows the new DroneSuite conference entry with research and external links', () => {
        render(
            <MemoryRouter>
                <Publications />
            </MemoryRouter>
        )

        const article = screen
            .queryAllByText('DroneSuite: Affordance-Based Hiearchical Active Inference for Autonomous Drones')
            .map((node) => node.closest('article'))
            .find(Boolean)

        expect(article).not.toBeNull()
        expect(within(article).getByText('ACSEF/HSEF, 2026')).toBeInTheDocument()
        expect(within(article).getByRole('link', { name: /more details/i })).toHaveAttribute('href', '/research#dronesuite')
        expect(within(article).getByRole('link', { name: /acsef/i })).toHaveAttribute('href', 'https://acsef.org/')
        expect(within(article).getByRole('link', { name: /project/i })).toHaveAttribute('href', 'https://www.shahmaitraresearch.com/vamai')
    })

    it('adds more details links for publications with matching research projects', () => {
        render(
            <MemoryRouter>
                <Publications />
            </MemoryRouter>
        )

        const vamaiArticle = screen
            .getAllByText('International Workshop on Active Inference (IWAI), 2025')
            .map((node) => node.closest('article'))
            .find((article) => article && within(article).queryByRole('link', { name: /workshop/i }))
        const autonavArticle = screen
            .getAllByText('ACSEF Computational Biology, 2025')
            .map((node) => node.closest('article'))
            .find((article) => article && within(article).queryByRole('link', { name: /github/i }))

        expect(within(vamaiArticle).getByRole('link', { name: /more details/i })).toHaveAttribute('href', '/research#dronesuite')
        expect(within(autonavArticle).getByRole('link', { name: /more details/i })).toHaveAttribute('href', '/research#an-active-inference-approach-to-autonomous-navigation')
    })
})
