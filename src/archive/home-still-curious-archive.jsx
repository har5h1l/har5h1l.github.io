export const archivedExpandedAbout = [
    {
        title: 'Why Research',
        body: "There's a strong force pulling me toward research. My favorite moments are unglamorous: pacing in my room, sketching the same system for the millionth time, realizing one assumption is wrong, and redesigning the architecture until it finally clicks. Those are the moments I love most.",
    },
    {
        title: 'What I Keep Coming Back To',
        body: "I'm obsessed with intelligence that survives real life: systems that still work when the data is messy, the lighting changes, or the full picture is missing. That's a big reason I gravitated toward Active Inference. It treats uncertainty as something you model and act with, not something you pretend away.",
    },
    {
        title: 'What Keeps Me Sharp',
        body: "Debate, tennis, and reading all sharpen the same muscles I care about in research: adaptation under pressure, disciplined curiosity, and the ability to revise your thinking instead of defending a weak assumption forever.",
    },
    {
        title: 'My Goals',
        body: 'Long term, I want to become a researcher building socially aligned AI systems that hold up in messy reality while still leaving room for a full, balanced life outside the lab.',
    },
]

export function ArchivedStillCuriousContent() {
    return (
        <div className="mt-8 space-y-7 border-t border-border pt-8">
            {archivedExpandedAbout.map((section) => (
                <div key={section.title}>
                    <h3 className="text-xl font-semibold text-foreground">{section.title}</h3>
                    <p className="mt-3 text-base leading-8 text-muted-foreground">{section.body}</p>
                </div>
            ))}
        </div>
    )
}
