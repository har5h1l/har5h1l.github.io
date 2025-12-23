import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// generate anchor id for research projects
export function getResearchAnchorId(projectTitle) {
    if (projectTitle.includes("DroneSuite")) {
        return "dronesuite";
    }
    if (projectTitle.includes("An Active Inference Approach")) {
        return "active-inference-approach";
    }
    // generate anchor id from title for other projects
    return projectTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
