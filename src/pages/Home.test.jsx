import { cleanup, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import Home from "./Home";
import { updates } from "@/data/updates";

vi.mock("framer-motion", () => ({
  motion: new Proxy({}, { get: (_, key) => key }),
}));
afterEach(cleanup);

function renderHome() {
  return render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  );
}

describe("Home", () => {
  it("keeps the requested hero, current updates, and writing destinations", () => {
    renderHome();
    expect(
      screen.getByRole("link", { name: "Research Interests" }),
    ).toHaveAttribute("href", "#research-direction");
    expect(
      screen.getByText(/I’m a student researcher from the Bay Area/),
    ).toBeInTheDocument();
    expect(screen.getAllByTestId("homepage-update")).toHaveLength(3);
    expect(updates.length).toBeGreaterThan(4);
    expect(
      screen.getByRole("link", { name: "Read on Substack" }),
    ).toHaveAttribute("href", "https://substack.com/@harshilshah28");
    expect(screen.getByRole("link", { name: "Browse Medium" })).toHaveAttribute(
      "href",
      "https://medium.com/@harshilshah28",
    );
  });

  it("uses concise current-research cards without status or author filler", () => {
    renderHome();
    const beyond = screen
      .getByRole("heading", { name: "Beyond the lab" })
      .closest("section");
    expect(
      within(beyond).getByRole("link", { name: "R.I.S.E. Tennis" }),
    ).toHaveAttribute("href", "https://risetennis.org/");
    expect(
      screen.getByRole("heading", { name: "Current research" }),
    ).toBeInTheDocument();
    expect(screen.getByText("RESEARCH")).toBeInTheDocument();
    expect(screen.getByText("AUTONOMOUS SYSTEMS")).toBeInTheDocument();
    expect(screen.getByText("SOCIAL COGNITION")).toBeInTheDocument();
    expect(
      screen.getByText(
        "A training-free hierarchical Active Inference architecture for autonomous UAV navigation in unfamiliar, GNSS-denied environments.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Research on how agents represent confidence in their models of other agents, translate social beliefs into action, and learn from others without simply copying them.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.queryByText("Current flagship research with Satyaki Maitra"),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/Partner-Specific Affective Precision — accepted full paper/),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Explore all research" }),
    ).toHaveAttribute("href", "/research");
    expect(screen.queryByText("View All Projects")).not.toBeInTheDocument();
    expect(document.querySelector('meta[name="keywords"]')).not.toHaveAttribute(
      "content",
      expect.stringContaining("NeuroAI"),
    );
  });
});
