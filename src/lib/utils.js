import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function slugify(value) {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

export function getProjectMediaClasses(project, { containPadding = 'p-4', defaultFit = 'cover' } = {}) {
    const fit = project?.mediaFit || defaultFit;
    const position = project?.mediaPosition || 'center';

    const fitClass = fit === 'contain' ? `object-contain ${containPadding}` : 'object-cover';
    const positionClass =
        position === 'top' ? 'object-top' :
        position === 'bottom' ? 'object-bottom' :
        position === 'left' ? 'object-left' :
        position === 'right' ? 'object-right' :
        'object-center';

    return `${fitClass} ${positionClass}`;
}

// generate anchor id for research projects
export function getResearchAnchorId(projectTitle) {
    if (projectTitle.includes("DroneSuite")) {
        return "dronesuite";
    }
    if (projectTitle.includes("An Active Inference Approach")) {
        return "active-inference-approach";
    }
    return slugify(projectTitle);
}
