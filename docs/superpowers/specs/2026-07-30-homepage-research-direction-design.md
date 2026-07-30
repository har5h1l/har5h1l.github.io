# Homepage research-direction design

## Purpose

Reframe the homepage around two connected research interests: understanding and building intelligent systems, and making intelligent systems efficient and scalable. Keep personal activities in a separate, lighter "Beyond the lab" section.

## Structure

The hero retains its current image-led two-column composition. Its eyebrow is exactly `intelligence, cognition, computation`; its supplied introduction is rendered verbatim as exactly two paragraphs. Its primary call to action is exactly `Research Direction` and targets `#research-direction`. The Publications button and its existing destination remain unchanged.

The `MORE ABOUT ME` label and `The bigger picture` heading remain. "The bigger picture" remains the homepage's large rounded content container and receives the stable `research-direction` anchor. Its supplied introductory paragraph precedes two responsive panels titled `Building and understanding intelligent systems` and `Making intelligent systems efficient and scalable`; all supplied direction and closing copy is rendered verbatim. The panels use the existing card palette, border, radius, and typography; they are adjacent at desktop widths and stack below the medium breakpoint. A full-width closing paragraph follows them to reconnect the two themes. The previous biography, including mathematics/general-learning language, debate, tennis, R.I.S.E. Tennis, reading, podcasts, recipes/drinks, and other lifestyle references, and its "Still curious?" button are removed from this research section.

The `MORE ABOUT ME` label and `Beyond the lab` heading remain. "Beyond the lab" follows immediately, uses the stable `beyond-the-lab` anchor, and is intentionally smaller. It contains the supplied personal copy verbatim as two paragraphs in a restrained rounded container. Verify whether a R.I.S.E. Tennis URL already exists in the codebase; link only when one is found, otherwise leave it as plain text.

The homepage sequence is Bigger Picture, Beyond the Lab, the existing selected projects/work section, publications and presentations, then contact/footer. Existing project and publication content is not moved or removed except as required to establish that order. All existing project, publication, resume, and contact links are preserved; navigation remains unchanged.

The homepage title is exactly `Harshil Shah | Intelligent Systems and Efficient Computing`. Its meta, Open Graph, Twitter, and any existing structured description are exactly `Student researcher exploring NeuroAI, Active Inference, embodied intelligence, robotics, multi-agent cognition, and efficient computing paradigms.`

## Data and testing

The supplied content is represented in the existing `siteContent` data module. The homepage consumes that data and renders semantic headings and paragraphs. Homepage tests replace the removed CTA assertion with checks for the research-direction anchor, CTA target, section ordering, and R.I.S.E. Tennis URL.

## Validation

Run the project's available formatter, lint, test, and production build commands. Inspect desktop, tablet, and mobile renderings through the local production preview, including horizontal overflow, anchor navigation, text wrapping, and retained external links. Confirm both hero buttons work, Beyond the lab directly follows Bigger Picture, the personal activities and old mathematics/general-learning copy no longer appear in the research section, and no duplicate prior biography remains on the homepage.
